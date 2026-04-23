import { notFound } from 'next/navigation'
import { fetchPackageBySlug, fetchPackages } from '@/lib/api'
import PackageDetail from './PackageDetail'

export async function generateStaticParams() {
  const packages = await fetchPackages()
  return packages.map(p => ({ slug: p.slug }))
}

export default async function PackagePage({ params }: { params: { slug: string } }) {
  const pkg = await fetchPackageBySlug(params.slug)
  if (!pkg) return notFound()

  return <PackageDetail pkg={pkg} />
}
