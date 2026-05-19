import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fetchPage } from '@/lib/api'

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPage('privacy')
  return {
    title: page?.seo_title || 'Privacy Policy — EzTrips',
    description: page?.seo_description || 'How EzTrips collects, uses, and protects your personal information.',
  }
}

const FALLBACK_CONTENT = `
<section>
  <h2 class="text-xl font-bold text-on-surface">1. Information We Collect</h2>
  <p>When you submit an enquiry or book a trip through EzTrips, we may collect:</p>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Full name, email address, and phone number</li>
    <li>Travel preferences (destination, dates, budget, group size)</li>
    <li>Special requirements (dietary needs, accessibility, etc.)</li>
    <li>Payment information (processed securely via Razorpay)</li>
    <li>Device and browser information for analytics purposes</li>
  </ul>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">2. How We Use Your Information</h2>
  <p>We use the information we collect to:</p>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Create and manage your travel proposals and bookings</li>
    <li>Communicate with you about your trips via phone, email, or WhatsApp</li>
    <li>Process payments and send booking confirmations</li>
    <li>Improve our services and website experience</li>
    <li>Send promotional offers (only if you opt in via WhatsApp)</li>
  </ul>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">3. Information Sharing</h2>
  <p>We share your information only with the travel suppliers (hotels, airlines, DMCs) required to fulfil your booking. We do not sell or rent your personal information to third parties.</p>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">4. Payment Security</h2>
  <p>All payments are processed through Razorpay, a PCI-DSS compliant payment gateway. We do not store your credit card or bank details on our servers.</p>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">5. Cookies &amp; Analytics</h2>
  <p>We use essential cookies to keep the website functional. We may use analytics tools to understand how visitors use our site. No personally identifiable information is shared with analytics providers.</p>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">6. Your Rights</h2>
  <p>You have the right to:</p>
  <ul class="list-disc pl-5 space-y-1 text-sm">
    <li>Request access to the personal data we hold about you</li>
    <li>Request correction or deletion of your data</li>
    <li>Opt out of promotional communications at any time</li>
    <li>Withdraw consent for WhatsApp messaging</li>
  </ul>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">7. Data Retention</h2>
  <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Enquiry data is retained for up to 2 years after your last interaction.</p>
</section>

<section>
  <h2 class="text-xl font-bold text-on-surface">8. Contact Us</h2>
  <p>For any privacy-related questions or requests, contact us at <a href="mailto:sudeep@eztrips.in" class="text-primary hover:underline">sudeep@eztrips.in</a> or call <a href="tel:+916203507070" class="text-primary hover:underline">+91 620 350 7070</a>.</p>
</section>
`

export default async function PrivacyPage() {
  const page = await fetchPage('privacy')

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-extrabold text-on-surface mb-2">{page?.title || 'Privacy Policy'}</h1>
          <p className="text-on-surface/50 text-sm mb-10">Last updated: May 2026</p>

          <div
            className="prose prose-gray max-w-none space-y-8 text-on-surface/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page?.content || FALLBACK_CONTENT }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
