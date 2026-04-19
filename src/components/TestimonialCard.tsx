'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating?: number
  index?: number
}

export default function TestimonialCard({ quote, author, location, rating = 5, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-surface rounded-xl p-7 shadow-card"
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="text-tertiary fill-tertiary" />
        ))}
      </div>
      <p className="text-on-surface/80 leading-relaxed italic mb-5">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-on-surface">{author}</p>
        <p className="text-sm text-on-surface/50">{location}</p>
      </div>
    </motion.div>
  )
}
