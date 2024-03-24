import { MiddlewareFactory } from "@/middleware";
import {
    NextFetchEvent,
    NextRequest,
    NextResponse
} from "next/server";
import jwt from "jsonwebtoken"
import * as jose from 'jose'

const jwtConfig = {
    secret: new TextEncoder().encode(process.env.SECRET || "cluster0"),
}
const checkAdmin: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;

        if (["/admin"]?.some((path) => pathname.includes(path))) {
            const token = request.headers.get("Authorization");
            if (!token) return NextResponse.json({ error: "Token is required" }, { status: 404 })
        
            try {
                const jst = jose.jwtVerify(token.split(" ")[1], jwtConfig.secret)
                const decode = (await jst).payload

                if (!decode.isAdmin) {
                    return NextResponse.json({ error: "Invalid Admin" }, { status: 404 })
                }
                request.headers.set("USER", JSON.stringify(decode))
                return NextResponse.next()
            } catch (error) {
                return NextResponse.json({ error: "Invalid token" }, { status: 404 })
            }

        }
        return next(request, _next);
    };
};
export default checkAdmin