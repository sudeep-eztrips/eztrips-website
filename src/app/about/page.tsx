import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { MapPin, Clock, Pencil, BadgeIndianRupee } from 'lucide-react'

const reasons = [
  { icon: MapPin, title: 'Expert Planning', desc: 'Curated itineraries by travel experts who have been there, done that.' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance so you never feel stranded on your trip.' },
  { icon: Pencil, title: 'Customised Itineraries', desc: 'Every trip is tailored to your preferences, budget, and travel style.' },
  { icon: BadgeIndianRupee, title: 'Best Price Promise', desc: 'Competitive pricing with no hidden costs. Transparent quotes, always.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary-gradient pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About EzTrips</h1>
        <p className="text-lg text-white/70 max-w-xl mx-auto">Premium travel experiences, zero hassle.</p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
        <div className="space-y-4 text-on-surface/70 leading-relaxed">
          <p>
            EzTrips is a premium travel agency co-founded by <strong className="text-on-surface">Sudeep Sharma</strong> and <strong className="text-on-surface">Nishan Choubey</strong> with one
            simple mission: make travel hassle-free. We believe that planning a trip should be
            as enjoyable as the trip itself.
          </p>
          <p>
            From weekend getaways to international adventures, we handle every detail &mdash;
            flights, hotels, transfers, activities &mdash; so you can focus on making memories.
            Our team of travel experts brings deep destination knowledge and a passion for
            crafting personalised itineraries that fit your style and budget.
          </p>
          <p>
            Whether you&apos;re a solo traveller, a couple, or a large group, EzTrips ensures a
            seamless experience from enquiry to return.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map(r => (
              <div key={r.title} className="bg-white rounded-2xl p-6 shadow-ambient text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <r.icon size={28} />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{r.title}</h3>
                <p className="text-on-surface/60 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
        <p className="text-on-surface/50 mb-8">Meet the people behind your perfect trip. Team profiles coming soon.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: 'Sudeep Sharma', role: 'Co-Founder' },
            { name: 'Nishan Choubey', role: 'Co-Founder' },
            { name: 'Team Member', role: 'Travel Expert' },
          ].map((member, i) => (
            <div key={i} className="bg-surface rounded-2xl p-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4" />
              <p className="font-semibold text-primary">{member.name}</p>
              <p className="text-sm text-on-surface/50">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-gradient text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Trip?</h2>
        <p className="text-white/70 mb-8">Tell us where you want to go and we&apos;ll handle the rest.</p>
        <Link href="/#enquiry-form" className="btn-primary bg-white !text-primary hover:bg-white/90">
          Submit an Enquiry
        </Link>
      </section>
    </>
  )
}
