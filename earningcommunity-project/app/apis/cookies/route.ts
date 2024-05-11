import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

const GET = async (request: NextRequest) => {
    const id =request.nextUrl.searchParams.get('id');
    try {
        const agent = userAgent(request)
        const cookieStore = cookies()
        cookieStore.set("os", agent.ua)
        cookieStore.set("id", agent.browser.name + "-" + agent.browser.version)
        const res = await axios.get("https://api.ipify.org?format=json");
        cookieStore.set("ip", res.data.ip)


        return NextResponse.json({ agent: agent, ip: res.data.ip })
    } catch (error) {
        return NextResponse.json(error)
    }

}
export { GET }