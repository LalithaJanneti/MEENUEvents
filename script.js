/* =========================================================
   MEENU Events — script.js
   All dynamic data + theme switching lives here so the
   site is easy to customise later. Edit the DATA objects
   below to change cities, events, venues, themes, etc.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIG: cities + events
   --------------------------------------------------------- */
const CITIES = [
  { id: 'hyderabad',  name: 'Hyderabad',  phone: '+91 8977737787', email: 'Meenuevents@devyora.co', whatsapp: '8977737787', address: 'Road No 12, Banjara Hills, Hyderabad, Telangana 500034', map: 'https://www.google.com/maps?q=Banjara+Hills+Hyderabad&output=embed' },
  { id: 'vijayawada', name: 'Vijayawada', phone: '+91 8977737787', email: 'Meenuevents@devyora.co', whatsapp: '8977737787', address: 'MG Road, Labbipet, Vijayawada, Andhra Pradesh 520010', map: 'https://www.google.com/maps?q=Labbipet+Vijayawada&output=embed' },
  { id: 'vizag',      name: 'Vizag',      phone: '+91 8977737787', email: 'Meenuevents@devyora.co', whatsapp: '8977737787', address: 'Beach Road, Rushikonda, Visakhapatnam, Andhra Pradesh 530045', map: 'https://www.google.com/maps?q=Rushikonda+Visakhapatnam&output=embed' },
];

const EVENTS = [
  { id: 'wedding',     name: '💖 Wedding' },
  { id: 'birthday',    name: '🎂 Birthday' },
  { id: 'babyshower',  name: '🍼 Baby Shower' },
  { id: 'naming',      name: '👶 Naming Ceremony' },
  { id: 'anniversary', name: '💞 Anniversary' },
  { id: 'halfsaree',   name: '💃 Half Saree Function' },
  { id: 'corporate',   name: '💼 Corporate Event' },
  { id: 'housewarming',name: '🏡 Housewarming' },
];

/* ---------------------------------------------------------
   2. EVENT-SPECIFIC CONTENT
   Hero copy + gallery + themes + testimonials per event.
   --------------------------------------------------------- */
const EVENT_CONTENT = {
  wedding: {
    eyebrow: 'Luxury Wedding Planning',
    heroTitle: "We Create Dream Weddings You'll Cherish Forever",
    heroSubtitle: 'Royal decor, flawless coordination and memories that span generations — across Hyderabad, Vijayawada & Vizag.',
    galleryLabel: 'Previous Weddings',
    galleryTitle: 'Royal Celebrations We Crafted',
    galleryDesc: 'From intimate mandaps to grand palace weddings.',
    themesLabel: 'Wedding Themes',
    themesTitle: 'Wedding Themes That Tell Your Story',
    themes: [
      { name: 'Royal Wedding',          img: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Traditional Telugu Wedding', img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Minimal Wedding',        img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Outdoor Wedding',        img: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Destination Wedding',    img: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Beach Wedding',          img: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  birthday: {
    eyebrow: 'Birthday Party Specialists',
    heroTitle: 'Birthdays That Sparkle With Joy & Color',
    heroSubtitle: 'Themed decor, fun activities and cake-cutting magic for every age — kids, teens and adults.',
    galleryLabel: 'Previous Birthdays',
    galleryTitle: 'Parties Full Of Laughter',
    galleryDesc: 'Princess, superhero, jungle and unicorn themes brought to life.',
    themesLabel: 'Birthday Themes',
    themesTitle: 'Birthday Themes For Every Age',
    themes: [
      { name: 'Princess Party',   img: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Superhero Party',   img: 'https://images.pexels.com/photos/10336829/pexels-photo-10336829.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Unicorn Dream',    img: 'https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Jungle Safari',     img: 'https://images.pexels.com/photos/14160871/pexels-photo-14160871.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Baby Boss Theme',   img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Milestone Birthday',img: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  babyshower: {
    eyebrow: 'Baby Shower Celebrations',
    heroTitle: 'Gentle Moments To Welcome New Life',
    heroSubtitle: 'Pastel decor, games and heartfelt rituals to celebrate the mum-to-be in style.',
    galleryLabel: 'Previous Baby Showers',
    galleryTitle: 'Soft Pastel Celebrations',
    galleryDesc: 'Light blue, lavender and dreamy details for the little one on the way.',
    themesLabel: 'Baby Shower Themes',
    themesTitle: 'Baby Shower Themes',
    themes: [
      { name: 'Pastel Clouds',     img: 'https://images.pexels.com/photos/35204091/pexels-photo-35204091.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Twinkle Little Star',img: 'https://images.pexels.com/photos/34154245/pexels-photo-34154245.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Lavender Dreams',   img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Baby In Bloom',     img: 'https://images.pexels.com/photos/30691631/pexels-photo-30691631.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  naming: {
    eyebrow: 'Naming Ceremony Experts',
    heroTitle: 'A Sacred Start To A Beautiful Name',
    heroSubtitle: 'Traditional rituals, baby-pink decor and tender moments for the little one\'s big day.',
    galleryLabel: 'Previous Naming Ceremonies',
    galleryTitle: 'Tiny Celebrations, Big Memories',
    galleryDesc: 'Cradle ceremonies and traditional Telugu naming rituals.',
    themesLabel: 'Naming Ceremony Themes',
    themesTitle: 'Naming Ceremony Themes',
    themes: [
      { name: 'Traditional Naming Ceremony', img: 'https://images.pexels.com/photos/35040453/pexels-photo-35040453.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Royal Baby Cradle Ceremony', img: 'https://images.pexels.com/photos/19794717/pexels-photo-19794717.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Minimal Pastel Ceremony', img: 'https://images.pexels.com/photos/12116207/pexels-photo-12116207.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Sky Blue Cradle Ceremony', img: 'https://images.pexels.com/photos/30665062/pexels-photo-30665062.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  anniversary: {
    eyebrow: 'Anniversary Celebrations',
    heroTitle: 'Celebrate Years Of Love, Again & Again',
    heroSubtitle: 'Romantic decor, candle-lit dinners and a night that rekindles every memory.',
    galleryLabel: 'Previous Anniversaries',
    galleryTitle: 'Love Stories Renewed',
    galleryDesc: 'Silver, golden and milestone anniversaries designed with heart.',
    themesLabel: 'Anniversary Themes',
    themesTitle: 'Anniversary Themes',
    themes: [
      { name: 'Candle-Lit Romance',  img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Golden Vows Renewal', img: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Rooftop Dinner',       img: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Beachside Celebration',img: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  halfsaree: {
    eyebrow: 'Half Saree Function Planning',
    heroTitle: 'Graceful Half Saree Celebrations for the Next Generation',
    heroSubtitle: 'Elegant decor, family traditions and vibrant rituals crafted for your special half saree ceremony.',
    galleryLabel: 'Half Saree Celebrations',
    galleryTitle: 'Memorable Half Saree Moments',
    galleryDesc: 'From traditional blessings to festive family gatherings, every detail is designed with charm.',
    themesLabel: 'Half Saree Themes',
    themesTitle: 'Half Saree Function Themes',
    themes: [
      { name: 'Traditional Half Saree', img: 'https://images.pexels.com/photos/18156765/pexels-photo-18156765.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Floral Stage Setup',   img: 'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Family Blessings',     img: 'https://images.pexels.com/photos/11993617/pexels-photo-11993617.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  corporate: {
    eyebrow: 'Corporate Event Management',
    heroTitle: 'Professional Events That Mean Business',
    heroSubtitle: 'Conferences, product launches and award nights executed with precision and polish.',
    galleryLabel: 'Previous Corporate Events',
    galleryTitle: 'Events That Mean Business',
    galleryDesc: 'Award nights, conferences and brand launches delivered flawlessly.',
    themesLabel: 'Corporate Themes',
    themesTitle: 'Corporate Event Themes',
    themes: [
      { name: 'Award Night',      img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Product Launch',    img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Conference Setup',  img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Team Offsite',      img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  housewarming: {
    eyebrow: 'Housewarming Celebrations',
    heroTitle: 'A Warm Welcome To Your New Home',
    heroSubtitle: 'Traditional rituals, festive decor and a joyful gathering for your new beginning.',
    galleryLabel: 'Previous Housewarmings',
    galleryTitle: 'New Beginnings Celebrated',
    galleryDesc: 'Grihapravesham and housewarming parties with traditional charm.',
    themesLabel: 'Housewarming Themes',
    themesTitle: 'Housewarming Themes',
    themes: [
      { name: 'Traditional Grihapravesham', img: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Festive Marigold',            img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Modern Minimal',              img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
};

/* ---------------------------------------------------------
   3. GALLERY (previous events) per event + city
   --------------------------------------------------------- */
const GALLERY = {
  wedding: [
    { title: 'Royal Palace Wedding', loc: 'Hyderabad', guests: 1200, img: 'https://images.pexels.com/photos/19439930/pexels-photo-19439930.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Beachside Telugu Wedding', loc: 'Vizag', guests: 600, img: 'https://images.pexels.com/photos/30475158/pexels-photo-30475158.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Garden Wedding', loc: 'Vijayawada', guests: 450, img: 'https://images.pexels.com/photos/12432503/pexels-photo-12432503.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Minimal Mandap Wedding', loc: 'Hyderabad', guests: 300, img: 'https://images.pexels.com/photos/32235796/pexels-photo-32235796.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Destination Wedding', loc: 'Vizag', guests: 250, img: 'https://images.pexels.com/photos/36484495/pexels-photo-36484495.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Traditional Wedding', loc: 'Vijayawada', guests: 800, img: 'https://images.pexels.com/photos/12584803/pexels-photo-12584803.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  birthday: [
    { title: "Princess 5th Birthday", loc: 'Hyderabad', guests: 80, img: 'https://images.pexels.com/photos/35051545/pexels-photo-35051545.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Superhero Theme Party', loc: 'Vijayawada', guests: 60, img: 'https://images.pexels.com/photos/10336829/pexels-photo-10336829.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Unicorn Dream Party', loc: 'Vizag', guests: 50, img: 'https://images.pexels.com/photos/8385012/pexels-photo-8385012.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Milestone 50th Birthday', loc: 'Hyderabad', guests: 150, img: 'https://images.pexels.com/photos/7922235/pexels-photo-7922235.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Jungle Safari Party', loc: 'Vijayawada', guests: 45, img: 'https://images.pexels.com/photos/14160871/pexels-photo-14160871.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Luxe Rooftop Birthday', loc: 'Vizag', guests: 100, img: 'https://images.pexels.com/photos/5935254/pexels-photo-5935254.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  babyshower: [
    { title: 'Pastel Clouds Baby Shower', loc: 'Hyderabad', guests: 60, img: 'https://images.pexels.com/photos/35204091/pexels-photo-35204091.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Twinkle Star Shower', loc: 'Vijayawada', guests: 40, img: 'https://images.pexels.com/photos/34154245/pexels-photo-34154245.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Lavender Dreams Shower', loc: 'Vizag', guests: 55, img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Baby In Bloom Shower', loc: 'Hyderabad', guests: 70, img: 'https://images.pexels.com/photos/30691631/pexels-photo-30691631.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  naming: [
    { title: 'Traditional Naming Ceremony', loc: 'Hyderabad', guests: 100, img: 'https://images.pexels.com/photos/35040453/pexels-photo-35040453.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Royal Baby Cradle Ceremony', loc: 'Vijayawada', guests: 80, img: 'https://images.pexels.com/photos/19794717/pexels-photo-19794717.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Minimal Pastel Ceremony', loc: 'Vizag', guests: 50, img: 'https://images.pexels.com/photos/12116207/pexels-photo-12116207.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Sky Blue Cradle Ceremony', loc: 'Hyderabad', guests: 90, img: 'https://images.pexels.com/photos/30665062/pexels-photo-30665062.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  anniversary: [
    { title: 'Silver Anniversary Gala', loc: 'Hyderabad', guests: 200, img: 'https://images.pexels.com/photos/10944977/pexels-photo-10944977.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Golden Vows Renewal', loc: 'Vijayawada', guests: 150, img: 'https://images.pexels.com/photos/7810968/pexels-photo-7810968.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Rooftop Candle Dinner', loc: 'Vizag', guests: 60, img: 'https://images.pexels.com/photos/5638834/pexels-photo-5638834.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Beachside Anniversary', loc: 'Vizag', guests: 80, img: 'https://images.pexels.com/photos/7867433/pexels-photo-7867433.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  halfsaree: [
    { title: 'Traditional Half Saree Ceremony', loc: 'Hyderabad', guests: 120, img: 'https://images.pexels.com/photos/12584803/pexels-photo-12584803.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Family Blessings Function', loc: 'Vijayawada', guests: 150, img: 'https://images.pexels.com/photos/27960941/pexels-photo-27960941.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Floral Half Saree Event', loc: 'Vizag', guests: 90, img: 'https://images.pexels.com/photos/32593148/pexels-photo-32593148.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Elegant Ceremony Reception', loc: 'Hyderabad', guests: 110, img: 'https://images.pexels.com/photos/38302968/pexels-photo-38302968.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  corporate: [
    { title: 'Annual Award Night', loc: 'Hyderabad', guests: 800, img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Tech Product Launch', loc: 'Vijayawada', guests: 500, img: 'https://images.pexels.com/photos/6398745/pexels-photo-6398745.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Leadership Conference', loc: 'Vizag', guests: 400, img: 'https://images.pexels.com/photos/35042459/pexels-photo-35042459.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Team Offsite Retreat', loc: 'Hyderabad', guests: 200, img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  housewarming: [
    { title: 'Traditional Grihapravesham', loc: 'Hyderabad', guests: 120, img: 'https://images.pexels.com/photos/6359436/pexels-photo-6359436.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Festive Marigold Housewarming', loc: 'Vijayawada', guests: 90, img: 'https://images.pexels.com/photos/34056583/pexels-photo-34056583.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Modern Minimal Housewarming', loc: 'Vizag', guests: 70, img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Green & Saffron Ceremony', loc: 'Hyderabad', guests: 100, img: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
};

/* ---------------------------------------------------------
   4. VENUES per city
   --------------------------------------------------------- */
const VENUES = {
  hyderabad: [
    { name: 'Banjara Palace',     locality: 'Banjara Hills', guests: 1200, rooms: 12, type: 'Banquet', rating: 4.9, img: 'https://images.pexels.com/photos/12572754/pexels-photo-12572754.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Jubilee Gardens',    locality: 'Jubilee Hills', guests: 800,  rooms: 8,  type: 'Outdoor', rating: 4.7, img: 'https://images.pexels.com/photos/36340623/pexels-photo-36340623.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Hitech Convention', locality: 'Hitech City',   guests: 1500, rooms: 15, type: 'Indoor',  rating: 4.8, img: 'https://images.pexels.com/photos/33161614/pexels-photo-33161614.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Golkonda Resort',    locality: 'Gandipet',      guests: 600,  rooms: 20, type: 'Resort',  rating: 4.6, img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Pearl Banquets',     locality: 'Kukatpally',     guests: 500,  rooms: 6,  type: 'Banquet', rating: 4.4, img: 'https://images.pexels.com/photos/38302968/pexels-photo-38302968.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Charminar Lawns',    locality: 'Old City',       guests: 1000, rooms: 5,  type: 'Outdoor', rating: 4.3, img: 'https://images.pexels.com/photos/32608130/pexels-photo-32608130.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  vijayawada: [
    { name: 'Krishnaveni Palace',  locality: 'Labbipet',     guests: 1000, rooms: 10, type: 'Banquet', rating: 4.7, img: 'https://images.pexels.com/photos/19439930/pexels-photo-19439930.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Benz Circle Gardens', locality: 'Benz Circle',  guests: 700,  rooms: 6,  type: 'Outdoor', rating: 4.5, img: 'https://images.pexels.com/photos/2079628/pexels-photo-2079628.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'MGM Convention',     locality: 'MG Road',       guests: 1200, rooms: 12, type: 'Indoor',  rating: 4.8, img: 'https://images.pexels.com/photos/2101267/pexels-photo-2101267.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Riverside Resort',    locality: 'Prakasam Barrage', guests: 500, rooms: 18, type: 'Resort', rating: 4.6, img: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Vijaya Banquets',     locality: 'Governorpet',  guests: 400,  rooms: 4,  type: 'Banquet', rating: 4.3, img: 'https://images.pexels.com/photos/7244503/pexels-photo-7244503.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  vizag: [
    { name: 'Beach View Palace',   locality: 'Beach Road',   guests: 900,  rooms: 10, type: 'Banquet', rating: 4.8, img: 'https://images.pexels.com/photos/767964/pexels-photo-767964.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Rushikonda Resorts',  locality: 'Rushikonda',   guests: 600,  rooms: 25, type: 'Resort',  rating: 4.7, img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Dolphin Convention',  locality: 'Dwarakanagar', guests: 1100, rooms: 8,  type: 'Indoor',  rating: 4.6, img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Seaside Lawns',       locality: 'Rishikonda',    guests: 700,  rooms: 5,  type: 'Outdoor', rating: 4.5, img: 'https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Vizag Grand Banquets',locality: 'Siripuram',     guests: 500,  rooms: 6,  type: 'Banquet', rating: 4.4, img: 'https://images.pexels.com/photos/5477860/pexels-photo-5477860.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
};

/* ---------------------------------------------------------
   5. SERVICES (shared, with icons + descriptions)
   --------------------------------------------------------- */
const SERVICES = [
  { icon: 'bi-egg-fried',      title: 'Food & Catering',    img: 'https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-camera',         title: 'Photography',       img: 'https://images.pexels.com/photos/33342655/pexels-photo-33342655.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-camera-reels',   title: 'Pre-Wedding Shoot',       img: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600' },
  //{ icon: 'bi-airplane-engines',title: 'Drone Shoot',       img: 'https://images.pexels.com/photos/2693368/pexels-photo-2693368.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-flower1',         title: 'Dream Decoration',        img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-palette',         title: 'Makeup',            img: 'https://images.pexels.com/photos/11742218/pexels-photo-11742218.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-scissors',       title: 'Hair Styling',       img: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-card-image',      title: 'Invitation Design', img: 'https://images.pexels.com/photos/15313106/pexels-photo-15313106.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-car-front',       title: 'Luxury Cars',        img: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-people',          title: 'Guest Management',  img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-building',        title: 'Hotel Booking',     img: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-music-note-beamed',title: 'DJ & Live Band',               img: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600' },
  //{ icon: 'bi-music-player',    title: 'Live Band',         img: 'https://images.pexels.com/photos/167701/pexels-photo-167701.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-magic',           title: 'Magic Show',        img: 'https://images.pexels.com/photos/11634143/pexels-photo-11634143.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-easel',           title: 'Live Painting',    img: 'https://images.pexels.com/photos/31902390/pexels-photo-31902390.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-person-bounding-box', title: 'Caricature',   img: 'https://images.pexels.com/photos/29612587/pexels-photo-29612587.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-emoji-laughing',  title: 'Stand-up Comedy',   img: 'https://images.pexels.com/photos/12311203/pexels-photo-12311203.jpeg?auto=compress&cs=tinysrgb&w=600' },
  //{ icon: 'bi-hand-index-thumb',title: 'Puppet Show',       img: 'https://images.pexels.com/photos/2076629/pexels-photo-2076629.jpeg?auto=compress&cs=tinysrgb&w=600' },
  //{ icon: 'bi-fire',            title: 'Fire Show',         img: 'https://images.pexels.com/photos/2693368/pexels-photo-2693368.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-lightbulb',       title: 'Laser Show',        img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-balloon',         title: 'Family Dance',img: 'https://images.pexels.com/photos/10360899/pexels-photo-10360899.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-gift',            title: 'Return Gifts',      img: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-cake2',           title: 'Cake',              img: 'https://images.pexels.com/photos/29051739/pexels-photo-29051739.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-clipboard-heart', title: 'Wedding Planning',  img: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-briefcase',       title: 'Corporate Planning',img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-tv',              title: 'LED Wall',          img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-power',           title: 'Generator',         img: 'https://images.pexels.com/photos/32713414/pexels-photo-32713414.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-broadcast',       title: 'Dance Floor',       img: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-grid-3x3',        title: 'Furniture',         img: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-lightbulb-fill',  title: 'Lighting',          img: 'https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-flower2',         title: 'Floral Decoration', img: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: 'bi-balloon-heart',   title: 'Balloon Decoration',img: 'https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

/* ---------------------------------------------------------
   6. TESTIMONIALS per city
   --------------------------------------------------------- */
const TESTIMONIALS = {
  hyderabad: [
    { name: 'Sneha & Karthik', event: 'Wedding',          rating: 5, text: 'MEENU Events turned our Banjara Hills wedding into a dream. Every ritual, every decor detail was flawless. Guests still talk about it!', img: 'https://images.pexels.com/photos/3752864/pexels-photo-3752864.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Ramesh Rao',      event: 'Corporate Event',  rating: 5, text: 'Our annual award night was managed end-to-end. Punctual, professional and the LED stage looked world-class.', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Lakshmi P.',      event: 'Baby Shower',      rating: 5, text: 'The pastel decor was straight out of Pinterest. My baby shower was gentle, beautiful and stress-free.', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ],
  vijayawada: [
    { name: 'Anusha & Vamsi',  event: 'Wedding',          rating: 5, text: 'Traditional Telugu wedding done perfectly. The floral mandap at MGM Convention was breathtaking.', img: 'https://images.pexels.com/photos/3752864/pexels-photo-3752864.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Divya K.',        event: 'Birthday',         rating: 5, text: 'My daughter\'s princess birthday was magical. The team handled everything — we just enjoyed!', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Kavya S.',        event: 'Half Saree Function', rating: 5, text: 'My half saree function was elegant and joyous. The decor, lighting and family rituals were handled beautifully.', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ],
  vizag: [
    { name: 'Priya & Arjun',   event: 'Wedding',          rating: 5, text: 'Beachside wedding at Rushikonda — sunset, decor and coordination all perfect. Forever grateful.', img: 'https://images.pexels.com/photos/3752864/pexels-photo-3752864.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Murthy G.',       event: 'Housewarming',     rating: 5, text: 'Traditional grihapravesham with festive marigold decor. Neighbours are still asking who did it!', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Sunita R.',       event: 'Anniversary',      rating: 5, text: 'Our 25th anniversary rooftop dinner was romantic and elegant. Candle-lit perfection.', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ],
};

/* ---------------------------------------------------------
   7. VIDEO GALLERY (YouTube embeds — demo IDs)
   --------------------------------------------------------- */
const VIDEOS = [
  { title: 'Royal Wedding Highlights',      id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Birthday Party Aftermovie',      id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Corporate Awards Night',          id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Baby Shower Film',                id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/265988/pexels-photo-265988.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Half Saree Ceremony Reel',        id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Naming Ceremony Coverage',       id: 'tVj0ZUdQn5E', thumb: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

/* ---------------------------------------------------------
   8. STATE
   --------------------------------------------------------- */
let currentCity = CITIES[0].id;
let currentEvent = EVENTS[0].id;

/* ---------------------------------------------------------
   9. HELPERS
   --------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function fmtINR(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/* ---------------------------------------------------------
   10. POPULATE DROPDOWNS
   --------------------------------------------------------- */
function populateDropdowns() {
  const citySel = $('#citySelect');
  const formCity = $('#formCity');
  citySel.innerHTML = CITIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  formCity.innerHTML = CITIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  const evtSel = $('#eventSelect');
  const formEvt = $('#formEvent');
  evtSel.innerHTML = EVENTS.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
  formEvt.innerHTML = EVENTS.map(e => `<option value="${e.id}">${e.name}</option>`).join('');

  evtSel.value = currentEvent;
  citySel.value = currentCity;
  formEvt.value = currentEvent;
  formCity.value = currentCity;
}

/* ---------------------------------------------------------
   11. THEME SWITCH (applies data-event on <body>)
   --------------------------------------------------------- */
function applyTheme() {
  document.body.setAttribute('data-event', currentEvent);
  const c = EVENT_CONTENT[currentEvent];
  $('#heroEyebrow').textContent = c.eyebrow;
  $('#heroTitle').textContent = c.heroTitle;
  $('#heroSubtitle').textContent = c.heroSubtitle;
  $('#galleryEyebrow').textContent = c.galleryLabel;
  $('#galleryTitle').textContent = c.galleryTitle;
  $('#galleryDesc').textContent = c.galleryDesc;
  $('#themesEyebrow').textContent = c.themesLabel;
  $('#themesTitle').textContent = c.themesTitle;

  const heroBg = $('#heroBg');
  if (heroBg) {
    const heroImg = window.getComputedStyle(document.body).getPropertyValue('--hero-img').trim();
    if (heroImg) heroBg.style.backgroundImage = heroImg;
  }

  renderGallery();
  renderThemes();
}

/* ---------------------------------------------------------
   12. RENDER GALLERY (previous events)
   --------------------------------------------------------- */
function renderGallery() {
  const items = (GALLERY[currentEvent] || []).filter(g =>
    g.loc.toLowerCase().includes(CITY_NAME(currentCity).toLowerCase()) ||
    true // show all for the event; city filter could be added
  );
  const grid = $('#galleryGrid');
  grid.innerHTML = items.map((g, i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <article class="gallery-card">
        <div class="gallery-img">
          <span class="gallery-badge">${escapeHtml(EVENTS.find(e => e.id === currentEvent).name)}</span>
          <img src="${g.img}" alt="${escapeHtml(g.title)}" loading="lazy" />
        </div>
        <div class="gallery-body">
          <h3>${escapeHtml(g.title)}</h3>
          <div class="gallery-meta">
            <span><i class="bi bi-geo-alt"></i>${escapeHtml(g.loc)}</span>
            <span><i class="bi bi-people"></i>${g.guests} guests</span>
          </div>
          <a href="#booking" class="gallery-btn">View Details <i class="bi bi-arrow-right"></i></a>
        </div>
      </article>
    </div>
  `).join('');
  if (window.AOS) AOS.refresh();
}

function CITY_NAME(id) {
  return CITIES.find(c => c.id === id).name;
}

/* ---------------------------------------------------------
   13. RENDER THEMES CAROUSEL
   --------------------------------------------------------- */
function renderThemes() {
  const themes = EVENT_CONTENT[currentEvent].themes;
  const inner = $('#themesInner');
  // group into slides of 1 for mobile, 2 for tablet, 3 for desktop
  const slides = [];
  for (let i = 0; i < themes.length; i++) slides.push(themes.slice(i, i + 1));
  inner.innerHTML = slides.map((group, idx) => `
    <div class="carousel-item ${idx === 0 ? 'active' : ''}">
      <div class="row g-4">
        ${group.map(t => `
          <div class="col-md-4">
            <div class="theme-card">
              <div class="theme-img"><img src="${t.img}" alt="${escapeHtml(t.name)}" loading="lazy" /></div>
              <div class="theme-body">
                <h3>${escapeHtml(t.name)}</h3>
                <a href="#booking" class="theme-btn">View Theme <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------------------------------------------------------
   14. RENDER SERVICES
   --------------------------------------------------------- */
function renderServices() {
  const grid = $('#servicesGrid');
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="service-card">
        <div class="service-img"><img src="${s.img}" alt="${escapeHtml(s.title)}" loading="lazy" /></div>
        <div class="service-icon"><i class="bi ${s.icon}"></i></div>
        <div class="service-body">
          <h3>${escapeHtml(s.title)}</h3>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------------------------------------------------------
   15. VENUE FINDER
   --------------------------------------------------------- */
function populateVenueFilters() {
  const localities = Array.from(new Set((VENUES[currentCity] || []).map(v => v.locality)));
  $('#fLocality').innerHTML = `<option value="">Any</option>` +
    localities.map(l => `<option value="${escapeHtml(l)}">${escapeHtml(l)}</option>`).join('');
}

function renderVenues() {
  const list = VENUES[currentCity] || [];
  const locality = $('#fLocality').value;
  const minGuests = parseInt($('#fGuests').value || '0', 10);
  const minRooms = parseInt($('#fRooms').value || '0', 10);
  const type = $('#fType').value;

  const filtered = list.filter(v =>
    (!locality || v.locality === locality) &&
    v.guests >= minGuests &&
    v.rooms >= minRooms &&
    (!type || v.type === type)
  );

  const wrap = $('#venueResults');
  if (filtered.length === 0) {
    wrap.innerHTML = `<div class="col-12 venue-empty"><i class="bi bi-search" style="font-size:2rem;"></i><p class="mt-2">No venues match your filters. Try widening your search.</p></div>`;
    return;
  }
  wrap.innerHTML = filtered.map((v, i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <div class="venue-card">
        <div class="venue-img">
          <span class="venue-type-tag">${escapeHtml(v.type)}</span>
          <span class="venue-rating"><i class="bi bi-star-fill"></i>${v.rating}</span>
          <img src="${v.img}" alt="${escapeHtml(v.name)}" loading="lazy" />
        </div>
        <div class="venue-body">
          <h3>${escapeHtml(v.name)}</h3>
          <p class="venue-loc"><i class="bi bi-geo-alt"></i>${escapeHtml(v.locality)}, ${CITY_NAME(currentCity)}</p>
          <div class="venue-specs">
            <span><i class="bi bi-people"></i>${v.guests} guests</span>
            <span><i class="bi bi-door-open"></i>${v.rooms} rooms</span>
          </div>
          <a href="#booking" class="venue-btn">Book Visit</a>
        </div>
      </div>
    </div>
  `).join('');
  if (window.AOS) AOS.refresh();
}

/* ---------------------------------------------------------
   16. RENDER TESTIMONIALS
   --------------------------------------------------------- */
function renderTestimonials() {
  const list = TESTIMONIALS[currentCity] || [];
  const inner = $('#testimonialInner');
  inner.innerHTML = list.map((t, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <div class="testimonial-card">
        <img src="${t.img}" alt="${escapeHtml(t.name)}" class="testimonial-img" loading="lazy" />
        <div class="testimonial-stars">${'<i class="bi bi-star-fill"></i>'.repeat(t.rating)}${t.rating < 5 ? '<i class="bi bi-star"></i>'.repeat(5 - t.rating) : ''}</div>
        <p class="testimonial-text">"${escapeHtml(t.text)}"</p>
        <div class="testimonial-name">${escapeHtml(t.name)}</div>
        <div class="testimonial-event">${escapeHtml(t.event)}</div>
      </div>
    </div>
  `).join('');
}

/* ---------------------------------------------------------
   17. RENDER VIDEO GALLERY
   --------------------------------------------------------- */
function renderVideos() {
  const scroll = $('#videoScroll');
  scroll.innerHTML = VIDEOS.map(v => `
    <div class="video-card" data-video="${v.id}">
      <img src="${v.thumb}" alt="${escapeHtml(v.title)}" loading="lazy" />
      <div class="video-overlay">
        <span class="video-play"><i class="bi bi-play-fill"></i></span>
      </div>
      <span class="video-title">${escapeHtml(v.title)}</span>
    </div>
  `).join('');

  $$('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.video;
      openVideoModal(id);
    });
  });
}

function openVideoModal(id) {
  // build a lightweight modal via Bootstrap
  let modalEl = document.getElementById('videoModal');
  if (modalEl) modalEl.remove();
  modalEl = document.createElement('div');
  modalEl.className = 'modal fade';
  modalEl.id = 'videoModal';
  modalEl.setAttribute('tabindex', '-1');
  modalEl.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content" style="background:transparent;border:none;">
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="Video" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modalEl);
  const modal = new bootstrap.Modal(modalEl);
  modalEl.addEventListener('hidden.bs.modal', () => modalEl.remove());
  modal.show();
}

/* ---------------------------------------------------------
   18. CONTACT INFO per city
   --------------------------------------------------------- */
function renderContact() {
  const c = CITIES.find(c => c.id === currentCity);
  $('#contactAddress').textContent = c.address;
  $('#contactPhoneLink').textContent = c.phone;
  $('#contactPhoneLink').href = `tel:${c.phone}`;
  const mobilePhoneLink = $('#mobilePhoneLink');
  const mobilePhoneText = $('#mobilePhoneText');
  if (mobilePhoneLink) {
    mobilePhoneLink.href = `tel:${c.phone}`;
    if (mobilePhoneText) mobilePhoneText.textContent = c.phone;
  }
  $('#contactEmailLink').textContent = c.email;
  $('#contactEmailLink').href = `mailto:${c.email}`;
  $('#contactWhatsappLink').textContent = c.whatsapp;
  $('#contactWhatsappLink').href = `https://wa.me/${c.whatsapp}`;
  $('#contactMap').src = c.map;
  $('#floatWhatsapp').href = `https://wa.me/${c.whatsapp}`;
  $('#contactTitle').textContent = `Visit Our ${c.name} Studio`;
  $('#contactDesc').textContent = `Drop by our ${c.name} office for a coffee and a chat about your celebration.`;

  // social row
  $('#socialRow').innerHTML = `
    <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
    <a href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
    <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
  `;
}

/* ---------------------------------------------------------
   19. FOOTER CITIES
   --------------------------------------------------------- */
function renderFooterCities() {
  $('#footerCities').innerHTML = CITIES.map(c =>
    `<li><a href="#" data-city="${c.id}">${c.name}</a></li>`
  ).join('');
  $$('#footerCities a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      currentCity = a.dataset.city;
      $('#citySelect').value = currentCity;
      $('#formCity').value = currentCity;
      onCityChange();
      document.getElementById('venues').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------------------------------------------------------
   20. COUNTERS (count-up on scroll)
   --------------------------------------------------------- */
function animateCounters() {
  $$('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const text = el.dataset.text;
    if (text) { el.textContent = text; return; }
    if (target === 0) { el.textContent = suffix; return; }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = () => {
      current += step;
      if (current >= target) { el.textContent = target + suffix; return; }
      el.textContent = current + suffix;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

let countersDone = false;
function maybeCounters() {
  if (countersDone) return;
  const stats = $('#statsRow');
  if (!stats) return;
  const rect = stats.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    countersDone = true;
    animateCounters();
  }
}

/* ---------------------------------------------------------
   21. NAVBAR SCROLL + PARALLAX
   --------------------------------------------------------- */
function onScroll() {
  const nav = $('#mainNav');
  const hero = $('#hero');
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
    hero.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
    hero.classList.remove('scrolled');
  }
  // parallax
  const bg = $('#heroBg');
  if (bg && window.scrollY < window.innerHeight) {
    bg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.18}px)`;
  }
  maybeCounters();
}

/* ---------------------------------------------------------
   22. RIPPLE EFFECT
   --------------------------------------------------------- */
function attachRipples() {
  $$('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const d = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = (e.clientX - this.getBoundingClientRect().left - d / 2) + 'px';
      circle.style.top = (e.clientY - this.getBoundingClientRect().top - d / 2) + 'px';
      circle.className = 'rip';
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

/* ---------------------------------------------------------
   23. CITY / EVENT CHANGE HANDLERS
   --------------------------------------------------------- */
function onCityChange() {
  populateVenueFilters();
  renderVenues();
  renderTestimonials();
  renderContact();
}

function onEventChange() {
  applyTheme();
}

/* ---------------------------------------------------------
   24. BOOKING FORM
   --------------------------------------------------------- */
function attachForm() {
  const form = $('#bookingForm');
  const fb = $('#formFeedback');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      fb.className = 'form-feedback error';
      fb.textContent = 'Please fill all required fields correctly.';
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    fb.className = 'form-feedback';
    fb.textContent = 'Submitting your request...';

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to submit booking.');
      }

      fb.className = 'form-feedback success';
      fb.textContent = `Thank you, ${data.name}! Our planner will call you within 24 hours.`;
      form.reset();
      $('#formCity').value = currentCity;
      $('#formEvent').value = currentEvent;
    } catch (error) {
      fb.className = 'form-feedback error';
      fb.textContent = error.message || 'Unable to submit booking right now.';
    }
  });
}

/* ---------------------------------------------------------
   25. SMOOTH SCROLL for in-page links
   --------------------------------------------------------- */
async function trackConsultationClick(source, label = 'Book Consultation', page = 'unknown') {
  try {
    await fetch('/api/consultation-clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, label, page })
    });
  } catch (error) {
    console.warn('Unable to track consultation click:', error);
  }
}

function showPageLoader() {
  const loader = $('#pageLoader');
  if (!loader) return;
  document.documentElement.classList.add('page-no-smooth');
  document.body.classList.add('page-loading');
  loader.classList.add('visible');
}

function hidePageLoader() {
  const loader = $('#pageLoader');
  if (!loader) return;
  loader.classList.remove('visible');
  document.body.classList.remove('page-loading');
  document.documentElement.classList.remove('page-no-smooth');
}

function attachSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', async (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const label = a.textContent.trim().replace(/\s+/g, ' ');
        showPageLoader(`MEENUEvents loading ${label}...`);

        const off = document.getElementById('navOffcanvas');
        if (off && off.classList.contains('show')) {
          bootstrap.Offcanvas.getInstance(off).hide();
        }

        setTimeout(() => {
          target.scrollIntoView({ behavior: 'auto' });
          history.replaceState(null, '', href);
          setTimeout(hidePageLoader, 320);
        }, 140);

        if (a.textContent.includes('Book Consultation')) {
          await trackConsultationClick('nav_link', a.textContent.trim(), 'home');
        }
      }
    });
  });
}

function attachConsultationButtons() {
  $$('a.btn-consultation, button.btn-consultation').forEach((button) => {
    button.addEventListener('click', () => {
      const label = button.textContent.trim() || 'Book Consultation';
      const source = button.getAttribute('data-track-source') || 'button';
      trackConsultationClick(source, label, 'home');
    });
  });
}

/* ---------------------------------------------------------
   26. INIT
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // year
  $('#year').textContent = new Date().getFullYear();

  populateDropdowns();
  applyTheme();
  renderServices();
  populateVenueFilters();
  renderVenues();
  renderTestimonials();
  renderVideos();
  renderContact();
  renderFooterCities();
  attachRipples();
  attachForm();
  attachConsultationButtons();
  attachSmoothScroll();

  // dropdown listeners
  $('#citySelect').addEventListener('change', (e) => {
    currentCity = e.target.value;
    $('#formCity').value = currentCity;
    onCityChange();
  });
  $('#eventSelect').addEventListener('change', (e) => {
    currentEvent = e.target.value;
    $('#formEvent').value = currentEvent;
    onEventChange();
  });
  $('#exploreBtn').addEventListener('click', () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
  $('#venueSearch').addEventListener('click', renderVenues);

  // scroll
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // AOS
  if (window.AOS) AOS.init({ duration: 800, once: true, offset: 80 });
});
