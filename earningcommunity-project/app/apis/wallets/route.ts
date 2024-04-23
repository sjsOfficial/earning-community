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
    if (id) return NextResponse.json(wallets.find(d => d.id === id))
    return NextResponse.json(wallets)
}
const POST = async (request: NextRequest) => {
    const {walletId} = await request.json()

    try {
        const history = await prisma.adminWallets.findMany({where: {walletId: walletId}})
        const index=Math.floor(Math.random() * history.length);
        //console.log(index);
        
        return NextResponse.json(history[index])
    } catch (error) {
        return NextResponse.json({ error: "Failed to getting admin wallets", code: error }, { status: 400 })
    }
}

export { GET, POST }