import getUser from "@/functions/getUser"
import prisma from "@/libs/prisma"
import userTypes from "@/types/userTypes"
import md5 from "md5"
import { NextRequest, NextResponse } from "next/server"


const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes

    const { newPassword, oldPassword } = await request.json()
    if (!newPassword || !oldPassword) {
        return NextResponse.json({ error: "oldPassword || newPassword is required" }, { status: 404 })
    }
    try {
        const encryptedPassword = md5(oldPassword);
        if (encryptedPassword !== user.password) {
            return NextResponse.json({ error: "Your given password is incorrect" }, { status: 404 })
        }

        const encryptedPasswordNew = md5(newPassword);
        const updateUser = await prisma.users.update({
            where: { id: user.id },
            data: {
                password: encryptedPasswordNew
            }
        })
        return NextResponse.json(updateUser)
    } catch (error) {
        return NextResponse.json({ error: "Failed to update password", code: error }, { status: 400 })
    }
}
export { POST }