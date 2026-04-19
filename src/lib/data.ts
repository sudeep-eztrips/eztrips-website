export const holidayDestinations = [
  { slug: 'thailand', name: 'Thailand', region: 'Southeast Asia', price: 55000, image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800' },
  { slug: 'bali', name: 'Bali', region: 'Indonesia', price: 60000, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
  { slug: 'andaman', name: 'Andaman', region: 'India', price: 35000, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800' },
  { slug: 'kashmir', name: 'Kashmir', region: 'India', price: 30000, image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800' },
  { slug: 'ladakh', name: 'Ladakh', region: 'India', price: 40000, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
  { slug: 'sikkim', name: 'Sikkim', region: 'India', price: 28000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' },
  { slug: 'bhutan', name: 'Bhutan', region: 'South Asia', price: 65000, image: 'https://images.unsplash.com/photo-1543470373-e055b73a8f29?w=800' },
  { slug: 'vietnam', name: 'Vietnam', region: 'Southeast Asia', price: 50000, image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800' },
  { slug: 'japan', name: 'Japan', region: 'East Asia', price: 1200000, image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800' },
  { slug: 'switzerland', name: 'Switzerland', region: 'Europe', price: 180000, image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800' },
  { slug: 'france', name: 'France', region: 'Europe', price: 160000, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
  { slug: 'australia', name: 'Australia', region: 'Oceania', price: 200000, image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800' },
  { slug: 'new-zealand', name: 'New Zealand', region: 'Oceania', price: 220000, image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800' },
  { slug: 'kenya', name: 'Kenya', region: 'Africa', price: 250000, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800' },
  { slug: 'uttarakhand', name: 'Uttarakhand', region: 'India', price: 22000, image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800' },
  { slug: 'himachal', name: 'Himachal Pradesh', region: 'India', price: 20000, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800' },
  { slug: 'nepal', name: 'Nepal', region: 'South Asia', price: 35000, image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800' },
  { slug: 'kazakhstan', name: 'Kazakhstan', region: 'Central Asia', price: 90000, image: 'https://images.unsplash.com/photo-1558002038-1055e1f09e6c?w=800' },
  { slug: 'russia', name: 'Russia', region: 'Europe/Asia', price: 130000, image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800' },
  { slug: 'uzbekistan', name: 'Uzbekistan', region: 'Central Asia', price: 80000, image: 'https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?w=800' },
  { slug: 'spain', name: 'Spain', region: 'Europe', price: 150000, image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800' },
]

export const pilgrimageDestinations = [
  { slug: 'char-dham', name: 'Char Dham Yatra', region: 'Uttarakhand', price: 45000, image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=800' },
  { slug: 'maharashtra-jyotirlinga', name: 'Maharashtra Jyotirlinga Circuit', region: 'Maharashtra', price: 25000, image: 'https://images.unsplash.com/photo-1588679419697-1e0e4b51e5f1?w=800' },
  { slug: 'varanasi-circuit', name: 'Varanasi–Ayodhya–Prayagraj–Gaya', region: 'North India', price: 18000, image: 'https://images.unsplash.com/photo-1561361058-c24e74fb59cd?w=800' },
  { slug: 'south-india-temples', name: 'Madurai–Rameswaram–Kanyakumari', region: 'South India', price: 20000, image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' },
  { slug: 'omkareshwar-mahakaleswar', name: 'Omkareshwar–Mahakaleswar', region: 'Madhya Pradesh', price: 15000, image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800' },
  { slug: 'kedarnath-badrinath', name: 'Kedarnath–Badrinath', region: 'Uttarakhand', price: 35000, image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=800' },
]

export const allDestinations = [...holidayDestinations, ...pilgrimageDestinations]

export const formatPrice = (price: number) =>
  price >= 100000
    ? `₹${(price / 100000).toFixed(1)}L`
    : `₹${(price / 1000).toFixed(0)}K`
