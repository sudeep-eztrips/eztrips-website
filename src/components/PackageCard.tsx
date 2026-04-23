'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Star } from 'lucide-react'
import type { Package } from '@/lib/api'

const formatPrice = (price: number) =>
  price >= 100000
    ? `₹${(price / 100000).toFixed(1)}L`
    : `₹${(price / 1000).toFixed(0)}K`

export default function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={`/packages/${pkg.slug}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-ambient-lg transition-all duration-300 group-hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={pkg.cover_image || '/placeholder.jpg'}
              alt={pkg.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {pkg.nights && (
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Clock size={12} />
                {pkg.nights}N / {(pkg.nights || 0) + 1}D
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-bold text-on-surface text-lg mb-1 group-hover:text-primary transition-colors">
              {pkg.title}
            </h3>
            {pkg.subtitle && (
              <p className="text-on-surface/50 text-sm mb-4">{pkg.subtitle}</p>
            )}

            {/* Highlights preview */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {pkg.highlights.slice(0, 3).map((h, i) => (
                  <span key={i} className="text-xs bg-surface text-on-surface/70 px-2 py-1 rounded-full">{h}</span>
                ))}
              </div>
            )}

            {/* Hotel tier pricing */}
            <div className="grid grid-cols-3 gap-2 border-t border-surface pt-4">
              {[
                { label: '3 Star', stars: 3, price: pkg.price_3star },
                { label: '4 Star', stars: 4, price: pkg.price_4star },
                { label: '5 Star', stars: 5, price: pkg.price_5star },
              ].map(tier => (
                <div key={tier.label} className="text-center">
                  <div className="flex justify-center gap-0.5 mb-1">
                    {Array.from({ length: tier.stars }).map((_, i) => (
                      <Star key={i} size={8} className="text-tertiary fill-tertiary" />
                    ))}
                  </div>
                  <p className="font-bold text-on-surface text-sm">
                    {tier.price ? formatPrice(tier.price) : '—'}
                  </p>
                  <p className="text-[10px] text-on-surface/40">per person</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
