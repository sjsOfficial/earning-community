import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    try {
        const history = await prisma.watchHistory.findMany({
            where: {
                userId: user.id,
            },
            include: {
                video: true
            },
            take:50
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data", code: error }, { status: 400 })
    }
}
export {GET}