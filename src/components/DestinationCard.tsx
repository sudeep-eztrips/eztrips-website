'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { formatPrice } from '@/lib/data'

interface DestinationCardProps {
  slug: string
  name: string
  region: string
  price: number
  image: string
  isPilgrimage?: boolean
  index?: number
}

export default function DestinationCard({
  slug, name, region, price, image, isPilgrimage = false, index = 0
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/destinations/${slug}`} className="group block">
        <div className="relative rounded-xl overflow-hidden shadow-card bg-white transition-all duration-300 group-hover:shadow-ambient-lg group-hover:scale-[1.02]">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Orange glow border on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-inset ring-tertiary rounded-xl" />
          </div>

          {/* Content */}
          <div className={`p-6 ${isPilgrimage ? 'bg-pilgrimage-ivory' : 'bg-white'}`}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className={`font-bold text-base leading-snug ${isPilgrimage ? 'text-pilgrimage-maroon' : 'text-on-surface'}`}>
                  {name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={12} className={isPilgrimage ? 'text-pilgrimage-saffron' : 'text-tertiary-dark/60'} />
                  <span className="text-xs text-on-surface/50">{region}</span>
                </div>
              </div>
              <div className={`text-right shrink-0 px-2 py-1 rounded-lg ${isPilgrimage ? 'bg-pilgrimage-saffron/20' : 'bg-surface'}`}>
                <p className="text-[10px] text-on-surface/50">Starting</p>
                <p className={`text-sm font-bold ${isPilgrimage ? 'text-pilgrimage-maroon' : 'text-primary'}`}>
                  {formatPrice(price)}
                </p>
              </div>
            </div>

            <div className={`mt-3 flex items-center gap-1 text-xs font-semibold ${isPilgrimage ? 'text-pilgrimage-saffron' : 'text-primary'}`}>
              Explore <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
