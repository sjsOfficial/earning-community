import getUser from "@/functions/getUser";
import writeFileSystem from "@/functions/writeFile";
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
        const history = await prisma.userWallets.findMany({
            where: { userId: user.id },
            orderBy: { date: "desc" }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to getting user wallets", code: error }, { status: 400 })
    }
}

const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const { number, walletHolderName, wallet } = await request.json()
    if (!number || !wallet || !walletHolderName) {
        return NextResponse.json({ error: "title || number || walletHolderName|| wallet is required" }, { status: 404 })
    }
    if (number.length < 11 || number.length > 12) {
        return NextResponse.json({ error: "Invalid phone number" }, { status: 404 });
    }
    try {
        const history = await prisma.userWallets.create({
            data: {
                number,
                walletHolderName,
                wallet,
                userId: user.id,
            }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to creating user wallet", code: error }, { status: 400 })
    }
}
const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) {
        return NextResponse.json({ error: "Invalid Id" }, { status: 404 })
    }
    try {
        const history = await prisma.userWallets.delete({
            where: { id: id }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete user wallet", code: error }, { status: 400 })
    }
}
export { GET, POST, DELETE }