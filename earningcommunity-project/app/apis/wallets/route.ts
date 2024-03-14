interface CATEGORY {
    title: string,
    bn: string,
    slug: string,
    icon: string
}

import { NextRequest, NextResponse } from "next/server";
import wallets from "./wallets.json"


const GET = async (request: NextRequest) => {

    return NextResponse.json(wallets)
}
 
export { GET }