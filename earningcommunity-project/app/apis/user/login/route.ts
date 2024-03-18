import { NextRequest, NextResponse } from "next/server";

const POST=async(request:NextRequest)=>{
    console.log(request.nextUrl.search)
    return NextResponse.json({})
}

export {POST}