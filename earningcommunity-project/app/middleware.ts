import { NextRequest, NextResponse, userAgent } from 'next/server'
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const agent = userAgent(request)
 const browser=agent.browser;
 const device=agent.device
 const os=agent.os
  url.searchParams.set('browserName', browser.name?browser.name:"t")
  url.searchParams.set('browserVersion', browser.version?browser.version:"")
  url.searchParams.set('deviceModel', device.model?device.model:"")
  url.searchParams.set('deviceType', device.type?device.type:"")
  url.searchParams.set('osName', os.name?os.name:"")
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: '/apis/',
}