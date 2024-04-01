import getUser from "@/functions/getUser";
import userTypes from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";

const POST=async(request:NextRequest)=>{
    const stringValue = request.headers.get("USER")
    if (!stringValue) {
        return NextResponse.json({ error: "Invalid User" }, { status: 404 })
    }
    const user = await getUser(stringValue) as userTypes
    try {
        
    } catch (error) {
        
    }
}
const GET=async(request:NextRequest)=>{
    
}
export {POST}