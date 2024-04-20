import getUser from "@/functions/getUser";
import writeFileSystem from "@/functions/writeFile";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import wallets from "../../wallets/wallets.json"

const GET = async (request: NextRequest) => {
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        const history = await prisma.adminWallets.findMany({
            skip: skip || undefined,
            take: take || undefined,
            orderBy: {
                date: "desc"
            }
        })
       const wallet= history.map((doc, i) => {
            return { ...doc, wallet: wallets.find(d => d.id === doc.walletId) }
        })
        const count = await prisma.adminWallets.count()
        return NextResponse.json({ wallet, count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to getting admin wallets", code: error }, { status: 400 })
    }
}

const POST = async (request: NextRequest) => {

    const { number, walletId } = await request.json()
    if (!number || !walletId) {
        return NextResponse.json({ error: "number || walletId is required" }, { status: 404 })
    }
    if (number.length < 11 || number.length > 12) {
        return NextResponse.json({ error: "Invalid phone number" }, { status: 404 });
    }
    try {
        const history = await prisma.adminWallets.create({
            data: {
                number,
                walletId
            }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to creating admin wallet", code: error }, { status: 400 })
    }
}
const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) {
        return NextResponse.json({ error: "Invalid Id" }, { status: 404 })
    }
    try {
        const history = await prisma.adminWallets.delete({
            where: { id: id }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete admin wallet", code: error }, { status: 400 })
    }
}
export { GET, POST, DELETE }