import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server";

const GET = async (request: NextRequest) => {
    try {
        const agent = userAgent(request)
        const cookieStore = cookies()
        cookieStore.set("os", agent.ua, { expires: 120 })
        cookieStore.set("id", agent.browser.name + "-" + agent.browser.version, { expires: 120 })
        const res = await axios.get("https://api.ipify.org?format=json");
        cookieStore.set("ip", res.data.ip, { expires: 120 })

        return NextResponse.json({ agent: agent, ip: res.data.ip })
    } catch (error) {
        return NextResponse.json(error)
    }

}
export { GET }