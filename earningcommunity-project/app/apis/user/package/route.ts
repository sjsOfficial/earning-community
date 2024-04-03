import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    try {
        const packageList = await prisma.packageHistory.findMany({
            where: { userId: user.id }
        })
        return NextResponse.json(packageList)
    } catch (error) {
        return NextResponse.json({ error: "Error getting package list" }, { status: 404 })
    }
}
const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const { packageId } = await request.json()
    if (!packageId) {
        return NextResponse.json({ error: "packageId not found" })
    }
    try {
        const packageDetails = await prisma.packages.findUnique({ where: { id: packageId } })
        if (!packageDetails) {
            return NextResponse.json({ error: "Package not found" }, { status: 404 })
        }
        if (user.balance < packageDetails.price) {
            return NextResponse.json({ error: "Balance is too short to buy!",code:"LOW_BALANCE" }, { status: 404 })
        }
        await prisma.users.update({
            where: { id: user.id },
            data: {
                balance: user.balance - packageDetails.price
            }
        })
        const packageList = await prisma.packageHistory.create({
            data: {
                userId: user.id,
                package: packageDetails,
                price: packageDetails.price,
                duration: packageDetails.duration,
                withdrawLimit: packageDetails.withdrawLimit
            }
        })
        return NextResponse.json(packageList)
    } catch (error) {
        return NextResponse.json({ error: "Error creating package", code: error }, { status: 404 })
    }
}

export { GET, POST }