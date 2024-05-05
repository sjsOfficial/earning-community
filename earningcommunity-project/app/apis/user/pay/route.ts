import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    const { packageId, redirectUrl,cancelUrl } = await request.json()
    const host = request.headers.get("x-forwarded-host")
    const proto = request.headers.get("x-forwarded-proto")

    if (!packageId || !redirectUrl|| !cancelUrl) return NextResponse.json({ error: "packageId ||  redirectUrl || cancelUrl is missing" }, { status: 404 })
    try {
        const isPackage = await prisma.packages.findUnique({
            where: { id: packageId }
        })
        if (!isPackage) return NextResponse.json({ error: "Invalid package id" }, { status: 404 })
        if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 })
        //const redirectUrl
        return NextResponse.json({url:`${proto}://${host}/pay/${packageId}?user=${user.id}&redirect=${redirectUrl}&amount=${isPackage.price}&cancelUrl=${cancelUrl}`})
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong", code: error }, { status: 400 })
    }
}
export { POST }