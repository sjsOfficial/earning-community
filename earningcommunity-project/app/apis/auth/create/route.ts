import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import md5 from "md5"
import prisma from "@/libs/prisma";
import { encrypt } from "@/functions/JWT";
import getCookies from "@/functions/getCookies";
const secret = process.env.SECRET || "cluster0"


interface tokenTypes {
    number: string,
    otp: string
}

interface requestTypes {
    name: string,
    password: string,
    token: string,
}
const GET = async (request: NextRequest) => {
    const number = request.nextUrl.searchParams.get("phoneNumber");
    if (!number) {
        return NextResponse.json({ error: "Phone Number not found" }, { status: 404 });
    }
    if (number.length !== 11) {
        return NextResponse.json({ error: "Invalid phone number" }, { status: 404 });
    }
    try {
        const data = {
            number: number,
            otp: "000000"
        }
        const key = jwt.sign(data, secret, { expiresIn: '5m' })
        return NextResponse.json({ key: key })

    } catch (error) {
        return NextResponse.json({ error: "Failed to generate token" }, { status: 400 });
    }
}

const POST = async (request: NextRequest) => {
    const pushToken = request.headers.get("PUSH_TOKEN");
   
    const { name, password, token } = await request.json() as requestTypes

    if (!name || !password || !token) {
        return NextResponse.json({ error: "Some fields are required" }, { status: 404 })
    }
    if (name.length < 4 || name.length > 20) {
        return NextResponse.json({ error: "Name field is between 4 to 20 character" }, { status: 404 })
    }
    if (password.length < 6 || password.length > 20) {
        return NextResponse.json({ error: "Password field is between 6 to 20 character" }, { status: 404 })
    }
    try {
        const sessions=await getCookies(request)
        if (!sessions.ip || !sessions.os || !sessions.id) {
            return NextResponse.json({ error: "Headers not found" }, { status: 404 })
        }
        const { number } = jwt.verify(token, secret) as tokenTypes
        const oldUser = await prisma.users.findUnique({
            where: { phone: number }
        })
        if (oldUser) {
            return NextResponse.json({ error: "Phone number has already been used" }, { status: 404 })
        }
        const data = `${sessions.ip}+${sessions.os}+${sessions.id}`
        const encryptedPassword = md5(password);
        const deviceToken = data
        const user = await prisma.users.create({
            data: {
                name: name,
                phone: number,
                password: encryptedPassword,
                deviceId: deviceToken,
                pushToken: pushToken || '',
                device: sessions.os
            }
        })

        const userToken =await encrypt(user.id,user.isAdmin)
        return NextResponse.json({ user, userToken })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Failed to sign in with the device token" }, { status: 400 })
    }
}

const PUT = async (request: NextRequest) => {
    const { OTP, key } = await request.json()
    if (!OTP || !key) {
        return NextResponse.json({ error: "OTP and key not found" }, { status: 404 })
    }
    try {
        const { otp, number } = jwt.verify(key, secret) as tokenTypes
        if (otp !== OTP) {
            return NextResponse.json({ error: "Invalid OTP" }, { status: 404 })
        }
        const data = {
            number: number,
        }
        const token = jwt.sign(data, secret, { expiresIn: "1h" })
        return NextResponse.json({ token: token })
    } catch (error) {
        return NextResponse.json({ error: "Failed to generate token" }, { status: 400 })
    }
}
export { GET, POST, PUT }