import { NextResponse } from 'next/server'
import { allDestinations } from '@/lib/data'

const BASE_URL = 'https://eztrips.in'

export function GET() {
  const urls = [
    { loc: BASE_URL, changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/destinations`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/pilgrimage`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/blog`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${BASE_URL}/faq`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/contact`, changefreq: 'yearly', priority: '0.6' },
    { loc: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: '0.3' },
    { loc: `${BASE_URL}/terms`, changefreq: 'yearly', priority: '0.3' },
    ...allDestinations.map(dest => ({
      loc: `${BASE_URL}/destinations/${dest.slug}`,
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
