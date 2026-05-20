'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

/**
 * Mobile-only floating "Plan My Trip" button.
 * - Hidden on desktop (md+) — desktop has the navbar CTA + enquiry sidebars
 * - Hidden when a sticky enquiry bar is already on screen (destination/package pages
 *   render <StickyEnquiryBar /> which appears after 400px of scroll on mobile)
 * - Links to /#enquiry-form on the homepage, navigates home otherwise
 */
export default function PlanTripFAB() {
  const pathname = usePathname()
  const [hideForStickyBar, setHideForStickyBar] = useState(false)

  useEffect(() => {
    // Routes that render their own StickyEnquiryBar on mobile after scroll
    const hasOwnStickyBar = /^\/(destinations|packages|pilgrimage)\/[^/]+/.test(pathname || '')
    if (!hasOwnStickyBar) {
      setHideForStickyBar(false)
      return
    }
    const onScroll = () => setHideForStickyBar(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (hideForStickyBar) return null

  return (
    <Link
      href="/#enquiry-form"
      aria-label="Plan my trip — open enquiry form"
      className="md:hidden fixed bottom-6 left-6 z-[9998] inline-flex items-center gap-2 bg-tertiary text-white px-4 py-3 rounded-full shadow-lg hover:bg-tertiary/90 active:scale-95 transition-all text-sm font-semibold"
    >
      <Sparkles size={16} />
      Plan My Trip
    </Link>
  )
}
