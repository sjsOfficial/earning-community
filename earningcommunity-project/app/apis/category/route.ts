interface CATEGORY {
    title: string,
    bn: string,
    slug: string,
    icon: string
}

import { NextRequest, NextResponse } from "next/server";
import category from "./category.json"
import prisma from "@/libs/prisma";


const GET = async (request: NextRequest) => {
    const includeVideo = request.nextUrl.searchParams.get("includeVideo")
    if (!includeVideo) {
        return NextResponse.json(category)
    }
    try {
        const categories = await Promise.all(category.map(async (cat) => {
            const count = await prisma.videos.count({
                where: { categoryId: cat.id }
            });
            return { ...cat, count: count };
        }));
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({ error: "Error while fetching category", code: error }, { status: 404 })
    }
}

export { GET }