'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  slug: string
  image: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
  index?: number
}

export default function BlogCard({ slug, image, category, title, excerpt, readTime, date, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-ambient-lg transition-all duration-300">
        <div className="relative h-52">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1200px) 50vw, 33vw" />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-on-surface text-base leading-snug mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-on-surface/60 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-on-surface/40">
            <span className="flex items-center gap-1"><Clock size={11} /> {readTime}</span>
            <span>{date}</span>
          </div>
          <div className="mt-3 flex items-center gap-1 text-primary text-sm font-semibold">
            Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
