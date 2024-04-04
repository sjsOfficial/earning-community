interface PACKAGES {
    id: string,
    title: string,
    price: number,
    duration: number,
    withdrawLimit: number,
    description: string,
    date: Date
}

import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";


const GET = async (request: NextRequest) => {
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        const packages = await prisma.packages.findMany({
            skip: skip || undefined,
            take: take || undefined,
            orderBy: {
                date: "desc"
            }

        })
        const count=await prisma.packages.count()
        return NextResponse.json({packages,count})
    } catch (error) {
        return NextResponse.json({ error: "Could not find packages" }, { status: 404 })
    }

}

export { GET }