import { fetchHomepageContent } from '@/lib/api'
import HomeClient from './home-client'

const DEFAULT_EXPERIENCES = [
  { emoji: '🌙', title: 'Honeymoon', description: 'Romantic getaways crafted for two — private villas, candlelit dinners, sunset cruises.' },
  { emoji: '👨‍👩‍👧', title: 'Family', description: 'Kid-friendly itineraries with the right pace, safe hotels, and activities for all ages.' },
  { emoji: '🧗', title: 'Adventure', description: 'Trekking, diving, rafting — adrenaline-packed journeys for the bold traveller.' },
  { emoji: '💎', title: 'Luxury', description: 'Five-star properties, private transfers, exclusive experiences. Nothing but the best.' },
  { emoji: '👥', title: 'Group', description: 'Seamless group travel for friends, colleagues, or communities. We handle logistics.' },
  { emoji: '🙏', title: 'Pilgrimage', description: 'Spiritual journeys to India\'s sacred sites — managed with care and devotion.' },
]

const DEFAULT_ITINERARIES = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&h=900&fit=crop&q=80',
    duration: '7 Days',
    title: '7 Days in Bali — Temples, Rice Terraces & Beaches',
    highlights: ['Visit Tanah Lot & Uluwatu temples', 'Tegalalang rice terrace sunrise trek', 'Seminyak & Nusa Dua beach days'],
    price: '₹65,000',
    slug: 'bali',
  },
  {
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1600&h=900&fit=crop&q=80',
    duration: '8 Days',
    title: '8 Days Thailand — Bangkok, Phuket & Krabi',
    highlights: ['Grand Palace & temple tours in Bangkok', 'Phi Phi Islands speedboat day trip', 'Kayaking through Railay Beach caves'],
    price: '₹72,000',
    slug: 'thailand',
  },
  {
    image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=1600&h=900&fit=crop&q=80',
    duration: '12 Days',
    title: 'Char Dham Yatra — 12 Days Spiritual Journey',
    highlights: ['Yamunotri & Gangotri darshans', 'Kedarnath helicopter option', 'Badrinath aarti & temple ceremony'],
    price: '₹55,000',
    slug: 'char-dham',
  },
]

const DEFAULT_TESTIMONIALS = [
  { quote: 'Planned our Bali honeymoon — everything was perfect. Not a single thing to worry about.', author: 'Priya & Rahul', location: 'Bengaluru' },
  { quote: 'The Char Dham package was beyond expectations. AC vehicle, great hotels, escorted darshans.', author: 'Suresh Iyer', location: 'Chennai' },
  { quote: 'Japan trip was flawlessly executed. Every detail was taken care of. Will book again!', author: 'Ananya Sharma', location: 'Mumbai' },
]

export default async function Home() {
  const cms = await fetchHomepageContent()

  const hero = (cms.hero as { heading?: string; subheading?: string }) || {}
  const experienceCards = cms.experience_cards as { items?: { emoji: string; label: string }[] } | undefined
  const featuredItineraries = cms.featured_itineraries as { items?: { title: string; image: string; duration: string; highlights: string; price: string; slug: string }[] } | undefined
  const testimonialsData = cms.testimonials as { items?: { quote: string; author: string; location: string }[] } | undefined

  // Map CMS experience cards (emoji + label) to the format the component expects
  const experiences = experienceCards?.items?.length
    ? experienceCards.items.map(c => ({
        emoji: c.emoji,
        title: c.label,
        description: DEFAULT_EXPERIENCES.find(d => d.title === c.label)?.description || '',
      }))
    : DEFAULT_EXPERIENCES

  const itineraries = featuredItineraries?.items?.length
    ? featuredItineraries.items
    : DEFAULT_ITINERARIES

  const testimonials = testimonialsData?.items?.length
    ? testimonialsData.items
    : DEFAULT_TESTIMONIALS

  return (
    <HomeClient
      hero={hero}
      experiences={experiences}
      itineraries={itineraries}
      testimonials={testimonials}
    />
  )
}
