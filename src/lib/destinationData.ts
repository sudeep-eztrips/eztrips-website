export interface DestinationDetail {
  slug: string
  name: string
  region: string
  country: string
  image: string
  price: string
  bestTime: string
  duration: string
  visa: string
  about: string[]
  highlights: { icon: string; title: string; description: string }[]
  itinerary: { day: string; title: string; description: string }[]
  hotels: { name: string; stars: number; location: string; image: string }[]
  reviews: { quote: string; author: string; location: string }[]
  isPilgrimage?: boolean
}

export const destinationDetails: Record<string, DestinationDetail> = {
  thailand: {
    slug: 'thailand',
    name: 'Thailand',
    region: 'Southeast Asia',
    country: 'Thailand',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200',
    price: '₹55,000',
    bestTime: 'Nov – Feb',
    duration: '6–10 Days',
    visa: 'Visa on Arrival',
    about: [
      'Thailand is a land of golden temples, turquoise waters, and vibrant street food markets. From the bustling streets of Bangkok to the pristine islands of the south, every corner offers something magical.',
      'Whether you\'re exploring ancient ruins in Chiang Mai, island-hopping in the Andaman Sea, or indulging in world-class Thai cuisine, Thailand delivers an unforgettable experience at every turn.',
      'With excellent infrastructure, world-class hospitality, and incredible value for money, Thailand remains one of the most popular destinations for Indian travellers.',
    ],
    highlights: [
      { icon: '🏯', title: 'Grand Palace, Bangkok', description: 'The iconic royal complex and Wat Phra Kaew' },
      { icon: '🏝️', title: 'Phi Phi Islands', description: 'Crystal-clear waters and stunning limestone cliffs' },
      { icon: '🐘', title: 'Elephant Sanctuary', description: 'Ethical elephant interaction in Chiang Mai' },
      { icon: '🌺', title: 'Floating Markets', description: 'Damnoen Saduak & Amphawa markets' },
      { icon: '🌙', title: 'Street Food Tours', description: 'Michelin-starred street food in Bangkok' },
      { icon: '🤿', title: 'Snorkelling & Diving', description: 'World-class marine life at Koh Tao' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bangkok', description: 'Arrive at Suvarnabhumi Airport. Hotel check-in. Evening stroll at Asiatique riverfront. Welcome dinner.' },
      { day: 'Day 2', title: 'Bangkok Highlights', description: 'Grand Palace & Wat Phra Kaew, Wat Pho (reclining Buddha), Tuk-tuk ride, Khao San Road in the evening.' },
      { day: 'Day 3', title: 'Bangkok to Phuket', description: 'Morning flight to Phuket. Check-in at beach resort. Patong Beach stroll. Sunset cocktails at Promthep Cape.' },
      { day: 'Day 4', title: 'Phi Phi Islands Day Trip', description: 'Full-day speedboat tour to Phi Phi Islands, Maya Bay, snorkelling, beach lunch. Return by sunset.' },
      { day: 'Day 5', title: 'Krabi Day Trip', description: 'Four Islands tour from Krabi — snorkelling, Emerald Cave, Thalane Bay mangroves by kayak.' },
      { day: 'Day 6', title: 'Phuket Leisure', description: 'Spa morning, Tiger Kingdom visit, Big Buddha. Optional: Bangla Road night market.' },
      { day: 'Day 7', title: 'Departure', description: 'Transfer to Phuket airport for your flight home. Sweet memories to last a lifetime.' },
    ],
    hotels: [
      { name: 'Capella Bangkok', stars: 5, location: 'Chao Phraya River, Bangkok', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Trisara Phuket', stars: 5, location: 'Nai Thon Beach, Phuket', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
      { name: 'Anantara Riverside', stars: 5, location: 'Bangkok', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400' },
    ],
    reviews: [
      { quote: 'The Thailand trip was perfectly orchestrated. Bangkok to Krabi — every hotel was stunning, every transfer on time.', author: 'Neha Kapoor', location: 'Delhi' },
      { quote: 'EzTrips handled everything — visa, airport transfers, island tours. We just enjoyed!', author: 'Amit & Kavya', location: 'Hyderabad' },
    ],
  },

  bali: {
    slug: 'bali',
    name: 'Bali',
    region: 'Indonesia',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    price: '₹60,000',
    bestTime: 'Apr – Oct',
    duration: '6–9 Days',
    visa: 'Visa on Arrival',
    about: [
      'Bali, the Island of the Gods, is a magical blend of lush landscapes, ancient temples, vibrant arts, and some of the world\'s most beautiful beaches. It\'s the perfect honeymoon destination.',
      'From the terraced rice fields of Ubud to the surf-beaten shores of Seminyak, Bali offers diverse experiences — spiritual retreats, adventure sports, fine dining, and spa indulgence.',
      'Our Bali packages include private villa stays, sunset temple visits, cooking classes, and curated day trips to hidden waterfalls and scenic viewpoints.',
    ],
    highlights: [
      { icon: '🌾', title: 'Tegalalang Rice Terraces', description: 'UNESCO-listed emerald rice terraces at sunrise' },
      { icon: '🛕', title: 'Tanah Lot Temple', description: 'Iconic sea temple at golden hour' },
      { icon: '🌊', title: 'Uluwatu Cliff Temple', description: 'Kecak dance with ocean backdrop' },
      { icon: '🏄', title: 'Surf in Seminyak', description: 'World-class waves and surf schools' },
      { icon: '🧖', title: 'Ubud Spa Retreats', description: 'Traditional Balinese massage and wellness' },
      { icon: '🦅', title: 'Mount Batur Sunrise', description: 'Volcano trek for breathtaking sunrise views' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bali', description: 'Arrive at Ngurah Rai Airport. Transfer to Seminyak villa. Welcome dinner at beach club.' },
      { day: 'Day 2', title: 'South Bali Temples', description: 'Tanah Lot temple, Uluwatu cliff temple, Kecak fire dance at sunset.' },
      { day: 'Day 3', title: 'Ubud Arts & Culture', description: 'Monkey Forest, Ubud Market, Tegalalang Rice Terraces, traditional cooking class.' },
      { day: 'Day 4', title: 'Mount Batur Sunrise', description: 'Pre-dawn volcano trek, hot spring dip. Afternoon leisure at Ubud.' },
      { day: 'Day 5', title: 'Nusa Penida Day Trip', description: 'Snorkelling with Manta Rays, Kelingking Beach, Broken Beach & Angel\'s Billabong.' },
      { day: 'Day 6', title: 'Seminyak Leisure', description: 'Potato Head Beach Club, spa morning, sunset at Ku De Ta. Farewell dinner.' },
      { day: 'Day 7', title: 'Departure', description: 'Transfer to airport. Bring home the magic of Bali.' },
    ],
    hotels: [
      { name: 'Alaya Resort Ubud', stars: 5, location: 'Ubud, Bali', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400' },
      { name: 'W Bali — Seminyak', stars: 5, location: 'Seminyak, Bali', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
      { name: 'Four Seasons Jimbaran', stars: 5, location: 'Jimbaran Bay, Bali', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
    ],
    reviews: [
      { quote: 'Our Bali honeymoon was absolutely dreamy. Private villa, temple visits, sunset dinners — EzTrips nailed every detail.', author: 'Priya & Rahul', location: 'Bengaluru' },
      { quote: 'First international trip and couldn\'t have asked for a better experience. Everything was seamless.', author: 'Sneha Reddy', location: 'Hyderabad' },
    ],
  },

  andaman: {
    slug: 'andaman',
    name: 'Andaman Islands',
    region: 'India',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
    price: '₹35,000',
    bestTime: 'Oct – May',
    duration: '5–7 Days',
    visa: 'No Visa Required',
    about: [
      'The Andaman and Nicobar Islands are India\'s most exotic beach destination — turquoise waters, white sandy beaches, and some of the world\'s most pristine coral reefs.',
      'Port Blair, the capital, offers a glimpse into colonial history at the Cellular Jail. Havelock Island and Neil Island are pure tropical paradise with zero crowds.',
      'Andaman is perfect for couples, families, and adventure lovers — scuba diving, snorkelling, sea walking, kayaking through mangroves, and bioluminescent beach nights.',
    ],
    highlights: [
      { icon: '🏖️', title: 'Radhanagar Beach', description: 'Asia\'s best beach — ranked by Time Magazine' },
      { icon: '🤿', title: 'Scuba Diving', description: 'World-class dive sites at Havelock & Neil Island' },
      { icon: '🏛️', title: 'Cellular Jail', description: 'Haunting colonial-era prison & light show' },
      { icon: '🚣', title: 'Mangrove Kayaking', description: 'Silent kayaking through Baratang mangroves' },
      { icon: '🌊', title: 'Elephant Beach', description: 'Snorkelling & glass-bottom boat ride' },
      { icon: '✨', title: 'Bioluminescence', description: 'Night kayaking through glowing waters' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Port Blair', description: 'Arrive at Veer Savarkar Airport. Cellular Jail & Light & Sound Show. Stay: Port Blair.' },
      { day: 'Day 2', title: 'Port Blair Sightseeing', description: 'Anthropological Museum, Corbyn\'s Cove Beach, Ross Island & North Bay snorkelling.' },
      { day: 'Day 3', title: 'Havelock Island', description: 'Ferry to Havelock. Check-in beachside resort. Elephant Beach snorkelling. Sunset at Vijaynagar.' },
      { day: 'Day 4', title: 'Radhanagar Beach Day', description: 'Sunrise at Radhanagar (Asia\'s best beach). Scuba diving / Sea walk. Evening: stargazing on the beach.' },
      { day: 'Day 5', title: 'Neil Island', description: 'Ferry to Neil Island. Natural Bridge, Bharatpur Beach, Laxmanpur Beach sunset.' },
      { day: 'Day 6', title: 'Return & Departure', description: 'Ferry back to Port Blair. Shopping at Aberdeen Bazaar. Evening flight home.' },
    ],
    hotels: [
      { name: 'Havelock Island Beach Resort', stars: 4, location: 'Havelock Island', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
      { name: 'Taj Exotica Resort & Spa', stars: 5, location: 'Havelock Island', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400' },
      { name: 'Sea Shell Hotel', stars: 4, location: 'Port Blair', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
    ],
    reviews: [
      { quote: 'Andaman was a revelation. EzTrips sorted every ferry, every dive, every sunset. Pure bliss.', author: 'Karthik & Divya', location: 'Chennai' },
      { quote: 'Best family trip we\'ve taken. Kids loved the sea walk and bioluminescent kayaking. Magical!', author: 'Ritu Agarwal', location: 'Jaipur' },
    ],
  },

  kashmir: {
    slug: 'kashmir',
    name: 'Kashmir',
    region: 'India',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1200',
    price: '₹30,000',
    bestTime: 'Apr – Jun, Sep – Nov',
    duration: '5–7 Days',
    visa: 'No Visa Required',
    about: [
      'Kashmir — the Paradise on Earth — is a destination of unmatched natural beauty. Snow-capped peaks, saffron fields, Dal Lake houseboats, and meadows of flowers define this breathtaking valley.',
      'From the shikaras floating on Dal Lake in Srinagar to the wildflowers of Gulmarg and the apple orchards of Pahalgam, Kashmir is a feast for the senses in every season.',
      'Summer brings cool respite and blooming gardens; autumn brings golden chinar trees; winter brings ski slopes and snow-dusted vistas. Kashmir is magical year-round.',
    ],
    highlights: [
      { icon: '🛶', title: 'Dal Lake Shikara Ride', description: 'Golden hour float among floating gardens' },
      { icon: '🏔️', title: 'Gulmarg Gondola', description: 'World\'s highest cable car with Himalayan views' },
      { icon: '🌸', title: 'Tulip Garden', description: 'Asia\'s largest tulip garden (March–April)' },
      { icon: '🏡', title: 'Luxury Houseboat Stay', description: 'Traditional cedar-wood houseboat on Dal Lake' },
      { icon: '🐴', title: 'Pahalgam Trek', description: 'Betaab Valley & Aru Valley horseback rides' },
      { icon: '⛷️', title: 'Gulmarg Skiing', description: 'Beginner to expert ski slopes (Dec–Feb)' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Srinagar', description: 'Arrive at Srinagar Airport. Shikara ride on Dal Lake. Check-in to luxury houseboat. Sunset view.' },
      { day: 'Day 2', title: 'Srinagar Sightseeing', description: 'Mughal Gardens (Shalimar, Nishat, Chashme Shahi). Shankaracharya Temple. Old City & Jamia Masjid.' },
      { day: 'Day 3', title: 'Gulmarg Day Trip', description: 'Drive to Gulmarg (2,730m). Gondola ride phase 1 & 2. Snow activities in winter. Meadows in summer.' },
      { day: 'Day 4', title: 'Pahalgam', description: 'Drive through Awantipura ruins. Pahalgam town, Betaab Valley, Aru Valley horseback ride.' },
      { day: 'Day 5', title: 'Sonamarg Day Trip', description: 'Drive to Sonamarg (2,800m). Thajiwas Glacier. Sindh River picnic. Mountain views.' },
      { day: 'Day 6', title: 'Departure', description: 'Last shikara ride at sunrise. Shopping for saffron, shawls, dry fruits. Transfer to airport.' },
    ],
    hotels: [
      { name: 'The Lalit Grand Palace', stars: 5, location: 'Srinagar', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400' },
      { name: 'Vivanta Dal View', stars: 5, location: 'Dal Lake, Srinagar', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Khyber Himalayan Resort', stars: 5, location: 'Gulmarg', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
    ],
    reviews: [
      { quote: 'Kashmir stole our hearts. The houseboat, the gondola, the shikara at dawn — all perfect.', author: 'Vikram & Sunita', location: 'Pune' },
      { quote: 'EzTrips took care of every mountain road transfer. We just relaxed and soaked it all in.', author: 'Meena Pillai', location: 'Kochi' },
    ],
  },

  japan: {
    slug: 'japan',
    name: 'Japan',
    region: 'East Asia',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200',
    price: '₹1,20,000',
    bestTime: 'Mar–Apr (Cherry Blossom), Oct–Nov',
    duration: '8–12 Days',
    visa: 'Japan Visa Required',
    about: [
      'Japan is a country of extraordinary contrasts — ancient temples next to neon-lit skyscrapers, serene zen gardens beside bullet train stations. It\'s unlike anywhere else on Earth.',
      'Tokyo\'s culinary scene, Kyoto\'s preserved geisha districts, Osaka\'s street food culture, and Hokkaido\'s powder snow make Japan a destination that rewards every kind of traveller.',
      'Our Japan packages include JR Pass, bullet train bookings, ryokan (traditional inn) stays, and curated cultural experiences — from tea ceremonies to sumo wrestling.',
    ],
    highlights: [
      { icon: '🌸', title: 'Cherry Blossom Season', description: 'Hanami picnics under sakura trees in April' },
      { icon: '⛩️', title: 'Fushimi Inari', description: 'Thousand torii gates winding up Mount Inari' },
      { icon: '🚅', title: 'Bullet Train (Shinkansen)', description: 'Ride at 320 km/h through Mount Fuji views' },
      { icon: '🍜', title: 'Ramen & Sushi', description: 'Explore Japan\'s extraordinary food culture' },
      { icon: '🏯', title: 'Himeji Castle', description: 'Japan\'s most stunning feudal castle' },
      { icon: '♨️', title: 'Ryokan & Onsen', description: 'Traditional inn with hot spring baths' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Tokyo', description: 'Arrive at Narita/Haneda Airport. Hotel check-in. Evening: Shinjuku lights & Kabukicho.' },
      { day: 'Day 2', title: 'Tokyo Highlights', description: 'Senso-ji Temple (Asakusa), Shibuya Crossing, Harajuku, Meiji Shrine, Akihabara.' },
      { day: 'Day 3', title: 'Tokyo to Kyoto', description: 'Shinkansen to Kyoto. Check-in to ryokan. Evening: Gion district, maiko spotting.' },
      { day: 'Day 4', title: 'Kyoto Temples', description: 'Fushimi Inari gates, Kinkaku-ji (Golden Pavilion), Arashiyama Bamboo Grove, Nishiki Market.' },
      { day: 'Day 5', title: 'Nara Day Trip', description: 'Train to Nara. Todai-ji temple, friendly deer, Nara Park. Return to Kyoto.' },
      { day: 'Day 6', title: 'Osaka', description: 'Travel to Osaka. Dotonbori, street food — takoyaki, okonomiyaki. Osaka Castle.' },
      { day: 'Day 7', title: 'Hiroshima & Miyajima', description: 'Hiroshima Peace Memorial, Miyajima Island\'s floating torii gate.' },
      { day: 'Day 8', title: 'Departure', description: 'Bullet train to Tokyo. Last shopping at Ginza. Departure from Narita.' },
    ],
    hotels: [
      { name: 'Park Hyatt Tokyo', stars: 5, location: 'Shinjuku, Tokyo', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Tawaraya Ryokan', stars: 5, location: 'Kyoto (300-year-old inn)', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400' },
      { name: 'The St. Regis Osaka', stars: 5, location: 'Osaka', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
    ],
    reviews: [
      { quote: 'Japan trip was flawlessly executed. JR Pass, ryokan, bullet trains — every detail was perfect.', author: 'Ananya Sharma', location: 'Mumbai' },
      { quote: 'Cherry blossom season in Kyoto with EzTrips — I\'m still dreaming about it.', author: 'Siddharth Nair', location: 'Bengaluru' },
    ],
  },

  'char-dham': {
    slug: 'char-dham',
    name: 'Char Dham Yatra',
    region: 'Uttarakhand',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1609766857384-89bfb69ac882?w=1200',
    price: '₹45,000',
    bestTime: 'May – Jun, Sep – Oct',
    duration: '10–14 Days',
    visa: 'No Visa Required',
    isPilgrimage: true,
    about: [
      'The Char Dham Yatra is one of India\'s most sacred pilgrimages — a journey to four divine shrines nestled in the Garhwal Himalayas of Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath.',
      'The yatra traditionally follows a west-to-east route, beginning at Yamunotri (goddess Yamuna\'s abode), proceeding to Gangotri (source of the Ganga), then ascending to Kedarnath (Lord Shiva\'s jyotirlinga at 3,583m), and concluding at Badrinath (Lord Vishnu\'s dhaam).',
      'EzTrips manages every aspect of this spiritually transformative journey — comfortable AC vehicles, quality hotels and dharamshalas, puja arrangements, porter/palki services, and 24/7 support.',
    ],
    highlights: [
      { icon: '🙏', title: 'Yamunotri Temple', description: 'Source of the sacred Yamuna River' },
      { icon: '🌊', title: 'Gangotri Temple', description: 'Origin of Ma Ganga in the Himalayas' },
      { icon: '⛰️', title: 'Kedarnath Temple', description: 'Lord Shiva\'s jyotirlinga at 3,583m altitude' },
      { icon: '🛕', title: 'Badrinath Temple', description: 'Lord Vishnu\'s sacred dhaam in the Himalayas' },
      { icon: '🚁', title: 'Helicopter Option', description: 'Kedarnath & Badrinath helicopter darshan available' },
      { icon: '🌄', title: 'Himalayan Panoramas', description: 'Breathtaking views of the Garhwal peaks' },
    ],
    itinerary: [
      { day: 'Day 1', title: 'Haridwar / Rishikesh Arrival', description: 'Arrive at Haridwar/Dehradun. Transfer to Rishikesh. Ganga Aarti at Triveni Ghat. Stay: Rishikesh.' },
      { day: 'Day 2', title: 'Rishikesh to Barkot', description: 'Drive to Barkot (220 km / 8 hrs). Janki Chatti en route. Stay: Barkot.' },
      { day: 'Day 3', title: 'Yamunotri', description: 'Drive to Janki Chatti. Trek 6km to Yamunotri Temple (or palki/pony). Darshan, Surya Kund hot spring. Return to Barkot.' },
      { day: 'Day 4', title: 'Barkot to Uttarkashi', description: 'Drive to Uttarkashi. Visit Vishwanath Temple. Stay: Uttarkashi.' },
      { day: 'Day 5', title: 'Gangotri Darshan', description: 'Drive to Gangotri (95 km). Temple darshan. Ganga Aarti. Return to Uttarkashi. Stay.' },
      { day: 'Day 6', title: 'Uttarkashi to Guptkashi', description: 'Long drive through Tehri, Tilwara to Guptkashi (220 km). Stay: Guptkashi.' },
      { day: 'Day 7', title: 'Kedarnath', description: 'Drive to Gaurikund. Trek 22km (or helicopter) to Kedarnath. Evening VIP darshan. Stay in lodge near temple.' },
      { day: 'Day 8', title: 'Kedarnath to Badrinath', description: 'Return to Gaurikund. Drive to Badrinath via Ukhimath, Chopta, Joshimath.' },
      { day: 'Day 9', title: 'Badrinath Darshan', description: 'Mana Village, Vyas Gufa, Brahma Kapal, Tapt Kund dip, Badrinath Temple darshan. Aarti.' },
      { day: 'Day 10', title: 'Return to Haridwar', description: 'Drive back to Rishikesh/Haridwar. Final Ganga Aarti. Drop at station/airport.' },
    ],
    hotels: [
      { name: 'Rishikesh Ananda Spa Resort', stars: 5, location: 'Rishikesh', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400' },
      { name: 'Hotel Dwarika', stars: 3, location: 'Badrinath', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
      { name: 'Hotel Swargarohini', stars: 3, location: 'Uttarkashi', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
    ],
    reviews: [
      { quote: 'The Char Dham package was beyond expectations. AC vehicle, great hotels, escorted darshans. Felt blessed.', author: 'Suresh Iyer', location: 'Chennai' },
      { quote: 'EzTrips arranged palki for my elderly parents at Kedarnath. Such thoughtful service. Will recommend to everyone.', author: 'Ashok Gupta', location: 'Delhi' },
    ],
  },
}
