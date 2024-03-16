interface CATEGORY {
    title: string,
    bn: string,
    slug: string,
    icon: string
}

import { NextRequest, NextResponse } from "next/server";


const GET = async (request: NextRequest) => {

   return NextResponse.json({message:"ok"})
}
 
export { GET }