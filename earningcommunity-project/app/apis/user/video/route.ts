import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const videoId = request.nextUrl.searchParams.get("videoId");
    if (!videoId) return NextResponse.json({ "error": "Invalid video ID" }, { status: 404 });
    try {
        const video = await prisma.videos.findUnique({ where: { id: videoId } })
        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
export {GET}