'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

interface ItineraryCardProps {
  image: string
  duration: string
  title: string
  highlights: string[]
  price: string
  slug: string
  index?: number
}

export default function ItineraryCard({ image, duration, title, highlights, price, slug, index = 0 }: ItineraryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-ambient-lg transition-all duration-300"
    >
      <div className="relative h-52">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1200px) 50vw, 33vw" />
        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1 bg-white/90 backdrop-blur text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            <Clock size={11} /> {duration}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-on-surface text-base leading-snug mb-3">{title}</h3>
        <ul className="space-y-1.5 mb-4">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-on-surface/70">
              <Check size={13} className="text-primary mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-3 border-t border-surface">
          <div>
            <p className="text-[10px] text-on-surface/50 uppercase tracking-label">Starting</p>
            <p className="font-bold text-primary">{price} <span className="text-xs font-normal text-on-surface/50">/ person</span></p>
          </div>
          <Link href={`/destinations/${slug}`} className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
            View Itinerary <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
