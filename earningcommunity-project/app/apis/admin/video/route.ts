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
        const video = await prisma.videos.create({
            data: {
                categoryId,
                platformType,
                title,
                videoUrl,
                duration: parseInt(duration)
            }
        })

        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json({ error: "Failed to load videos", code: error }, { status: 404 })
    }
}
const PUT = async (request: NextRequest) => {
    const { title, duration, videoUrl, platformType, categoryId, videoId } = await request.json()
    if (!videoId || !categoryId) {
        return NextResponse.json({ error: "videoId || categoryId is missing" }, { status: 400 })
    }
    try {
        const video = await prisma.videos.update({
            where: { id: videoId },
            data: {
                categoryId,
                platformType,
                title,
                videoUrl,
                duration: duration ? parseInt(duration) : undefined
            }
        })

        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json({ error: "Failed to load videos", code: error }, { status: 404 })
    }
}
const DELETE = async (request: NextRequest) => {

    const videoId = request.nextUrl.searchParams.get('videoId');
    if (!videoId) {
        return NextResponse.json({ error: "videoId is missing" }, { status: 400 })
    }
    try {
        const video = await prisma.videos.delete({
            where: { id: videoId },
        })

        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json({ error: "Failed to load videos", code: error }, { status: 404 })
    }
}
export { GET, POST, PUT, DELETE } 