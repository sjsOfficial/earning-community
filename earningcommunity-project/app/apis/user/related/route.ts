import getUser from "@/functions/getUser";
import prisma from "@/libs/prisma";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const videoId = request.nextUrl.searchParams.get("videoId");
    if (!videoId) return NextResponse.json({ "error": "Invalid video ID" }, { status: 404 });
    try {
        const theVideo = await prisma.videos.findUnique({
            where: {
                id: videoId
            }
        })
        if (!theVideo) return NextResponse.json({ "error": "Invalid video ID" }, { status: 404 });
        const related = await prisma.videos.findMany({
            where: {
                categoryId: theVideo.categoryId
            },
            take: 10
        })
        return NextResponse.json(related)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data", code: error }, { status: 400 })
    }
}
export { GET }