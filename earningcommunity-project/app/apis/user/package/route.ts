import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import wallets from "../../wallets/wallets.json"

const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    const checkAdmin = request.nextUrl.searchParams.get("checkAdmin")
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    if (checkAdmin && !user.isAdmin) {
        return NextResponse.json({ error: "Need Admin Login" }, { status: 404 })
    }
    try {
        let packageList;
        let count;
        if (checkAdmin) {
            packageList = await prisma.packageHistory.findMany({
                take: take || undefined,
                skip: skip || undefined,
                orderBy: {
                    date: "desc"
                }
            });
            count = await prisma.packageHistory.count()
        } else {
            packageList = await prisma.packageHistory.findMany({
                where: { userId: user.id },
                take: take || undefined,
                skip: skip || undefined,
                orderBy: {
                    date: "desc"
                }
            });
            count = await prisma.packageHistory.count({
                where: { userId: user.id },
            })
        }
        return NextResponse.json({ history: packageList, count })
    } catch (error) {
        return NextResponse.json({ error: "Error getting package list" }, { status: 404 })
    }
}

const PUT = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")

    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    if (!user.isAdmin) {
        return NextResponse.json({ error: "Need Admin Login" }, { status: 404 })
    }
    const { historyId, accept } = await request.json()
    if (!historyId) {
        return NextResponse.json({ error: "historyId  not found" })
    }
    try {
        const packageList = await prisma.packageHistory.update({
            where: { id: historyId },
            data: {
                status: accept ? "ACCEPTED" : "REJECTED"
            }
        })
        return NextResponse.json(packageList)
    } catch (error) {
        return NextResponse.json({ error: "Error getting package list" }, { status: 404 })
    }
}


export { GET, PUT }