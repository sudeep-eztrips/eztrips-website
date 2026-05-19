import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fetchBlogPosts, fetchPage } from '@/lib/api'
import BlogClient from './blog-client'

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPage('blog')
  return {
    title: page?.seo_title || 'Blog — EzTrips',
    description: page?.seo_description || 'Destination guides, travel tips & pilgrimage insights from EzTrips.',
  }
}

export default async function BlogPage() {
  const [posts, page] = await Promise.all([
    fetchBlogPosts(),
    fetchPage('blog'),
  ])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="section-label text-tertiary mb-3">Stories & Guides</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {page?.title || 'The EzTrips Blog'}
            </h1>
            <p className="text-white/60 mt-3 text-lg">Destination guides, travel tips & pilgrimage insights</p>
          </div>
        </section>

        <BlogClient posts={posts} />

        {/* CTA */}
        <section className="py-16 bg-primary-gradient text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to make your own travel story?</h2>
          <p className="text-white/60 mb-6">Let EzTrips plan your perfect journey.</p>
          <Link href="/#enquiry-form" className="btn-primary inline-block">Plan My Trip</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
