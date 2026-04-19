'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ExperienceCardProps {
  emoji: string
  title: string
  description: string
  href?: string
  index?: number
}

export default function ExperienceCard({ emoji, title, description, href = '/#enquiry-form', index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex-shrink-0 w-64 md:w-auto"
    >
      <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-ambient-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="font-bold text-on-surface text-lg mb-2">{title}</h3>
        <p className="text-on-surface/60 text-sm leading-relaxed mb-4">{description}</p>
        <Link
          href={href}
          className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all"
        >
          Explore <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
