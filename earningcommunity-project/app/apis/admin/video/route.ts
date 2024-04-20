import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const platformType = request.nextUrl.searchParams.get('platformType');
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)
    try {
        const videos = await prisma.videos.findMany({
            where: {
                platformType: platformType || undefined,
            },
            orderBy: {
                date: "desc"
            },
            take: take || undefined,
            skip: skip || undefined
        })
        const count = await prisma.videos.count({
            where: {
                platformType: platformType || undefined,
            },
        })
        return NextResponse.json({ videos, count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to load videos", code: error }, { status: 404 })
    }
}
const POST = async (request: NextRequest) => {
    const { title, duration, videoUrl, platformType, categoryId } = await request.json()
    if (!title || !duration || !videoUrl || !platformType || !categoryId) {
        return NextResponse.json({ error: "title || duration || videoUrl || platformType || categoryId is missing" }, { status: 400 })
    }
    try {
        const videos = await prisma.videos.create({
            data: {
                categoryId,
                platformType,
                title,
                videoUrl,
                duration: parseInt(duration)
            }
        })
        const count = await prisma.videos.count({
            where: {
                platformType: platformType || undefined,
            },
        })
        return NextResponse.json({ videos, count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to load videos", code: error }, { status: 404 })
    }
}
export { GET, POST }