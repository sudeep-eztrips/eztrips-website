'use client'

import { useEffect, useState } from 'react'
import type { Package } from '@/lib/api'
import PackageCard from './PackageCard'

const API_URL = process.env.NEXT_PUBLIC_SAAS_API_URL || 'https://eztrips-saas.vercel.app'

export default function DestinationPackages({ destinationSlug }: { destinationSlug: string }) {
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/api/website/public/packages?destination=${destinationSlug}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => setPackages(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [destinationSlug])

  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold text-on-surface mb-6">Available Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[0, 1].map(i => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card animate-pulse">
              <div className="h-48 bg-gray-200" />
              <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h2 className="text-2xl font-bold text-on-surface mb-6">Available Packages</h2>
        <div className="text-center py-8 text-on-surface/50">
          <p>Unable to load packages. Please try again later.</p>
        </div>
      </section>
    )
  }

  if (packages.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-bold text-on-surface mb-6">Available Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  )
}
