import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { JsonObject } from "@prisma/client/runtime/library";
import wallets from "../../wallets/wallets.json"
import { NextRequest, NextResponse } from "next/server";

interface wallets {
    name: string;
    id: string;
    icon: string;
    cashout: boolean;
    payment: boolean;
}
interface walletNameTypes {
    id: string;
    number: string;
}
const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const { amount, userWalletId } = await request.json()
    if (!amount || !userWalletId) {
        return NextResponse.json({ error: "amount || userWalletId is required" }, { status: 404 })
    }
    if (parseInt(amount) < 100) {
        return NextResponse.json({ error: "Amount is too low for withdraw request" }, { status: 404 })
    }
    try {
        const userWallet = await prisma.userWallets.findUnique({ where: { id: userWalletId } })
        if (!userWallet) {
            return NextResponse.json({ error: "Invalid walletId or userWalletId" }, { status: 404 })
        }
        const history = await prisma.withdrawHistory.create({
            data: {
                amount: parseInt(amount),
                userId: user.id,
                userWallet: userWallet,
            }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to send recharge request", code: error }, { status: 400 })
    }
}
const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        const history = await prisma.withdrawHistory.findMany({
            where: { userId: user.id },
            orderBy:{
                date:"desc"
            },
            take:take||undefined,
            skip:skip||undefined
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to get recharge history", code: error }, { status: 400 })
    }
}
export { POST, GET }