interface CATEGORY {
    title: string,
    bn: string,
    slug: string,
    icon: string
}

import { NextRequest, NextResponse } from "next/server";
import category from "./category.json"


const GET = async (request: NextRequest) => {

    return NextResponse.json(category)
}
 
export { GET }