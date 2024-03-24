import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import md5 from "md5"
const secret = process.env.SECRET || "cluster0"

interface tokenTypes {
    number: string,
}


const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = JSON.parse(stringValue) as userTypes
    try {
        const userDetails = await prisma.users.findUnique({
            where: { id: user.id }
        })
        return NextResponse.json(userDetails)
    } catch (error) {
        return NextResponse.json({ error: "Failed to get user data", code: error }, { status: 400 })
    }
}
const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = JSON.parse(stringValue) as userTypes

    const { token, password, otp } = await request.json()
    if (!token || !password || !otp) {
        return NextResponse.json({ error: "token || password || otp is required" }, { status: 404 })
    }
    try {
        const encryptedPassword = md5(password);
        if (encryptedPassword !== user.password) {
            return NextResponse.json({ error: "Your given password is incorrect" }, { status: 404 })
        }

        const { number } = jwt.verify(token, secret) as tokenTypes

        const updateUser = await prisma.users.update({
            where: { id: user.id },
            data: {
                phone: number
            }
        })
        const userToken = jwt.sign(updateUser, secret)
        return NextResponse.json({ user: updateUser, userToken })
    } catch (error) {
        return NextResponse.json({ error: "Failed to update phone number", code: error }, { status: 400 })
    }
}
const PUT = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = JSON.parse(stringValue) as userTypes
    const { name, gender, age } = await request.json()
    try {
        const updateUser = await prisma.users.update({
            where: { id: user.id },
            data: {
                name: name || undefined,
                age: age?new Date(age):undefined,
                gender: gender
            }
        })
        return NextResponse.json(updateUser)
    } catch (error) {
        return NextResponse.json({ error: "Failed to update user data", code: error }, { status: 400 })
    }
}
export { GET, POST, PUT }