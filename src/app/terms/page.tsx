import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions — EzTrips',
  description: 'Terms and conditions for using EzTrips travel services.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-extrabold text-on-surface mb-2">Terms & Conditions</h1>
          <p className="text-on-surface/50 text-sm mb-10">Last updated: May 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-on-surface/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-on-surface">1. Services</h2>
              <p>
                EzTrips acts as an intermediary between travellers and travel service providers (hotels,
                airlines, DMCs, transport operators). We curate and coordinate your travel arrangements
                but the services themselves are provided by third-party suppliers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">2. Booking & Payment</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>A booking is confirmed only after the required deposit or full payment is received.</li>
                <li>Prices quoted are valid for the duration mentioned in your proposal.</li>
                <li>Flight and hotel prices are subject to availability and may change until confirmed.</li>
                <li>GST and TCS are applicable as per Indian government regulations.</li>
                <li>Payments can be made online (via Razorpay) or offline (bank transfer, cash, cheque).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">3. Cancellation & Refunds</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Cancellation charges vary by supplier and are outlined in your proposal.</li>
                <li>Cancellations made within 7 days of travel may attract 100% charges.</li>
                <li>Refunds (if applicable) are processed within 7-14 business days.</li>
                <li>Non-refundable components (flights, peak-season hotels) are clearly marked in proposals.</li>
                <li>No-show or early departure does not entitle a refund.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">4. Travel Documents</h2>
              <p>
                It is the traveller&apos;s responsibility to ensure valid passports, visas, and travel
                insurance. EzTrips provides visa guidance in proposals but is not liable for visa
                rejections or document issues.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">5. Changes & Amendments</h2>
              <p>
                Changes to confirmed bookings are subject to availability and may incur additional charges.
                EzTrips will communicate any supplier-initiated changes (hotel substitutions, flight
                reschedules) as soon as we are notified.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">6. Liability</h2>
              <p>
                EzTrips is not liable for delays, cancellations, or service failures caused by airlines,
                hotels, weather, natural disasters, political unrest, or other events beyond our control.
                We recommend purchasing comprehensive travel insurance for all trips.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">7. Complaints</h2>
              <p>
                Any complaints regarding travel services must be reported to your EzTrips advisor during the
                trip. Post-trip complaints should be submitted within 7 days of return. We will mediate
                with the supplier on your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-on-surface">8. Contact</h2>
              <p>
                For questions about these terms, reach us at{' '}
                <a href="mailto:sudeep@eztrips.in" className="text-primary hover:underline">sudeep@eztrips.in</a>{' '}
                or call <a href="tel:+916203507070" className="text-primary hover:underline">+91 620 350 7070</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
