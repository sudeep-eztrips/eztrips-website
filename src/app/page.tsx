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

const experiences = [
  { emoji: '🌙', title: 'Honeymoon', description: 'Romantic getaways crafted for two — private villas, candlelit dinners, sunset cruises.' },
  { emoji: '👨‍👩‍👧', title: 'Family', description: 'Kid-friendly itineraries with the right pace, safe hotels, and activities for all ages.' },
  { emoji: '🧗', title: 'Adventure', description: 'Trekking, diving, rafting — adrenaline-packed journeys for the bold traveller.' },
  { emoji: '💎', title: 'Luxury', description: 'Five-star properties, private transfers, exclusive experiences. Nothing but the best.' },
  { emoji: '👥', title: 'Group', description: 'Seamless group travel for friends, colleagues, or communities. We handle logistics.' },
  { emoji: '🙏', title: 'Pilgrimage', description: 'Spiritual journeys to India\'s sacred sites — managed with care and devotion.' },
]

const itineraries = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&h=900&fit=crop&q=80',
    duration: '7 Days',
    title: '7 Days in Bali — Temples, Rice Terraces & Beaches',
    highlights: ['Visit Tanah Lot & Uluwatu temples', 'Tegalalang rice terrace sunrise trek', 'Seminyak & Nusa Dua beach days'],
    price: '₹65,000',
    slug: 'bali',
  },
  {
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1600&h=900&fit=crop&q=80',
    duration: '8 Days',
    title: '8 Days Thailand — Bangkok, Phuket & Krabi',
    highlights: ['Grand Palace & temple tours in Bangkok', 'Phi Phi Islands speedboat day trip', 'Kayaking through Railay Beach caves'],
    price: '₹72,000',
    slug: 'thailand',
  },
  {
    image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=1600&h=900&fit=crop&q=80',
    duration: '12 Days',
    title: 'Char Dham Yatra — 12 Days Spiritual Journey',
    highlights: ['Yamunotri & Gangotri darshans', 'Kedarnath helicopter option', 'Badrinath aarti & temple ceremony'],
    price: '₹55,000',
    slug: 'char-dham',
  },
]

const testimonials = [
  {
    quote: 'Planned our Bali honeymoon — everything was perfect. Not a single thing to worry about.',
    author: 'Priya & Rahul',
    location: 'Bengaluru',
  },
  {
    quote: 'The Char Dham package was beyond expectations. AC vehicle, great hotels, escorted darshans.',
    author: 'Suresh Iyer',
    location: 'Chennai',
  },
  {
    quote: 'Japan trip was flawlessly executed. Every detail was taken care of. Will book again!',
    author: 'Ananya Sharma',
    location: 'Mumbai',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'holiday' | 'pilgrimage'>('holiday')

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroVideo />

        {/* Trust bar */}
        <TrustBar />

        {/* Destinations */}
        <section id="destinations" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Where Would You Like to Go?</p>
              <h2 className="section-heading mb-8">The World, Curated For You.</h2>

              {/* Tabs */}
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

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.title} {...exp} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Featured Itineraries */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Curated Experiences</p>
              <h2 className="section-heading">Journeys That Inspire.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {itineraries.map((it, i) => (
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
