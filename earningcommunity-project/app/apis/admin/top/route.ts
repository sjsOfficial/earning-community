
import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    try {
        const topVideos = await prisma.videos.findMany({
            orderBy: {
                watchHistory: {
                    _count: "desc"
                }
            },
            take: 10
        });
        const topVisitors = await prisma.users.findMany({
            orderBy: {
                watchHistory: {
                    _count: "desc"
                }
            },
            take: 10,
            include: {
                withdrawHistory: {
                    select: {
                        amount: true
                    }
                },
                watchHistory: {
                    select: {
                        video: true
                    }
                }
            }
        })
        return NextResponse.json({ topVideos, topVisitors })
    } catch (error) {
        return NextResponse.json({ error: "Error while getting information", code: error }, { status: 404 })
    }
}
export {GET}