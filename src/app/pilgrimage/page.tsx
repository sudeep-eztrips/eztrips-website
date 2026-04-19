'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import EnquiryForm from '@/components/EnquiryForm'
import { pilgrimageDestinations } from '@/lib/data'

export default function PilgrimagePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pilgrimage-maroon via-[#5c0000] to-[#3a0000]" />
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIi8+PC9zdmc+')] bg-repeat" />
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-pilgrimage-saffron text-5xl mb-6">🙏</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Sacred Journeys,<br />
                <span className="text-pilgrimage-saffron">Managed With Devotion.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Pilgrimage circuits across India — comfortable travel, VIP darshan, quality hotels, and 24/7 support so you can focus entirely on your spiritual journey.
              </p>
              <a
                href="#circuits"
                className="inline-block mt-8 bg-pilgrimage-saffron text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors"
              >
                Explore Circuits
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust points */}
        <section className="bg-pilgrimage-ivory py-8 border-b border-pilgrimage-saffron/20">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { icon: '🛕', label: 'VIP Darshan Arranged' },
                { icon: '🚐', label: 'AC Vehicle Throughout' },
                { icon: '🏨', label: 'Quality Hotels' },
                { icon: '📞', label: '24/7 Trip Support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-pilgrimage-maroon font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilgrimage Circuits Grid */}
        <section id="circuits" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.05em] uppercase text-pilgrimage-saffron mb-3">
                Sacred Circuits
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-pilgrimage-maroon leading-tight tracking-tight mb-4">
                Pilgrimage Packages
              </h2>
              <p className="text-on-surface/60 max-w-xl mx-auto">
                Each circuit is fully managed — transport, hotels, puja arrangements, and experienced guides who understand the spiritual significance of every site.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pilgrimageDestinations.map((d, i) => (
                <DestinationCard key={d.slug} {...d} isPilgrimage index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-28 bg-pilgrimage-ivory">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.05em] uppercase text-pilgrimage-saffron mb-3">
                The EzTrips Difference
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-pilgrimage-maroon leading-tight tracking-tight">
                Every Detail, Taken Care Of.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🙏',
                  title: 'Puja & Darshan',
                  description: 'VIP darshan passes, puja samagri, pandit arrangements, and aarti timings — all pre-arranged.',
                },
                {
                  icon: '🚐',
                  title: 'Comfortable Travel',
                  description: 'AC Innova/Tempo Traveller, experienced hill drivers, and flexible stops for rest and refreshments.',
                },
                {
                  icon: '🏨',
                  title: 'Quality Stay',
                  description: 'Clean, comfortable hotels and dharamshalas near temples. Hot water, clean linen, vegetarian meals.',
                },
                {
                  icon: '🧓',
                  title: 'Elder-Friendly',
                  description: 'Palki/pony/helicopter options, wheelchair access info, and a pace that respects all age groups.',
                },
                {
                  icon: '🍽️',
                  title: 'Sattvic Meals',
                  description: 'Pure vegetarian meals at quality restaurants. Special diet needs accommodated on request.',
                },
                {
                  icon: '📞',
                  title: '24/7 Support',
                  description: 'Dedicated trip manager on WhatsApp throughout your yatra. Emergency support always available.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-7 shadow-card"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-pilgrimage-maroon text-lg mb-2">{item.title}</h3>
                  <p className="text-on-surface/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-pilgrimage-maroon via-[#5c0000] to-[#3a0000]">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-xs font-semibold tracking-[0.05em] uppercase text-pilgrimage-saffron mb-3">
                Begin Your Yatra
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Plan Your<br />Pilgrimage Today.
              </h2>
              <p className="text-white/60 mt-4">
                Fill in your details and our pilgrimage specialist will call you within 2 hours.
              </p>
            </motion.div>
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
