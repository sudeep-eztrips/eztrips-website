'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroVideo from '@/components/HeroVideo'
import TrustBar from '@/components/TrustBar'
import DestinationCard from '@/components/DestinationCard'
import ExperienceCard from '@/components/ExperienceCard'
import HowItWorks from '@/components/HowItWorks'
import ItineraryCard from '@/components/ItineraryCard'
import TestimonialCard from '@/components/TestimonialCard'
import EnquiryForm from '@/components/EnquiryForm'
import Footer from '@/components/Footer'
import { holidayDestinations, pilgrimageDestinations } from '@/lib/data'

type HomeClientProps = {
  hero: { heading?: string; subheading?: string }
  experiences: { emoji: string; title: string; description: string }[]
  itineraries: { image: string; duration: string; title: string; highlights: string[] | string; price: string; slug: string }[]
  testimonials: { quote: string; author: string; location: string }[]
}

export default function HomeClient({ hero, experiences, itineraries, testimonials }: HomeClientProps) {
  const [activeTab, setActiveTab] = useState<'holiday' | 'pilgrimage'>('holiday')

  // Normalize itinerary highlights from comma-separated string to array
  const normalizedItineraries = itineraries.map(it => ({
    ...it,
    highlights: typeof it.highlights === 'string'
      ? it.highlights.split(',').map((h: string) => h.trim()).filter(Boolean)
      : it.highlights,
  }))

  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroVideo heading={hero.heading} subheading={hero.subheading} />
        <TrustBar />

        {/* Destinations */}
        <section id="destinations" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Where Would You Like to Go?</p>
              <h2 className="section-heading mb-8">The World, Curated For You.</h2>
              <div className="inline-flex bg-surface rounded-xl p-1 gap-1">
                {(['holiday', 'pilgrimage'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-primary text-white shadow-ambient'
                        : 'text-on-surface/60 hover:text-on-surface'
                    }`}
                  >
                    {tab === 'holiday' ? 'Holiday' : 'Pilgrimage'}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === 'holiday'
                ? holidayDestinations.map((d, i) => (
                    <DestinationCard key={d.slug} {...d} index={i} />
                  ))
                : pilgrimageDestinations.map((d, i) => (
                    <DestinationCard key={d.slug} {...d} isPilgrimage index={i} />
                  ))}
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="py-20 md:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Travel Your Way</p>
              <h2 className="section-heading">Every Journey, Uniquely Yours.</h2>
            </div>
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.title} {...exp} index={i} />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Featured Itineraries */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Curated Experiences</p>
              <h2 className="section-heading">Journeys That Inspire.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {normalizedItineraries.map((it, i) => (
                <ItineraryCard key={it.slug} {...it} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">What Our Travellers Say</p>
              <h2 className="section-heading">Stories from the Road.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.author} {...t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquiry-form" className="py-20 md:py-28 bg-primary-gradient">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="section-label text-tertiary mb-3">Ready to Travel?</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Let&apos;s Plan Your<br />Perfect Trip.
              </h2>
              <p className="text-white/60 mt-4">
                Fill in your details and our travel expert will call you within 2 hours.
              </p>
            </motion.div>
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
