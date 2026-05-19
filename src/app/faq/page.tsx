import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fetchPage } from '@/lib/api'
import FaqClient from './faq-client'
import type { FaqItem } from './faq-client'

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPage('faq')
  return {
    title: page?.seo_title || 'FAQ — EzTrips',
    description: page?.seo_description || 'Frequently asked questions about booking with EzTrips.',
  }
}

/**
 * Parse CMS content into FAQ items.
 * Expected format in CMS content field (HTML):
 *   <h3>Question here?</h3>
 *   <p>Answer here.</p>
 *
 * If the content doesn't match this pattern, returns null (uses default FAQs).
 */
function parseFaqContent(html: string): FaqItem[] | null {
  const questionRegex = /<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>/g
  const items: FaqItem[] = []
  let match
  while ((match = questionRegex.exec(html)) !== null) {
    items.push({ question: match[1].trim(), answer: match[2].trim() })
  }
  return items.length > 0 ? items : null
}

export default async function FAQPage() {
  const page = await fetchPage('faq')
  const cmsFaqs = page?.content ? parseFaqContent(page.content) : null

  return (
    <>
      <Navbar />
      <main id="main-content">
        <FaqClient title={page?.title || undefined} cmsFaqs={cmsFaqs} />
      </main>
      <Footer />
    </>
  )
}
