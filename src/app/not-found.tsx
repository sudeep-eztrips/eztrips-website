import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-8xl font-extrabold text-primary/20 mb-4">404</p>
          <h1 className="text-3xl font-extrabold text-on-surface mb-3">Page not found</h1>
          <p className="text-on-surface/60 mb-8">
            Looks like this page took a detour. Let&apos;s get you back on track.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="btn-primary px-6 py-3 text-sm">
              Back to Home
            </Link>
            <Link href="/destinations" className="bg-surface text-on-surface px-6 py-3 rounded-xl text-sm font-semibold hover:bg-surface/80 transition-colors">
              Explore Destinations
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
