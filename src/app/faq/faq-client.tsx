'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'

export type FaqItem = {
  question: string
  answer: string
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: 'How does EzTrips work?',
    answer: 'Simply fill out our enquiry form with your travel preferences — destination, dates, budget, and group size. Our travel expert will call you within 2 hours to understand your needs, then send you a detailed, customised proposal with hotels, flights, itinerary, and pricing.',
  },
  {
    question: 'Is EzTrips a travel agency or an online booking platform?',
    answer: 'EzTrips is a travel agency that provides personalised, end-to-end trip planning. Unlike booking platforms where you search and book yourself, we assign you a dedicated travel expert who curates your entire trip — from hotels and flights to activities and transfers.',
  },
  {
    question: 'How much does it cost to get a proposal?',
    answer: 'Getting a proposal is completely free with no obligation. You only pay when you decide to confirm and book your trip.',
  },
  {
    question: 'Can I customise the proposed itinerary?',
    answer: 'Absolutely! Every proposal is fully customisable. You can swap hotels, change activities, adjust the number of nights, add excursions, or modify anything else. Your travel expert will revise the proposal until it\'s perfect.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept online payments via Razorpay (credit/debit cards, UPI, net banking) as well as offline payments via bank transfer, cash, or cheque. A deposit is typically required to confirm your booking, with the balance due before travel.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellation charges vary depending on the suppliers (hotels, airlines) involved in your booking. Specific cancellation terms are clearly mentioned in your proposal. Generally, cancellations made within 7 days of travel may attract up to 100% charges. Non-refundable components are always marked.',
  },
  {
    question: 'Do you handle visa assistance?',
    answer: 'We provide visa guidance and requirements in your proposal, including passport validity, visa type, and documentation needed. However, the actual visa application and approval is the traveller\'s responsibility.',
  },
  {
    question: 'Do you offer group tours or only private trips?',
    answer: 'We offer both! Most of our trips are private and fully customised. However, for select destinations and pilgrimage circuits, we also offer group departures at competitive prices.',
  },
  {
    question: 'What happens if something goes wrong during the trip?',
    answer: 'Our team is available 24/7 during your trip. If there\'s any issue — a hotel problem, a missed transfer, or an emergency — call your assigned travel expert directly and we\'ll resolve it in real-time.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'We strongly recommend travel insurance for all trips and can help you arrange it. While we don\'t sell insurance directly, we can guide you to trusted providers and ensure your policy covers the destinations and activities in your itinerary.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 4-6 weeks in advance for domestic trips and 8-12 weeks for international trips. Peak seasons (e.g., summer holidays, Diwali, Christmas) require even earlier booking. That said, we can arrange last-minute trips too — just reach out!',
  },
  {
    question: 'Can I contact you on WhatsApp?',
    answer: 'Yes! You can reach us anytime on WhatsApp at +91 620 350 7070. We typically respond within 30 minutes during business hours.',
  },
]

export default function FaqClient({ title, cmsFaqs }: { title?: string; cmsFaqs?: FaqItem[] | null }) {
  const faqs = cmsFaqs && cmsFaqs.length > 0 ? cmsFaqs : DEFAULT_FAQS
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-primary-gradient pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <p className="section-label text-tertiary mb-3">Got Questions?</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title || 'Frequently Asked Questions'}
          </h1>
          <p className="text-white/60 mt-3 text-lg">Everything you need to know about booking with EzTrips.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-surface rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface/50 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-on-surface text-sm pr-4">{faq.question}</span>
                  <ChevronDown
                    size={16}
                    className={`text-on-surface/40 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 text-on-surface/70 text-sm leading-relaxed border-t border-surface bg-surface/30">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-gradient text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
        <p className="text-white/60 mb-6">Our team is happy to help — reach out anytime.</p>
        <div className="flex gap-3 justify-center flex-wrap px-4">
          <Link href="/#enquiry-form" className="btn-primary inline-block">Plan My Trip</Link>
          <a
            href="https://wa.me/916203507070?text=Hi%20EzTrips%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-block"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  )
}
