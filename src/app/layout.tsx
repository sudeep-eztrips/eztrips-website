import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import PlanTripFAB from '@/components/PlanTripFAB'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://eztrips.in'),
  title: 'EzTrips — Travel Without The Hassle',
  description: 'Curated journeys to the world\'s most extraordinary destinations. We plan everything — you just show up.',
  keywords: 'travel agency, holiday packages, pilgrimage tours, customised travel, EzTrips',
  openGraph: {
    title: 'EzTrips — Travel Without The Hassle',
    description: 'Curated journeys to the world\'s most extraordinary destinations.',
    url: 'https://eztrips.in',
    siteName: 'EzTrips',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzTrips — Travel Without The Hassle',
    description: 'Curated journeys to the world\'s most extraordinary destinations.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'TravelAgency',
                name: 'EzTrips',
                url: 'https://eztrips.in',
                logo: 'https://eztrips.in/logo.png',
                description: 'Premium travel agency offering curated holiday and pilgrimage packages.',
                telephone: '+916203507070',
                email: 'sudeep@eztrips.in',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                sameAs: ['https://instagram.com/eztrips.in'],
                priceRange: '$$',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'EzTrips',
                url: 'https://eztrips.in',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://eztrips.in/destinations?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        {children}
        <PlanTripFAB />
        <WhatsAppButton />
      </body>
    </html>
  )
}
