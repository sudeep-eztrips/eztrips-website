'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import { holidayDestinations, pilgrimageDestinations } from '@/lib/data'
import Link from 'next/link'

type Filter = 'all' | 'asia' | 'europe' | 'africa' | 'oceania' | 'india' | 'pilgrimage'

const regionMap: Record<string, Filter[]> = {
  'Southeast Asia': ['asia'],
  'Indonesia': ['asia'],
  'East Asia': ['asia'],
  'South Asia': ['asia'],
  'Central Asia': ['asia'],
  'Europe/Asia': ['europe', 'asia'],
  'Europe': ['europe'],
  'Africa': ['africa'],
  'Oceania': ['oceania'],
  'India': ['india'],
}

export default function DestinationsPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'pilgrimage'
    ? pilgrimageDestinations
    : filter === 'all'
    ? [...holidayDestinations, ...pilgrimageDestinations]
    : holidayDestinations.filter(d => {
        const filters = regionMap[d.region] || []
        return filters.includes(filter) || (filter === 'india' && d.region === 'India')
      })

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'asia', label: 'Asia' },
    { key: 'europe', label: 'Europe' },
    { key: 'africa', label: 'Africa' },
    { key: 'oceania', label: 'Oceania' },
    { key: 'india', label: 'India' },
    { key: 'pilgrimage', label: 'Pilgrimage' },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-72 md:h-96 bg-primary-gradient flex items-end pb-12 pt-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="section-label text-tertiary mb-2">Explore the World</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                All Destinations
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl shadow-ambient border-b border-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex gap-2 overflow-x-auto py-3">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === tab.key
                    ? 'bg-primary text-white'
                    : 'bg-surface text-on-surface/60 hover:bg-surface hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section id="pilgrimage" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((d, i) => (
                <DestinationCard
                  key={d.slug}
                  {...d}
                  isPilgrimage={filter === 'pilgrimage' || pilgrimageDestinations.some(p => p.slug === d.slug)}
                  index={i}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-on-surface/50 py-20">No destinations found for this filter.</p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface text-center">
          <h2 className="text-2xl font-bold text-on-surface mb-3">Can&apos;t decide?</h2>
          <p className="text-on-surface/60 mb-6">Tell us your budget and interests — we&apos;ll suggest the perfect destination.</p>
          <Link href="/#enquiry-form" className="btn-primary inline-block">
            Get a Free Recommendation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
