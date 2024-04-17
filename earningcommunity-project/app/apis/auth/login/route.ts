
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5"
import jwt from "jsonwebtoken"
import prisma from "@/libs/prisma";
import getUser from "@/functions/getUser";
import userTypes from "@/types/userTypes";
const secret = process.env.SECRET || "cluster0"

interface loginTypes {
    phone: string,
    password: string
}


const POST = async (request: NextRequest) => {
    const pushToken = request.headers.get("PUSH_TOKEN");
    const ip = request.headers.get("IP")
    const os = request.headers.get("OS")
    const deviceId = request.headers.get("DEVICE_ID");

    if (!pushToken) {
        return NextResponse.json({ error: "Please give notification permission" }, { status: 404 })
    }

    if (!ip || !os || !deviceId) {
        return NextResponse.json({ error: "Headers not found" }, { status: 404 })
    }
    const { phone, password } = await request.json() as loginTypes


    if (!phone || !password) {
        return NextResponse.json({ error: "Invalid phone number and password" }, { status: 404 })
    }
    try {
        const encryptedPassword = md5(password);
        const data = `${ip}+${os}+${deviceId}`
        const deviceToken = md5(data)
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
                    device: os,
                    deviceId: deviceToken,
                    pushToken: pushToken
                }
            })
            const userToken = jwt.sign(user, secret)

            return NextResponse.json({ user: newUser, userToken })
        }
        if (user.deviceId !== deviceToken) {
            return NextResponse.json({ error: "Your account has already log into another device. Logout from the device first" }, { status: 404 })
        }
        const userToken = jwt.sign(user, secret)

        return NextResponse.json({ user, userToken })
    } catch (error) {

        return NextResponse.json({ error: "Failed to login with this device ", code: error }, { status: 400 })
    }

}

export { POST }