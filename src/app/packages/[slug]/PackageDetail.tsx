'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Star, CheckCircle, XCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/EnquiryForm'
import type { Package } from '@/lib/api'

const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`

const HOTEL_TIERS = [
  { key: 'price_3star' as const, label: '3 Star', stars: 3, category: 'standard' },
  { key: 'price_4star' as const, label: '4 Star', stars: 4, category: 'deluxe' },
  { key: 'price_5star' as const, label: '5 Star', stars: 5, category: 'luxury' },
]

export default function PackageDetail({ pkg }: { pkg: Package }) {
  const [selectedTier, setSelectedTier] = useState<typeof HOTEL_TIERS[number]>(HOTEL_TIERS[1])
  const [openDay, setOpenDay] = useState<number | null>(0)

  const selectedPrice = pkg[selectedTier.key]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={pkg.cover_image || '/placeholder.jpg'}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

          <div className="absolute top-24 left-6 md:left-16">
            <div className="bg-white/20 backdrop-blur-xl text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/30">
              <Link href="/" className="hover:text-tertiary">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <Link href="/destinations" className="hover:text-tertiary">Destinations</Link>
              <span className="mx-2 opacity-50">/</span>
              {pkg.destination_slug && (
                <>
                  <Link href={`/destinations/${pkg.destination_slug}`} className="hover:text-tertiary">{pkg.destination}</Link>
                  <span className="mx-2 opacity-50">/</span>
                </>
              )}
              <span>{pkg.title}</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-6 md:left-16 right-6 md:right-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                {pkg.nights && (
                  <span className="bg-white/20 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock size={14} />
                    {pkg.nights} Nights / {(pkg.nights || 0) + 1} Days
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                {pkg.title}
              </h1>
              {pkg.subtitle && <p className="text-white/70 text-lg">{pkg.subtitle}</p>}
            </motion.div>
          </div>
        </section>

        {/* Hotel tier selector */}
        <section className="bg-white shadow-ambient">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
            <p className="text-xs text-on-surface/50 uppercase tracking-label mb-3">Select Hotel Category</p>
            <div className="grid grid-cols-3 gap-4">
              {HOTEL_TIERS.map(tier => {
                const price = pkg[tier.key]
                const isSelected = selectedTier.key === tier.key
                return (
                  <button
                    key={tier.key}
                    onClick={() => setSelectedTier(tier)}
                    className={`rounded-xl p-4 text-center transition-all border-2 ${
                      isSelected
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-surface hover:border-primary/30'
                    }`}
                  >
                    <div className="flex justify-center gap-0.5 mb-2">
                      {Array.from({ length: tier.stars }).map((_, i) => (
                        <Star key={i} size={12} className={isSelected ? 'text-tertiary fill-tertiary' : 'text-on-surface/30 fill-on-surface/30'} />
                      ))}
                    </div>
                    <p className="font-bold text-xl text-on-surface">
                      {price ? formatPrice(price) : '—'}
                    </p>
                    <p className="text-xs text-on-surface/50">per person</p>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
                    <Sparkles size={20} className="text-tertiary" /> Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-surface rounded-xl"
                      >
                        <CheckCircle size={16} className="text-tertiary shrink-0 mt-0.5" />
                        <span className="text-on-surface/80 text-sm">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Itinerary */}
              {pkg.itinerary_days && pkg.itinerary_days.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-on-surface mb-6">Day-wise Itinerary</h2>
                  <div className="space-y-2">
                    {pkg.itinerary_days.map((day, i) => (
                      <div key={i} className="border border-surface rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenDay(openDay === i ? null : i)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                              Day {day.day}
                            </span>
                            <span className="font-semibold text-on-surface">{day.title}</span>
                          </div>
                          {openDay === i
                            ? <ChevronUp size={16} className="text-on-surface/40" />
                            : <ChevronDown size={16} className="text-on-surface/40" />
                          }
                        </button>
                        {openDay === i && (
                          <div className="px-5 pb-4 text-on-surface/70 text-sm leading-relaxed border-t border-surface bg-surface/50">
                            <p className="pt-3">{day.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Inclusions & Exclusions side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {pkg.inclusions && pkg.inclusions.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-on-surface mb-6">Inclusions</h2>
                    <div className="space-y-2">
                      {pkg.inclusions.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 py-2">
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                          <span className="text-on-surface/80 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {pkg.exclusions && pkg.exclusions.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-on-surface mb-6">Exclusions</h2>
                    <div className="space-y-2">
                      {pkg.exclusions.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 py-2">
                          <XCircle size={16} className="text-red-400 shrink-0" />
                          <span className="text-on-surface/60 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sample Hotels */}
              {pkg.sample_hotels && pkg.sample_hotels.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-on-surface mb-6">Sample Hotels</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pkg.sample_hotels.map((hotel, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-card"
                      >
                        <div className="relative h-32">
                          <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="300px" />
                        </div>
                        <div className="p-4">
                          <div className="flex gap-0.5 mb-1">
                            {Array.from({ length: hotel.stars }).map((_, j) => (
                              <Star key={j} size={10} className="text-tertiary fill-tertiary" />
                            ))}
                          </div>
                          <p className="font-semibold text-on-surface text-sm">{hotel.name}</p>
                          <p className="text-xs text-on-surface/50 mt-0.5">{hotel.location}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sticky sidebar enquiry form */}
            <div className="hidden lg:block">
              <div className="sticky top-24 bg-primary-gradient rounded-2xl p-6 shadow-ambient-lg">
                <p className="text-white/60 text-xs uppercase tracking-label mb-1">
                  {selectedTier.label} Hotel
                </p>
                <p className="text-4xl font-extrabold text-white mb-1">
                  {selectedPrice ? formatPrice(selectedPrice) : '—'}
                </p>
                <p className="text-white/50 text-sm mb-6">per person</p>
                <h3 className="text-white font-bold text-lg mb-4">Enquire Now</h3>
                <EnquiryForm
                  defaultDestination={pkg.destination_slug || ''}
                  defaultNights={pkg.nights || undefined}
                  defaultHotelCategory={selectedTier.category}
                  className="space-y-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile enquiry form */}
        <section id="enquiry-form" className="py-16 bg-primary-gradient lg:hidden">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-white/60 text-xs uppercase tracking-label mb-1">{selectedTier.label} Hotel</p>
              <p className="text-4xl font-extrabold text-white mb-4">
                {selectedPrice ? formatPrice(selectedPrice) : '—'} / person
              </p>
              <h2 className="text-2xl font-bold text-white">Enquire Now</h2>
            </div>
            <EnquiryForm
              defaultDestination={pkg.destination_slug || ''}
              defaultNights={pkg.nights || undefined}
              defaultHotelCategory={selectedTier.category}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
