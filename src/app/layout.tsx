import type { Metadata } from 'next'
import './globals.css'

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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'EzTrips',
              url: 'https://eztrips.in',
              description: 'Premium travel agency offering curated holiday and pilgrimage packages.',
              address: { '@type': 'PostalAddress', addressCountry: 'IN' },
              sameAs: ['https://instagram.com/eztrips.in'],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
