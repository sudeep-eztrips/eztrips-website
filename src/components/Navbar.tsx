'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Pilgrimage', href: '/pilgrimage' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="EzTrips" width={36} height={36} className="object-contain" />
            <span
              className={`font-extrabold text-xl tracking-tight ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              EzTrips
            </span>
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
          <div className="hidden md:block">
            <Link href="/#enquiry-form" className="btn-primary text-sm">
              Plan My Trip
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-on-surface' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
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
    </nav>
  )
}
