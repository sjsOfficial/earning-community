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
    const { amount, walletId, adminWalletId, transactionId } = await request.json()
    if (!amount || !walletId || !adminWalletId || !transactionId) {
        return NextResponse.json({ error: "amount || walletId || adminWalletId || transactionId is required" }, { status: 404 })
    }
    try {
        const wallet = wallets.find(d => d.id === walletId)
        const adminWallet = await prisma.adminWallets.findUnique({ where: { id: adminWalletId } })
        if (!adminWallet || !wallet) {
            return NextResponse.json({ error: "Invalid walletId and adminWalletId" }, { status: 404 })
        }
        const history = await prisma.rechargeHistory.create({
            data: {
                amount: parseInt(amount),
                adminWallet: adminWallet,
                wallet: wallet,
                userId: user.id,
                transactionId: transactionId
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
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    const user = await getUser(stringValue) as userTypes
    try {
        const history = await prisma.rechargeHistory.findMany({
            where: { userId: user.id },
            orderBy: { date: "desc" },
            take: take || undefined,
            skip: skip || undefined
        })
        const count = await prisma.rechargeHistory.count({
            where: { userId: user.id },
            orderBy: { date: "desc" },
        })
        return NextResponse.json({ history, count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to get recharge history", code: error }, { status: 400 })
    }
}
export { POST, GET }