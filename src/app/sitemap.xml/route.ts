import { NextResponse } from 'next/server'

const BASE_URL = 'https://eztrips.in'
const slugs = ['thailand', 'bali', 'andaman', 'kashmir', 'japan', 'char-dham']

export function GET() {
  const urls = [
    { loc: BASE_URL, changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/destinations`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/blog`, changefreq: 'weekly', priority: '0.8' },
    ...slugs.map(slug => ({
      loc: `${BASE_URL}/destinations/${slug}`,
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
