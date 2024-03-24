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
    try {
        const packages = await prisma.packages.findMany({ orderBy: { date: "desc" } })
        return NextResponse.json(packages)
    } catch (error) {
        return NextResponse.json({ error: "Could not find packages" }, { status: 404 })
    }

}

export { GET}