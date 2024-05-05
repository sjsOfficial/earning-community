export interface CATEGORY {
    title: string,
    bn: string,
    slug: string,
    icon: string
}

import { NextRequest, NextResponse } from "next/server";
import wallets from "./wallets.json"
import prisma from "@/libs/prisma";


const GET = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    const check = request.nextUrl.searchParams.get("check")
    if (check) {
        const wallet = await Promise.all(wallets.map(async (wal) => {
            const isPresent = await prisma.adminWallets.findMany({
                where: { walletId: wal.id }
            });
            if (isPresent && isPresent.length > 0) {
                return wal;
            } else {
                return null
            }
        }));
        return NextResponse.json(wallet.filter(wal => wal !== null))
    }
    if (id) return NextResponse.json(wallets.find(d => d.id === id))
    return NextResponse.json(wallets)
}
const POST = async (request: NextRequest) => {
    const { walletId } = await request.json()

    try {
        const history = await prisma.adminWallets.findMany({ where: { walletId: walletId } })
        const index = Math.floor(Math.random() * history.length);
        //console.log(index);

        return NextResponse.json(history[index])
    } catch (error) {
        return NextResponse.json({ error: "Failed to getting admin wallets", code: error }, { status: 400 })
    }
}
const PUT = async (request: NextRequest) => {
    const { packageId, adminWalletId, transactionId, userId } = await request.json()
    if (!packageId || !adminWalletId || !transactionId || !userId) {
        return NextResponse.json({ error: "packageId || adminWalletId || transactionId || userId not found" }, { status: 404 })
    }
    try {
        const packageDetails = await prisma.packages.findUnique({ where: { id: packageId } })
        if (!packageDetails) {
            return NextResponse.json({ error: "Package not found" }, { status: 404 })
        }
        const adminWallet = await prisma.adminWallets.findUnique({ where: { id: adminWalletId } })

        if (!adminWallet) {
            return NextResponse.json({ error: "Admin Wallet not found" }, { status: 404 })
        }
        const wallet = wallets.find(d => d.id === adminWallet.walletId)
        if (!wallet) {
            return NextResponse.json({ error: "Wallet not found" }, { status: 404 })
        }
        const packageList = await prisma.packageHistory.create({
            data: {
                userId: userId,
                package: packageDetails,
                price: packageDetails.price,
                duration: packageDetails.duration,
                withdrawLimit: packageDetails.withdrawLimit,
                packageId: packageId,
                adminWallet: adminWallet,
                wallet: wallet,
                transactionId
            }
        })
        return NextResponse.json(packageList)
    } catch (error) {
        return NextResponse.json({ error: "Error creating package", code: error }, { status: 404 })
    }
}
export { GET, POST, PUT }