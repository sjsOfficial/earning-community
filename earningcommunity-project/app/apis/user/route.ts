import { NextRequest, NextResponse } from "next/server";

const POST=async(request:NextRequest)=>{
    console.log(request.nextUrl.searchParams.get("browserName"))
    return NextResponse.json({}).cookies.set("token","sds",{expires:1})
}

export {POST}