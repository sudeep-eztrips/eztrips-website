'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroVideo() {
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || ''

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-blue-900" />
      )}

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label text-tertiary mb-4"
        >
          Premium Travel Agency · eztrips.in
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Travel Without<br />The Hassle.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Curated journeys to the world&apos;s most extraordinary destinations.
          We plan everything — you just show up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/#enquiry-form" className="btn-primary text-base px-8 py-4 min-w-[160px]">
            Plan My Trip
          </Link>
          <Link href="#destinations" className="btn-ghost text-base px-8 py-4 min-w-[180px]">
            Explore Destinations
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-white/30"
        />
      </motion.div>
    </section>
  )
}
