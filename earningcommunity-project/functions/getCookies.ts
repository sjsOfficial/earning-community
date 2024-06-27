import axios from "axios";
import { NextRequest, userAgent } from "next/server";

const getCookies = async (request: NextRequest) => {
    const agent = userAgent(request)
    const res = await axios.get("https://api.ipify.org?format=json");
    return { os: agent.ua, id: `${agent.browser.name}-${agent.browser.version}`, ip: res.data.ip }
}
export default getCookies;