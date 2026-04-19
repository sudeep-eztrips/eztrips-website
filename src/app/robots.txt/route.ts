import { NextResponse } from 'next/server'

export function GET() {
  return new NextResponse(
    `User-agent: *\nAllow: /\nSitemap: https://eztrips.in/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  )
}
