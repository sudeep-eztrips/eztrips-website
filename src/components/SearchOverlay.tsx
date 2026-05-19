'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { allDestinations } from '@/lib/data'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  const results = query.length >= 2
    ? allDestinations.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.region.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-w-xl mx-auto mt-24 mx-4 sm:mx-auto bg-white rounded-2xl shadow-ambient-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface">
          <Search size={18} className="text-on-surface/40" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destinations..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 text-on-surface text-sm outline-none bg-transparent placeholder-on-surface/40"
          />
          <button onClick={onClose} className="p-1 hover:bg-surface rounded-lg" aria-label="Close search">
            <X size={16} className="text-on-surface/40" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <div className="px-5 py-8 text-center text-on-surface/50 text-sm">
              No destinations found for &ldquo;{query}&rdquo;
            </div>
          )}
          {results.map(dest => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              onClick={onClose}
              className="flex items-center justify-between px-5 py-3 hover:bg-surface transition-colors"
            >
              <div>
                <p className="font-medium text-on-surface text-sm">{dest.name}</p>
                <p className="text-on-surface/50 text-xs">{dest.region}</p>
              </div>
              <p className="text-primary font-semibold text-sm">
                {dest.price >= 100000
                  ? `₹${(dest.price / 100000).toFixed(1)}L`
                  : `₹${(dest.price / 1000).toFixed(0)}K`}
              </p>
            </Link>
          ))}
          {query.length < 2 && (
            <div className="px-5 py-8 text-center text-on-surface/40 text-sm">
              Type at least 2 characters to search
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
