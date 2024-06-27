
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5"
import jwt from "jsonwebtoken"
import prisma from "@/libs/prisma";
import getUser from "@/functions/getUser";
import userTypes from "@/types/userTypes";
import { encrypt } from "@/functions/JWT";
import getCookies from "@/functions/getCookies";
const secret = process.env.SECRET || "cluster0"

interface loginTypes {
    phone: string,
    password: string
}


const POST = async (request: NextRequest) => {
    const pushToken = request.headers.get("PUSH_TOKEN");
    
    const { phone, password } = await request.json() as loginTypes


    if (!phone || !password) {
        return NextResponse.json({ error: "Invalid phone number and password" }, { status: 404 })
    }
    try {
        const sessions=await getCookies(request)
        if (!sessions.ip || !sessions.os || !sessions.id) {
            return NextResponse.json({ error: "Headers not found" }, { status: 404 })
        }
        const encryptedPassword = md5(password);
        const data = `${sessions.ip}+${sessions.os}+${sessions.id}`
        const deviceToken = data
        //console.log(data)
        const user = await prisma.users.findUnique({
            where: {
                phone: phone,
                password: encryptedPassword
            }
        })
        if (!user) {
            return NextResponse.json({ error: "Phone number and password are incorrect" }, { status: 404 })
        }
        if (!user.deviceId) {
            const newUser = await prisma.users.update({
                where: { id: user.id },
                data: {
                    device: sessions.os,
                    deviceId: deviceToken,
                    pushToken: pushToken
                }
            })
            const userToken = await encrypt(user.id, user.isAdmin)

            return NextResponse.json({ user: newUser, userToken })
        }
        if (user.deviceId !== deviceToken) {
            return NextResponse.json({ error: "Your account has already log into another device. Logout from the device first" }, { status: 404 })
        }
        const userToken = await encrypt(user.id, user.isAdmin)
        return NextResponse.json({ user, userToken })
    } catch (error) {

        return NextResponse.json({ error: "Failed to login with this device ", code: error }, { status: 400 })
    }

}

export { POST }