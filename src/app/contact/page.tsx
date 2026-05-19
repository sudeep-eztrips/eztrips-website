import type { Metadata } from 'next'
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EnquiryForm from '@/components/EnquiryForm'
import { fetchPage } from '@/lib/api'

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPage('contact')
  return {
    title: page?.seo_title || 'Contact Us — EzTrips',
    description: page?.seo_description || 'Get in touch with EzTrips. Call, email, or WhatsApp us for travel enquiries and support.',
  }
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 620 350 7070',
    href: 'tel:+916203507070',
    description: 'Mon–Sat, 10 AM – 7 PM IST',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 620 350 7070',
    href: 'https://wa.me/916203507070?text=Hi%20EzTrips%2C%20I%20have%20a%20query',
    description: 'Typically replies within 30 minutes',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sudeep@eztrips.in',
    href: 'mailto:sudeep@eztrips.in',
    description: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat, 10 AM – 7 PM',
    description: '24/7 support during your trip',
  },
]

export default async function ContactPage() {
  const page = await fetchPage('contact')

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-primary-gradient pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <p className="section-label text-tertiary mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {page?.title || 'Contact Us'}
            </h1>
            <p className="text-white/60 mt-3 text-lg">Have a question or ready to plan your trip? We&apos;re here to help.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            {/* CMS content area — renders above contact cards if content exists */}
            {page?.content && (
              <div
                className="prose prose-gray max-w-none mb-12 text-on-surface/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {contactInfo.map(item => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                const wrapperProps = item.href
                  ? { href: item.href, target: item.href.startsWith('http') ? '_blank' as const : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                  : {}
                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className="flex gap-4 p-5 rounded-xl bg-surface hover:shadow-card transition-shadow"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface/50 uppercase tracking-label">{item.label}</p>
                      <p className="font-semibold text-on-surface">{item.value}</p>
                      <p className="text-on-surface/50 text-sm mt-0.5">{item.description}</p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            <div className="bg-primary-gradient rounded-2xl p-6 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">Send Us an Enquiry</h2>
                <p className="text-white/60 mt-2">Fill in your details and our travel expert will get back to you within 2 hours.</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
