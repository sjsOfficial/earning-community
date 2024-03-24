import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import md5 from "md5"
import prisma from "@/libs/prisma";
const secret = process.env.SECRET || "cluster0"

interface tokenTypes {
    number: string,
}

interface requestTypes {
    name: string,
    division: string,
    district: string,
    subDistrict: string,
    password: string,
    token: string,
}


const POST = async (request: NextRequest) => {

    const { password, token } = await request.json() as requestTypes

    if (!password || !token) {
        return NextResponse.json({ error: "Some fields are required" }, { status: 404 })
    }
    if (password.length < 6 || password.length > 20) {
        return NextResponse.json({ error: "Password field is between 6 to 20 character" }, { status: 404 })
    }
    try {
        const { number } = jwt.verify(token, secret) as tokenTypes

        const encryptedPassword = md5(password);

        const user = await prisma.users.update({
            where: {
                phone: number
            },
            data: {
                password: encryptedPassword
            }
        })

        const userToken = jwt.sign(user, secret)
        return NextResponse.json({ user, userToken })

    } catch (error) {
        return NextResponse.json({ error: "Failed to change password of the user", code: error }, { status: 400 })
    }
}
export { POST }