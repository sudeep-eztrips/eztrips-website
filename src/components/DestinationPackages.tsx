'use client'

import { useEffect, useState } from 'react'
import type { Package } from '@/lib/api'
import PackageCard from './PackageCard'

const API_URL = process.env.NEXT_PUBLIC_SAAS_API_URL || 'https://eztrips-saas.vercel.app'

export default function DestinationPackages({ destinationSlug }: { destinationSlug: string }) {
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/website/public/packages?destination=${destinationSlug}`)
      .then(res => res.ok ? res.json() : [])
      .then(data => setPackages(data))
      .catch(() => setPackages([]))
      .finally(() => setLoading(false))
  }, [destinationSlug])

  if (loading) return null
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
