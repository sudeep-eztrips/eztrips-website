'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, CreditCard, Globe, ChevronDown, ChevronUp, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/EnquiryForm'
import StickyEnquiryBar from '@/components/StickyEnquiryBar'
import { destinationDetails } from '@/lib/destinationData'

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = destinationDetails[params.slug]
  const [openDay, setOpenDay] = useState<number | null>(0)

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-on-surface mb-4">Destination not found</h1>
          <Link href="/destinations" className="btn-primary inline-block">View All Destinations</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image src={dest.image} alt={dest.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

          {/* Breadcrumb pill */}
          <div className="absolute top-24 left-6 md:left-16">
            <div className="bg-white/20 backdrop-blur-xl text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/30">
              <Link href="/" className="hover:text-tertiary">Home</Link>
              <span className="mx-2 opacity-50">/</span>
              <Link href="/destinations" className="hover:text-tertiary">Destinations</Link>
              <span className="mx-2 opacity-50">/</span>
              <span>{dest.name}</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-6 md:left-16 right-6 md:right-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2">
                {dest.name}
              </h1>
              <p className="text-white/70 text-lg">{dest.region}, {dest.country}</p>
            </motion.div>
          </div>
        </section>

        {/* Quick facts bar */}
        <section className="bg-white shadow-ambient">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Calendar size={18} />, label: 'Best Time', value: dest.bestTime },
                { icon: <Clock size={18} />, label: 'Duration', value: dest.duration },
                { icon: <CreditCard size={18} />, label: 'Starting Price', value: dest.price },
                { icon: <Globe size={18} />, label: 'Visa', value: dest.visa },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${dest.isPilgrimage ? 'bg-pilgrimage-saffron/20 text-pilgrimage-maroon' : 'bg-primary/10 text-primary'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 uppercase tracking-label">{item.label}</p>
                    <p className="font-semibold text-on-surface text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-6">About {dest.name}</h2>
                <div className="space-y-4">
                  {dest.about.map((para, i) => (
                    <p key={i} className="text-on-surface/70 leading-relaxed">{para}</p>
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-6">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dest.highlights.map((h, i) => (
                    <motion.div
                      key={h.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className={`flex gap-3 p-4 rounded-xl ${dest.isPilgrimage ? 'bg-pilgrimage-ivory' : 'bg-surface'}`}
                    >
                      <span className="text-2xl shrink-0">{h.icon}</span>
                      <div>
                        <p className={`font-semibold text-sm ${dest.isPilgrimage ? 'text-pilgrimage-maroon' : 'text-on-surface'}`}>{h.title}</p>
                        <p className="text-on-surface/60 text-xs mt-0.5">{h.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-6">Sample Itinerary</h2>
                <div className="space-y-2">
                  {dest.itinerary.map((day, i) => (
                    <div
                      key={day.day}
                      className="border border-surface rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenDay(openDay === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            dest.isPilgrimage ? 'bg-pilgrimage-saffron/20 text-pilgrimage-maroon' : 'bg-primary/10 text-primary'
                          }`}>{day.day}</span>
                          <span className="font-semibold text-on-surface">{day.title}</span>
                        </div>
                        {openDay === i ? <ChevronUp size={16} className="text-on-surface/40" /> : <ChevronDown size={16} className="text-on-surface/40" />}
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

              {/* Hotels */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-6">Hotels We Love</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {dest.hotels.map(hotel => (
                    <div key={hotel.name} className="bg-white rounded-xl overflow-hidden shadow-card">
                      <div className="relative h-32">
                        <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="300px" />
                      </div>
                      <div className="p-4">
                        <div className="flex gap-0.5 mb-1">
                          {Array.from({ length: hotel.stars }).map((_, i) => (
                            <Star key={i} size={10} className="text-tertiary fill-tertiary" />
                          ))}
                        </div>
                        <p className="font-semibold text-on-surface text-sm">{hotel.name}</p>
                        <p className="text-xs text-on-surface/50 mt-0.5">{hotel.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-6">Traveller Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dest.reviews.map((r, i) => (
                    <div key={i} className="bg-surface rounded-xl p-5">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} size={12} className="text-tertiary fill-tertiary" />
                        ))}
                      </div>
                      <p className="text-on-surface/80 text-sm italic leading-relaxed mb-3">&ldquo;{r.quote}&rdquo;</p>
                      <p className="font-semibold text-on-surface text-sm">{r.author}</p>
                      <p className="text-xs text-on-surface/50">{r.location}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 bg-primary-gradient rounded-2xl p-6 shadow-ambient-lg">
                <p className="text-white/60 text-xs uppercase tracking-label mb-1">Starting from</p>
                <p className="text-4xl font-extrabold text-white mb-1">{dest.price}</p>
                <p className="text-white/50 text-sm mb-6">per person</p>
                <h3 className="text-white font-bold text-lg mb-4">Plan This Trip</h3>
                <EnquiryForm defaultDestination={params.slug} className="space-y-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile enquiry form */}
        <section id="enquiry-form" className="py-16 bg-primary-gradient lg:hidden">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-white/60 text-xs uppercase tracking-label mb-1">Starting from</p>
              <p className="text-4xl font-extrabold text-white mb-4">{dest.price} / person</p>
              <h2 className="text-2xl font-bold text-white">Plan This Trip</h2>
            </div>
            <EnquiryForm defaultDestination={params.slug} />
          </div>
        </section>
      </main>
      <Footer />
      <StickyEnquiryBar destinationName={dest.name} price={dest.price} />
    </>
  )
}
