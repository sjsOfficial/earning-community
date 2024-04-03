import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
    const { message, accept, requestId } = await request.json()
    if (!message && !accept) return NextResponse.json({ error: "Message is required for reject request" }, { status: 404 })
    if (!requestId) return NextResponse.json({ error: "requestId is required" }, { status: 404 })
    try {

        const reqDetails = await prisma.rechargeHistory.findUnique({ where: { id: requestId } })
        if (!reqDetails) return NextResponse.json({ error: "invalid request id" }, { status: 404 })
        const res = await prisma.rechargeHistory.update({
            where: { id: requestId },
            data: {
                message: message || undefined,
                status: Boolean(accept) ? "ACCEPTED" : "REJECTED"
            }
        })
        const user = await prisma.users.update({
            where: { id: reqDetails.userId }, data: {
                balance: {
                    increment: 100
                }
            }
        })
        return NextResponse.json({ res, user })
    } catch (error) {
        return NextResponse.json({ error: "Failed to change request", code: error }, { status: 400 })
    }
}
const GET = async (request: NextRequest) => {
    const status = request.nextUrl.searchParams.get('status');
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        if (status) {
            const history = await prisma.rechargeHistory.findMany({
                where: {
                    status: status
                },
                skip: skip || undefined,
                take: take || undefined,
                orderBy: {
                    date: "desc"
                }

            })
            return NextResponse.json(history)
        }
        const history = await prisma.rechargeHistory.findMany({
            skip: skip || undefined,
            take: take || undefined,
            orderBy: {
                date: "desc"
            }
        })
        return NextResponse.json(history)
    } catch (error) {
        return NextResponse.json({ error: "Failed to get data", code: error }, { status: 400 })
    }
}
export { GET, POST }