import { NextRequest, NextResponse, userAgent } from 'next/server'
import jwt from "jsonwebtoken"

interface PlayLoad {
  username: string,
  userId: string
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname
  const secretKey = process.env.TOKEN;
  const agent = request.headers.get("User-Agent")
  const agentId = request.headers.get("Agent-Id")
  const deviceId = request.headers.get("Device-Id")
  const token = request.headers.get("Authorization")


  if (!agent || !deviceId || !agentId) {
    return NextResponse.json({ error: "Invalid request sources" }, { status: 404 })
  }
  if (url !== "/apis/user/login") {
    const ts = token?.split(" ")?.[1]
    if (!ts) {
      return NextResponse.json({ error: "Empty user token" }, { status: 404 })
    }
    try {
      const decoded = jwt.verify(token, secretKey ? secretKey : "ecbd") as PlayLoad
      const { username, userId } = decoded;
      

    } catch (error) {
      return NextResponse.json({ error: "Invalid user token" }, { status: 404 })
    }
  }


  return NextResponse.next()
}

export const config = {
  matcher: '/apis/user/:path*',
}