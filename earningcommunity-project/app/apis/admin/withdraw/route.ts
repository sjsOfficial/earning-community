import prisma from "@/libs/prisma"
import userTypes from "@/types/userTypes"
import { NextRequest, NextResponse } from "next/server"

const GET = async (request: NextRequest) => {
    const status = request.nextUrl.searchParams.get('status');
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        const history = await prisma.withdrawHistory.findMany({
            orderBy: {
                date: "desc"
            },
            take: take || undefined,
            skip: skip || undefined,
            where: {
                status: status || undefined
            }
        })
        const count = await prisma.withdrawHistory.count({
            where: {
                status: status || undefined
            }
        })
        return NextResponse.json({ history, count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to get  history", code: error }, { status: 404 })
    }
}
const POST = async (request: NextRequest) => {
    const { accept, historyId, message } = await request.json()
    if (!accept && !message) {
        return NextResponse.json({ error: "message is required" }, { status: 400 })
    }
    if (!historyId) {
        return NextResponse.json({ error: "historyId is required" }, { status: 400 })
    }
    try {

        const history = await prisma.withdrawHistory.update({
            where: { id: historyId },
            data: {
                status: accept ? "ACCEPTED" : "REJECTED"
            }
        })
        if (!accept) {
            await prisma.users.update({
                where: { id: history.userId },
                data: {
                    balance: {
                        increment: history.amount
                    }
                }
            })
        }
        return NextResponse.json({ history })
    } catch (error) {
        return NextResponse.json({ error: "Can't accept or reject request", code: error }, { status: 400 })
    }
}
const PUT = async (request: NextRequest) => {
    try {
        const withdraw = await prisma.withdrawHistory.findMany({
            where: {
                status: "ACCEPTED"
            }
        })
        const totalWithdraw = withdraw.reduce((acc, entry) => acc + entry.amount, 0);

        const currentDate = new Date();
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        const lastMonthWithdraw = withdraw.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate.getMonth() === lastMonth.getMonth() && entryDate.getFullYear() === lastMonth.getFullYear();
        });
        const totalWithdrawLastMonth = lastMonthWithdraw.reduce((acc, entry) => acc + entry.amount, 0);
        const percentageLastMonthWithdraw = (totalWithdrawLastMonth / totalWithdraw) * 100;
        return NextResponse.json({ totalWithdraw, percentageLastMonthWithdraw })
    } catch (error) {
        return NextResponse.json({ error: "Failed to get history", code: error }, { status: 404 })
    }
}
export { GET, POST,PUT }