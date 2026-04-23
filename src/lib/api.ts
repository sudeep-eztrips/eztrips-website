const API_URL = process.env.NEXT_PUBLIC_SAAS_API_URL || 'https://eztrips-saas.vercel.app';

export type Destination = {
  slug: string;
  title: string;
  tagline: string | null;
  description: string | null;
  country: string | null;
  region: string | null;
  tags: string[] | null;
  cover_image: string | null;
  gallery: string[] | null;
  duration_days: number | null;
  price_from: number | null;
  currency: string;
  is_pilgrimage: boolean;
  sort_order: number;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  destination: string | null;
  destination_slug: string | null;
  nights: number | null;
  duration_days: number | null;
  price_from: number | null;
  price_3star: number | null;
  price_4star: number | null;
  price_5star: number | null;
  cover_image: string | null;
  highlights: string[] | null;
  inclusions: string[] | null;
  exclusions: string[] | null;
  itinerary_days: { day: number; title: string; description: string }[] | null;
  sample_hotels: { name: string; stars: number; location: string; image: string }[] | null;
  published: boolean;
  sort_order: number;
};

export async function fetchDestinations(): Promise<Destination[]> {
  const res = await fetch(`${API_URL}/api/website/public/destinations`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchPackages(destinationSlug?: string): Promise<Package[]> {
  const params = destinationSlug ? `?destination=${destinationSlug}` : '';
  const res = await fetch(`${API_URL}/api/website/public/packages${params}`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchPackageBySlug(slug: string): Promise<Package | null> {
  const res = await fetch(`${API_URL}/api/website/public/packages?slug=${slug}`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  return res.json();
}
