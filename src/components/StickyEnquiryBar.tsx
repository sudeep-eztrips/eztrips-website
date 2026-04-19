'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface StickyEnquiryBarProps {
  destinationName: string
  price: string
}

export default function StickyEnquiryBar({ destinationName, price }: StickyEnquiryBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl shadow-ambient-lg border-t border-surface md:hidden"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-xs text-on-surface/50">Starting from</p>
              <p className="font-bold text-primary text-lg">{price} <span className="text-xs font-normal text-on-surface/50">/ person</span></p>
            </div>
            <Link href="#enquiry-form" className="btn-primary text-sm">
              Plan This Trip
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
