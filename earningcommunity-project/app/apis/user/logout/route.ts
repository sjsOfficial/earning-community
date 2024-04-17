import jwt from "jsonwebtoken"
import getUser from "@/functions/getUser"
import userTypes from "@/types/userTypes"
import { NextRequest, NextResponse } from "next/server"
import prisma from '@/libs/prisma';
const secret = process.env.SECRET || "cluster0"

const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const newUser = await prisma.users.update({
        where: { id: user.id },
        data: {
            device: null,
            deviceId: null,
            pushToken: null
        }
    })
    const userToken = jwt.sign(user, secret)

    return NextResponse.json({ user: newUser, userToken })
}
export { GET }