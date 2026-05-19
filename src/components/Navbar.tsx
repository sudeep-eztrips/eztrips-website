'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import SearchOverlay from './SearchOverlay'

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Pilgrimage', href: '/pilgrimage' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-4 md:mx-8 lg:mx-16">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-2xl shadow-ambient'
              : 'bg-white/10 backdrop-blur-xl border border-white/20'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="EzTrips" width={160} height={45} className="object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-tertiary ${
                  scrolled ? 'text-on-surface' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-on-surface/60 hover:text-on-surface' : 'text-white/70 hover:text-white'}`}
              aria-label="Search destinations"
            >
              <Search size={18} />
            </button>
            <Link href="/#enquiry-form" className="btn-primary text-sm">
              Plan My Trip
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              className={`p-2 rounded-lg ${scrolled ? 'text-on-surface' : 'text-white'}`}
              onClick={() => setSearchOpen(true)}
              aria-label="Search destinations"
            >
              <Search size={20} />
            </button>
            <button
              className={`p-2 rounded-lg ${scrolled ? 'text-on-surface' : 'text-white'}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 bg-white/95 backdrop-blur-2xl rounded-xl shadow-ambient-lg overflow-hidden">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 text-on-surface font-medium hover:bg-surface transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-3 pb-2">
                <Link
                  href="/#enquiry-form"
                  className="btn-primary text-sm block text-center"
                  onClick={() => setOpen(false)}
                >
                  Plan My Trip
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </nav>
  )
}
