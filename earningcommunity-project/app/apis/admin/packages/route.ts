import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
    const body = await request.json()
    const { title, price, duration, withdrawLimit, description } = body;
    if (!title || !price || !description || !duration || !withdrawLimit) {
        return NextResponse.json({ error: "Fields are required" }, { status: 404 })
    }
    try {

        const createdPackage = await prisma.packages.create({
            data: {
                title,
                price: parseFloat(price),
                duration: parseInt(duration),
                withdrawLimit: parseInt(withdrawLimit),
                description
            }
        });
        return NextResponse.json(createdPackage)
    } catch (error) {
        return NextResponse.json({ error: "Failed to create package" }, { status: 400 })
    }
}
const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) {
        return NextResponse.json({ error: "Invalid Id" }, { status: 404 })
    }
    try {
        const pack = await prisma.packages.delete({ where: { id: id } })
        return NextResponse.json(pack)
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete package" }, { status: 400 })
    }
}
const PUT = async (request: NextRequest) => {
    const body = await request.json()
    const { title, price, duration, withdrawLimit, description, id } = body;
    if (!id) {
        return NextResponse.json({ error: "Fields are required" }, { status: 404 })
    }
    try {

        const createdPackage = await prisma.packages.update({
            where: {
                id: id
            },
            data: {
                title,
                price: price && parseFloat(price),
                duration: duration && parseInt(duration),
                withdrawLimit: withdrawLimit && parseInt(withdrawLimit),
                description
            }

        });
        return NextResponse.json(createdPackage)
    } catch (error) {
        return NextResponse.json({ error: "Failed to update package" }, { status: 400 })
    }
}
export { POST, PUT, DELETE }