import writeFileSystem from "@/functions/writeFile";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {

    try {
        const data = await request?.formData()
        const file = data?.get("image") as File
        if (!file) {
            return NextResponse.json({ message: "Image not found" }, { status: 400 })
        }
        const path = await writeFileSystem(file)
        return NextResponse.json({ path: path })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to upload" }, { status: 400 })
    }
}

export { POST }