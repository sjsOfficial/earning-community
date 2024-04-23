import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    try {
        const admin = await prisma.admin.findMany()
        return NextResponse.json(admin[0])
    } catch (error) {
        return NextResponse.json({ error: "Could not find admin" }, { status: 404 })
    }
}

const PUT = async (request: NextRequest) => {
    const { creditPerSecond,id } = await request.json()
    if (!creditPerSecond ||!id) return NextResponse.json({ error: "creditPerSecond || id is missing" }, { status: 404 })
    try {
        const admin = await prisma.admin.update({
            data:{
                creditPerSecond:creditPerSecond
            },
            where:{id:id}
        })
        return NextResponse.json(admin)
    } catch (error) {
        return NextResponse.json({ error: "Could not find admin" }, { status: 404 })
    }
}
export { GET ,PUT}