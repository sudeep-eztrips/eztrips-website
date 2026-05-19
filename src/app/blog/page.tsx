'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

const categories = ['All', 'Destination Guides', 'Travel Tips', 'Pilgrimage', 'Food & Culture', 'Packing Lists']

const posts = [
  {
    slug: '7-days-in-bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    category: 'Destination Guides',
    title: '7 Days in Bali: The Ultimate Itinerary for First-Time Visitors',
    excerpt: 'From the rice terraces of Ubud to the temples of Uluwatu, here\'s everything you need to know to plan an unforgettable Bali trip — including what NOT to miss.',
    readTime: '8 min read',
    date: 'Jan 15, 2026',
  },
  {
    slug: 'char-dham-complete-guide',
    image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=800',
    category: 'Pilgrimage',
    title: 'Char Dham Yatra 2026: Complete Guide, Best Time & What to Expect',
    excerpt: 'Planning the sacred Char Dham circuit? Here\'s everything — registration, helicopter vs. trek, best hotels, packing essentials, and spiritual significance of all four dhams.',
    readTime: '12 min read',
    date: 'Feb 3, 2026',
  },
  {
    slug: 'packing-list-india-trips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    category: 'Packing Lists',
    title: 'The Perfect Packing List for Indian Mountain Trips (Kashmir, Ladakh, Spiti)',
    excerpt: 'What to pack for high-altitude India trips — layering systems, altitude sickness remedies, gear essentials, and what you definitely don\'t need to carry.',
    readTime: '6 min read',
    date: 'Mar 1, 2026',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <p className="section-label text-tertiary mb-3">Stories & Guides</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The EzTrips Blog
            </h1>
            <p className="text-white/60 mt-3 text-lg">Destination guides, travel tips & pilgrimage insights</p>
          </div>
        </section>

        {/* Category filter */}
        <div className="bg-white border-b border-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex gap-2 overflow-x-auto py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface text-on-surface/60 hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} {...post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl font-semibold text-on-surface mb-2">No posts yet in this category</p>
                <p className="text-on-surface/50">Check back soon — we&apos;re writing new guides every week.</p>
              </div>
            )}

            <div className="mt-16 text-center py-16 bg-surface rounded-2xl">
              <p className="text-2xl font-bold text-on-surface mb-3">More stories coming soon</p>
              <p className="text-on-surface/60 mb-6">Follow us on Instagram for daily travel inspiration and exclusive deals.</p>
              <a
                href="https://instagram.com/eztrips.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm px-6 py-3"
              >
                Follow @eztrips.in
              </a>
            </div>
          </div>
        </section>

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
