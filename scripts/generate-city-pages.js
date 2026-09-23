import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const cities = [
  {
    slug: 'software-company-in-siwan.html',
    name: 'Siwan',
    fullName: 'Siwan, Bihar',
    district: 'Siwan District',
    state: 'Bihar',
    title: 'Best Software Company in Siwan | Argun Software Solutions',
    metaDesc: 'Looking for the best software company in Siwan, Bihar? Argun Software Solutions provides custom software development, GST billing software, auto garage systems, and web design with on-site installation and support in Siwan.',
    keywords: 'best software company in siwan, software company in siwan, software company near me siwan, website development in siwan, billing software siwan, it company in siwan bihar, software development siwan',
    h1: 'Best Software Company in Siwan',
    heroSub: 'Leading custom software development and IT solutions provider in Siwan, Bihar. We build GST billing software, auto garage systems, loan management software, and high-performance websites with localized on-site support.',
    badge: '#1 Software Company in Siwan, Bihar',
    geo: { lat: 26.2196, lng: 84.3567 },
    commercialZones: 'Hospital Road, Babunia Road, Tarwara Road, Maharajganj, Mairwa, Pachrukhi, and Barharia',
    industryFocus: 'Specialty medical clinics & hospitals, wholesale traders, automobile repair workshops, and micro-finance lending societies',
    localContext: 'Whether your business is located near Babunia Road, Hospital Road, or in Maharajganj and Mairwa, Argun Software Solutions provides direct on-site software installation, staff training, and dedicated support across Siwan district.'
  },
  {
    slug: 'software-company-in-chapra.html',
    name: 'Saran (Chapra)',
    shortName: 'Chapra',
    fullName: 'Chapra, Saran, Bihar',
    district: 'Saran District',
    state: 'Bihar',
    title: 'Best Software Company in Chapra (Saran) | Argun Software Solutions',
    metaDesc: 'Looking for the best software company in Chapra, Saran? Argun Software Solutions builds custom business software, GST billing software, garage systems, and modern websites with on-ground support across Saran district.',
    keywords: 'best software company in chapra, software company in chapra, software company in saran bihar, website development chapra, billing software chapra, it solutions in chapra, argun software chapra',
    h1: 'Best Software Company in Chapra (Saran)',
    heroSub: 'Trusted software development company and IT partner for growing businesses in Chapra and Saran district. Custom billing systems, workshop software, loan management platforms, and commercial websites.',
    badge: '#1 Software Company in Chapra (Saran), Bihar',
    geo: { lat: 25.7811, lng: 84.7543 },
    commercialZones: 'Hathwa Market, Municipal Chowk, Dahiyawan, Garkha, Sonpur, Marhaura, and Ekma',
    industryFocus: 'Retail merchants, educational academies, automobile repair bodyshops, CA practices, and agricultural traders',
    localContext: 'From Hathwa Market to Municipal Chowk and Dahiyawan, businesses across Chapra rely on Argun Software Solutions for automated billing, accounting accuracy, and rapid localized technical assistance.'
  },
  {
    slug: 'software-company-in-motihari.html',
    name: 'Motihari',
    fullName: 'Motihari, East Champaran, Bihar',
    district: 'East Champaran',
    state: 'Bihar',
    title: 'Best Software Company in Motihari | Argun Software Solutions',
    metaDesc: 'Top-rated software company in Motihari, East Champaran. Argun Software Solutions provides GST billing software, loan systems, workshop management, and website development with on-site support in Motihari.',
    keywords: 'best software company in motihari, software company in motihari, website development motihari, billing software motihari, it company east champaran, software company near me motihari',
    h1: 'Best Software Company in Motihari',
    heroSub: 'Leading IT company in Motihari & East Champaran. We engineer custom enterprise software, GST billing tools, auto garage solutions, and high-converting business websites with dedicated local training.',
    badge: '#1 Software Company in Motihari, Bihar',
    geo: { lat: 26.6469, lng: 84.9089 },
    commercialZones: 'Main Road Motihari, Chhatauni, Balua Bazar, Raja Bazar, Raxaul trade corridor, and Dhaka',
    industryFocus: 'Cross-border commerce, agro-processing businesses, automobile workshops, and retail distribution networks',
    localContext: 'Serving commercial hubs across Main Road, Chhatauni, and the Indo-Nepal trade corridor at Raxaul, Argun Software delivers reliable, cloud-synchronized business software tailored for Champaran businesses.'
  },
  {
    slug: 'software-company-in-patna.html',
    name: 'Patna',
    fullName: 'Patna, Bihar',
    district: 'Patna District',
    state: 'Bihar',
    title: 'Best Software Company in Patna | Argun Software Solutions',
    metaDesc: 'Searching for a reliable software company in Patna, Bihar? Argun Software Solutions builds custom ERPs, GST billing software, NBFC loan systems, and enterprise web applications with dedicated business support in Patna.',
    keywords: 'best software company in patna, software company in patna, software development company in patna bihar, website development company patna, billing software patna, it company in patna, custom software patna',
    h1: 'Best Software Company in Patna',
    heroSub: 'Full-cycle custom software development, GST billing solutions, and modern digital engineering for enterprises, healthcare facilities, and fast-growing businesses in Patna and across Bihar.',
    badge: '#1 Software Company in Patna, Bihar',
    geo: { lat: 25.5941, lng: 85.1376 },
    commercialZones: 'Boring Road, Fraser Road, Kankarbagh, Bailey Road, Exhibition Road, Patliputra Colony, and Danapur',
    industryFocus: 'Corporate enterprises, NBFCs & lending institutions, super-specialty hospitals, Chartered Accountants, and wholesale trade hubs',
    localContext: 'From Boring Road and Bailey Road corporate centers to wholesale hubs across Patna, Argun Software provides robust, high-performance software systems backed by immediate response times and seamless onboarding.'
  },
  {
    slug: 'software-company-in-muzaffarpur.html',
    name: 'Muzaffarpur',
    fullName: 'Muzaffarpur, North Bihar',
    district: 'Muzaffarpur District',
    state: 'Bihar',
    title: 'Best Software Company in Muzaffarpur | Argun Software Solutions',
    metaDesc: 'Best software development company in Muzaffarpur, Bihar. Custom GST billing software for wholesale cloth & retail, garage management systems, lending software, and web development with on-site support.',
    keywords: 'best software company in muzaffarpur, software company in muzaffarpur, billing software muzaffarpur, website design in muzaffarpur, it company in muzaffarpur bihar, software solutions muzaffarpur',
    h1: 'Best Software Company in Muzaffarpur',
    heroSub: 'Premier software company and technology partner for North Bihar’s commercial capital. Specializing in high-speed billing software, wholesale inventory systems, and custom web development in Muzaffarpur.',
    badge: '#1 Software Company in Muzaffarpur, Bihar',
    geo: { lat: 26.1209, lng: 85.3647 },
    commercialZones: 'Motijheel, Sutapatti Wholesale Textile Market, Saraiyaganj, Kalyani Chowk, Gobarsahi, and Bela Industrial Area',
    industryFocus: 'Textile and cloth wholesale merchants, FMCG distribution, multi-brand auto garages, and healthcare polyclinics',
    localContext: 'For traders in Sutapatti and Motijheel, fast GST invoicing and accurate stock control are critical. Argun Software Solutions delivers automated billing, barcode tracking, and on-site training across Muzaffarpur.'
  },
  {
    slug: 'software-company-in-darbhanga.html',
    name: 'Darbhanga',
    fullName: 'Darbhanga, Mithila, Bihar',
    district: 'Darbhanga District',
    state: 'Bihar',
    title: 'Best Software Company in Darbhanga | Argun Software Solutions',
    metaDesc: 'Looking for a software development company in Darbhanga? Argun Software Solutions provides GST billing software, institutional management systems, garage software, and websites in Darbhanga.',
    keywords: 'best software company in darbhanga, software company in darbhanga, website development darbhanga, billing software darbhanga, it company in darbhanga, software development darbhanga bihar',
    h1: 'Best Software Company in Darbhanga',
    heroSub: 'Empowering institutions, medical establishments, and commercial merchants in Darbhanga and Mithilanchal with purpose-built software, GST billing systems, and cloud web platforms.',
    badge: '#1 Software Company in Darbhanga, Bihar',
    geo: { lat: 26.1542, lng: 85.8918 },
    commercialZones: 'Laheriasarai, Tower Chowk, Benta, Donar, Mirzapur, and Allpatti medical zone',
    industryFocus: 'Educational universities & coaching institutes, hospitals & diagnostics, retail traders, and cooperative lending groups',
    localContext: 'Whether operating near Tower Chowk or Laheriasarai, businesses in Darbhanga count on Argun Software Solutions for automated compliance, zero billing errors, and responsive customer care.'
  },
  {
    slug: 'software-company-in-bhagalpur.html',
    name: 'Bhagalpur',
    fullName: 'Bhagalpur (Silk City), Bihar',
    district: 'Bhagalpur District',
    state: 'Bihar',
    title: 'Best Software Company in Bhagalpur | Argun Software Solutions',
    metaDesc: 'Top software company in Bhagalpur, Bihar. Argun Software Solutions builds custom billing software, textile inventory systems, auto workshop tools, and commercial websites with on-ground support.',
    keywords: 'best software company in bhagalpur, software company in bhagalpur, website development in bhagalpur, billing software bhagalpur, it company bhagalpur bihar, software services bhagalpur',
    h1: 'Best Software Company in Bhagalpur',
    heroSub: 'Innovative software solutions and digital platforms for Bhagalpur’s manufacturing units, textile exporters, commercial retailers, and healthcare providers across Eastern Bihar.',
    badge: '#1 Software Company in Bhagalpur, Bihar',
    geo: { lat: 25.2425, lng: 86.9842 },
    commercialZones: 'Sujaganj, Aliganj, Tilkamanjhi, Zero Mile, Nathnagar silk clusters, and Barari',
    industryFocus: 'Silk weaving & textile export houses, wholesale traders, educational coaching centers, and automobile service workshops',
    localContext: 'From Nathnagar silk handloom hubs to Sujaganj wholesale markets, Argun Software Solutions empowers Bhagalpur businesses with streamlined digital operations and robust financial tracking.'
  },
  {
    slug: 'software-company-in-vaishali.html',
    name: 'Vaishali',
    fullName: 'Vaishali, Bihar',
    district: 'Vaishali District',
    state: 'Bihar',
    title: 'Best Software Company in Vaishali | Argun Software Solutions',
    metaDesc: 'Top software solutions in Vaishali, Bihar. Argun Software Solutions offers custom billing software, agricultural trade systems, garage software, and website design with local support across Vaishali.',
    keywords: 'best software company in vaishali, software company in vaishali, billing software vaishali, website design vaishali bihar, it services vaishali, software development vaishali',
    h1: 'Best Software Company in Vaishali',
    heroSub: 'Dependable software engineering and localized digital tools for retail shops, agro-industries, auto bodyshops, and lending societies operating across Vaishali district.',
    badge: '#1 Software Company in Vaishali, Bihar',
    geo: { lat: 25.9892, lng: 85.1275 },
    commercialZones: 'Lalganj, Mahua, Bhagwanpur, Vaishali Bazar, Jandaha, and Patepur',
    industryFocus: 'Agro-commodities trade, wholesale merchandise, transport fleet garages, and local credit societies',
    localContext: 'Supporting entrepreneurs in Lalganj, Mahua, and rural business hubs across Vaishali, Argun Software delivers offline-capable, easy-to-use business software with direct on-ground assistance.'
  },
  {
    slug: 'software-company-in-hajipur.html',
    name: 'Hajipur',
    fullName: 'Hajipur, Bihar',
    district: 'Hajipur / Vaishali',
    state: 'Bihar',
    title: 'Best Software Company in Hajipur | Argun Software Solutions',
    metaDesc: 'Best software company in Hajipur, Bihar. Argun Software Solutions develops industrial inventory software, GST billing systems, auto workshop management, and high-performance business websites.',
    keywords: 'best software company in hajipur, software company in hajipur, website development in hajipur, billing software hajipur bihar, it company hajipur, industrial software hajipur',
    h1: 'Best Software Company in Hajipur',
    heroSub: 'Industrial-grade software development, automated billing, and high-conversion websites for Hajipur’s manufacturing plants, logistics hubs, and retail enterprises.',
    badge: '#1 Software Company in Hajipur, Bihar',
    geo: { lat: 25.6858, lng: 85.2146 },
    commercialZones: 'Paswan Chowk, Industrial Area Hajipur, Cinema Road, Anjanpir Chowk, Konhara Ghat, and Bagmali',
    industryFocus: 'Manufacturing units, food processing plants, supply chain logistics, auto repair facilities, and medical clinics',
    localContext: 'Hajipur’s strategic industrial corridor demands speed and precision. Argun Software Solutions provides real-time inventory management, barcode scanning, and multi-user billing tailored for Hajipur industries.'
  },
  {
    slug: 'software-company-in-ara.html',
    name: 'Ara (Bhojpur)',
    shortName: 'Ara',
    fullName: 'Ara, Bhojpur, Bihar',
    district: 'Bhojpur District',
    state: 'Bihar',
    title: 'Best Software Company in Ara (Bhojpur) | Argun Software Solutions',
    metaDesc: 'Top software company in Ara, Bhojpur, Bihar. Argun Software Solutions offers GST billing software, garage management systems, loan systems, and website development in Ara.',
    keywords: 'best software company in ara, software company in ara bihar, software company in bhojpur, website development in ara, billing software ara, it company in ara bhojpur',
    h1: 'Best Software Company in Ara (Bhojpur)',
    heroSub: 'Delivering modern business software, automated GST invoicing, auto garage systems, and custom web design for enterprises and institutions across Ara and Bhojpur district.',
    badge: '#1 Software Company in Ara (Bhojpur), Bihar',
    geo: { lat: 25.5560, lng: 84.6603 },
    commercialZones: 'Gopaali Chowk, Shivala Road, Nawada, Arrah Junction commercial market, Dharhara, and Jagdishpur',
    industryFocus: 'Grain and agricultural trade, coaching academies, automobile repair bodyshops, and retail establishments',
    localContext: 'Whether operating near Gopaali Chowk or Shivala Road, businesses in Ara rely on Argun Software Solutions for paperless operations, tax compliance, and dependable local support.'
  },
  {
    slug: 'software-company-in-buxar.html',
    name: 'Buxar',
    fullName: 'Buxar, Bihar',
    district: 'Buxar District',
    state: 'Bihar',
    title: 'Best Software Company in Buxar | Argun Software Solutions',
    metaDesc: 'Best software development company in Buxar, Bihar. Argun Software Solutions builds GST billing systems, garage management software, loan systems, and websites with dedicated on-site support in Buxar.',
    keywords: 'best software company in buxar, software company in buxar, billing software buxar, website development in buxar, it services buxar bihar, software company near me buxar',
    h1: 'Best Software Company in Buxar',
    heroSub: 'Smart business automation, custom billing systems, and modern digital presence for trading businesses, garages, and finance companies across Buxar district.',
    badge: '#1 Software Company in Buxar, Bihar',
    geo: { lat: 25.5647, lng: 83.9777 },
    commercialZones: 'Main Market Buxar, Station Road, Piprahi, Dumraon, Itarhi, and Chausa',
    industryFocus: 'Border corridor commerce, building materials & hardware stores, auto service centers, and agricultural traders',
    localContext: 'From Buxar Main Market to Dumraon, Argun Software Solutions helps retailers, workshop mechanics, and lenders eliminate calculation errors and manage customer balances with ease.'
  },
  {
    slug: 'software-company-in-bettiah.html',
    name: 'Bettiah',
    fullName: 'Bettiah, West Champaran, Bihar',
    district: 'West Champaran',
    state: 'Bihar',
    title: 'Best Software Company in Bettiah | Argun Software Solutions',
    metaDesc: 'Top software company in Bettiah, West Champaran. Argun Software Solutions provides GST billing software, auto workshop systems, loan management, and web development in Bettiah.',
    keywords: 'best software company in bettiah, software company in bettiah, website development in bettiah, billing software bettiah, it company west champaran, software company near me bettiah',
    h1: 'Best Software Company in Bettiah',
    heroSub: 'High-performance software systems and website development for commercial enterprises, workshops, and retailers across Bettiah and West Champaran.',
    badge: '#1 Software Company in Bettiah, Bihar',
    geo: { lat: 26.8025, lng: 84.5029 },
    commercialZones: 'Lal Bazar, Supriya Cinema Road, Station Road, Narkatiaganj, Bagaha, and Chanpatia startup zone',
    industryFocus: 'Timber & hardware merchants, agro-processing units, multi-brand automobile workshops, and retail stores',
    localContext: 'Serving commercial hubs from Lal Bazar to Supriya Road, Argun Software Solutions equips Bettiah business owners with modern digital tools and direct, localized technical support.'
  },
  {
    slug: 'software-company-in-samastipur.html',
    name: 'Samastipur',
    fullName: 'Samastipur, Bihar',
    district: 'Samastipur District',
    state: 'Bihar',
    title: 'Best Software Company in Samastipur | Argun Software Solutions',
    metaDesc: 'Leading software company in Samastipur, Bihar. Argun Software Solutions delivers custom billing software, garage management systems, loan tracking, and web development with on-site support in Samastipur.',
    keywords: 'best software company in samastipur, software company in samastipur, website development samastipur, billing software samastipur, it company samastipur bihar, software services samastipur',
    h1: 'Best Software Company in Samastipur',
    heroSub: 'Accelerating business efficiency with automated billing software, workshop systems, lending management, and commercial websites across Samastipur district.',
    badge: '#1 Software Company in Samastipur, Bihar',
    geo: { lat: 25.8629, lng: 85.7811 },
    commercialZones: 'Gudari Bazar, Magardahi Ghat, Mohanpur Road, Kashipur, Rosera, and Dalsinghsarai',
    industryFocus: 'Railway transit trading, agricultural distribution, medical polyclinics, and retail stores',
    localContext: 'Entrepreneurs around Gudari Bazar and Mohanpur Road count on Argun Software Solutions for GST billing speed, barcode generation, and hassle-free daily accounting.'
  },
  {
    slug: 'software-company-in-sitamarhi.html',
    name: 'Sitamarhi',
    fullName: 'Sitamarhi, Bihar',
    district: 'Sitamarhi District',
    state: 'Bihar',
    title: 'Best Software Company in Sitamarhi | Argun Software Solutions',
    metaDesc: 'Best software development company in Sitamarhi, Bihar. Argun Software Solutions offers GST billing software, auto workshop software, loan management systems, and websites in Sitamarhi.',
    keywords: 'best software company in sitamarhi, software company in sitamarhi, website development in sitamarhi, billing software sitamarhi, it company sitamarhi bihar, software company near me sitamarhi',
    h1: 'Best Software Company in Sitamarhi',
    heroSub: 'Custom software engineering, automated GST billing tools, auto garage solutions, and high-impact websites built for businesses in Sitamarhi and surrounding border regions.',
    badge: '#1 Software Company in Sitamarhi, Bihar',
    geo: { lat: 26.5936, lng: 85.4894 },
    commercialZones: 'Mehsol Chowk, Main Road Sitamarhi, Dumra administrative hub, Bairgania border market, Sursand, and Pupri',
    industryFocus: 'Cross-border merchandise trade, automobile repair garages, kirana wholesale distribution, and local financial institutions',
    localContext: 'From Mehsol Chowk to Dumra and Bairgania, Argun Software Solutions provides robust software designed to work seamlessly even with intermittent internet connectivity.'
  },
  {
    slug: 'software-company-in-gorakhpur.html',
    name: 'Gorakhpur (UP)',
    shortName: 'Gorakhpur',
    fullName: 'Gorakhpur, Uttar Pradesh',
    district: 'Gorakhpur District',
    state: 'Uttar Pradesh',
    title: 'Best Software Company in Gorakhpur | Argun Software Solutions',
    metaDesc: 'Looking for the best software company in Gorakhpur? Argun Software Solutions builds custom hospital platforms, GST billing software, auto garage management systems, and enterprise web applications in Gorakhpur.',
    keywords: 'best software company in gorakhpur, software company in gorakhpur, website development company in gorakhpur, billing software gorakhpur, hospital software gorakhpur, it company in gorakhpur up, software company near me gorakhpur',
    h1: 'Best Software Company in Gorakhpur',
    heroSub: 'Premier software company and technology agency serving Eastern Uttar Pradesh. We engineer specialized hospital web platforms, GST billing software, auto bodyshop systems, and custom web applications in Gorakhpur.',
    badge: '#1 Software Company in Gorakhpur, UP',
    geo: { lat: 26.7606, lng: 83.3732 },
    commercialZones: 'Golghar, Medical College Road, Bank Road, Asuran Chowk, GIDA Industrial Area, Mohaddipur, and Rustampur',
    industryFocus: 'Super-specialty medical centers, commercial wholesale traders, automobile dealerships & bodyshops, and coaching academies',
    localContext: 'As Eastern UP’s primary healthcare and commercial capital, Gorakhpur demands enterprise-grade technology. Argun Software Solutions has delivered live web platforms for premier medical centers in Gorakhpur, combining modern design with targeted regional SEO.'
  }
];

function generateCityHTML(city) {
  const shortCity = city.shortName || city.name;
  
  // Filter other cities for regional navigation
  const otherCities = cities.filter(c => c.slug !== city.slug);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>${city.title}</title>
  <meta name="title" content="${city.title}">
  <meta name="description" content="${city.metaDesc}">
  <meta name="keywords" content="${city.keywords}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="https://argunsoftware.com/${city.slug}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://argunsoftware.com/${city.slug}">
  <meta property="og:title" content="${city.title}">
  <meta property="og:description" content="${city.metaDesc}">
  <meta property="og:image" content="https://argunsoftware.com/argunlogo.jpeg">
  <meta property="og:site_name" content="Argun Software Solutions">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://argunsoftware.com/${city.slug}">
  <meta name="twitter:title" content="${city.title}">
  <meta name="twitter:description" content="${city.metaDesc}">
  <meta name="twitter:image" content="https://argunsoftware.com/argunlogo.jpeg">

  <!-- Google Font: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#0B1F44">
  
  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles.css?v=2.1">

  <!-- Organization & Local Business Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Argun Software Solutions - ${shortCity}",
    "alternateName": ["Argun Software ${shortCity}", "Best Software Company in ${shortCity}", "Software Solutions ${shortCity}"],
    "url": "https://argunsoftware.com/${city.slug}",
    "logo": "https://argunsoftware.com/argunlogo.jpeg",
    "image": "https://argunsoftware.com/argunlogo.jpeg",
    "description": "${city.metaDesc}",
    "telephone": "+91-7091276451",
    "email": "argunsoftwaresolution@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${shortCity}",
      "addressRegion": "${city.state}",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ${city.geo.lat},
      "longitude": ${city.geo.lng}
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "${shortCity}"
      },
      {
        "@type": "AdministrativeArea",
        "name": "${city.state}"
      }
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://youtube.com/@argunsoftware?si=oOKnpo4390Ulo7r4",
      "https://www.instagram.com/argunsoftware?igsh=Z3NxMG5yejR0YmR3"
    ]
  }
  </script>

  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://argunsoftware.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Software Company in ${shortCity}",
        "item": "https://argunsoftware.com/${city.slug}"
      }
    ]
  }
  </script>

  <!-- FAQ Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best software company in ${shortCity}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Argun Software Solutions is widely recognized as the leading software development company and IT partner serving ${city.fullName}. Argun Software builds custom business software, GST billing systems, auto garage software, loan management platforms, and commercial websites with personalized on-site installation and staff training in ${shortCity}."
        }
      },
      {
        "@type": "Question",
        "name": "Does Argun Software provide on-site support and training in ${shortCity}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Argun Software Solutions provides direct on-site software installation, staff training, and continuous technical support for businesses across ${city.commercialZones} and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "What software products does Argun Software offer in ${shortCity}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Argun Software Solutions offers four specialized products: Argun Billing Software for retail & wholesale stores, Argun Garage Management Software for auto workshops and insurance bodyshops, Argun Loan Management System for lenders and micro-finance societies, and Argun CA Firm Management System for Chartered Accountants, along with custom website development."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a free software demo in ${shortCity}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a free demo by calling or messaging our direct support line at +91 70912 76451. Our technical engineers will arrange an in-person walkthrough at your business in ${shortCity} or a screen-share session."
        }
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Header / Navigation -->
  <header class="site-header" id="site-header">
    <div class="container header-container">
      
      <!-- Brand Logo -->
      <a href="index.html" class="logo-link">
        <div class="logo-mark">
          <img src="argunlogo.jpeg" alt="Argun Logo" class="logo-img">
        </div>
        <div class="logo-text">
          <span class="logo-title">ARGUN</span>
          <span class="logo-subtitle">Software Solutions</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <a href="index.html#home">Home</a>
        <a href="index.html#products">Products</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#portfolio">Portfolio</a>
        <a href="index.html#reviews">Reviews</a>
        <a href="#local-features">Why In ${shortCity}</a>
        <a href="#faq">FAQ</a>
      </nav>

      <!-- CTA Button -->
      <div class="header-action">
        <a href="#contact" class="btn btn-primary btn-sm">Get Free Demo</a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <a href="index.html#home" class="mobile-nav-link">Home</a>
      <a href="index.html#products" class="mobile-nav-link">Products</a>
      <a href="index.html#services" class="mobile-nav-link">Services</a>
      <a href="index.html#portfolio" class="mobile-nav-link">Portfolio</a>
      <a href="index.html#reviews" class="mobile-nav-link">Reviews</a>
      <a href="#local-features" class="mobile-nav-link">Why In ${shortCity}</a>
      <a href="#faq" class="mobile-nav-link">FAQ</a>
      <a href="#contact" class="mobile-nav-link">Contact</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section" id="home">
    <div class="container hero-container">
      <div class="hero-badge">
        <span class="hero-badge-dot"></span> ${city.badge}
      </div>
      <h1 class="hero-headline">${city.h1}</h1>
      <p class="hero-subheadline">${city.heroSub}</p>
      <div class="hero-cta-wrapper">
        <a href="#products" class="btn btn-primary">Explore Software Products</a>
        <a href="tel:7091276451" class="btn btn-outline" style="margin-left: 0.75rem;">Call: +91 70912 76451</a>
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="stats-bar-section">
    <div class="container">
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Businesses Automated</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4</div>
          <div class="stat-label">Flagship Software Products</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">${shortCity}</div>
          <div class="stat-label">On-Site Support & Training</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">GST</div>
          <div class="stat-label">100% Tax Compliant</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Localized Context Section -->
  <section class="section section-about" id="local-features" style="background-color: var(--color-white); border-bottom: 1px solid var(--color-border);">
    <div class="container container-narrow">
      <h2 class="section-title">Software Development &amp; IT Solutions in ${city.fullName}</h2>
      <p class="about-text" style="font-size: 1.05rem; line-height: 1.75; color: var(--color-charcoal); margin-bottom: 1.25rem;">
        <strong>Argun Software Solutions</strong> provides high-performance custom business software, digital automation, and commercial web development tailored for business owners across <strong>${city.fullName}</strong>. We help local enterprises eliminate manual registers, prevent stock loss, generate GST-compliant invoices, and scale operations smoothly.
      </p>
      <p class="about-subtext" style="font-size: 0.9375rem; line-height: 1.65; color: var(--color-muted);">
        ${city.localContext}
      </p>

      <div style="margin-top: 2rem; background: var(--color-bg-offwhite); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--color-border);">
        <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.75rem;">Key Business Areas We Cover in ${shortCity}:</h3>
        <p style="font-size: 0.875rem; color: var(--color-charcoal); line-height: 1.6; margin-bottom: 0.75rem;">
          📍 <strong>Commercial Hubs:</strong> ${city.commercialZones}.
        </p>
        <p style="font-size: 0.875rem; color: var(--color-charcoal); line-height: 1.6;">
          🏢 <strong>Target Sectors:</strong> ${city.industryFocus}.
        </p>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <section class="section section-products" id="products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Software Products for ${shortCity} Businesses</h2>
        <p class="section-desc">Purpose-built software applications designed to solve real operational bottlenecks.</p>
      </div>

      <div class="grid grid-2">
        
        <!-- Product 1: Billing Software -->
        <div class="card product-card flex flex-col justify-between">
          <div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
                <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"></path>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="8" y1="10" x2="16" y2="10"></line>
                <line x1="8" y1="14" x2="12" y2="14"></line>
              </svg>
            </div>
            <h3 class="card-title">Argun Billing Software</h3>
            <p class="card-desc">Fast GST invoicing, inventory management, customer khata, and GSTR filing reports built for retailers and wholesalers in ${shortCity}.</p>
            <ul class="bullet-list">
              <li>Barcode Scanning &amp; Instant Thermal Printing</li>
              <li>Batch &amp; Expiry Stock Management</li>
              <li>Customer Udhar / Khata Tracking with WhatsApp Alerts</li>
              <li>CA-Friendly GSTR-1 &amp; GSTR-3B Reports</li>
            </ul>
          </div>
          <div class="card-action pt-4 border-t border-slate-100" style="margin-top: 1.5rem;">
            <a href="billing-software.html" class="product-page-link">Explore Billing Software →</a>
          </div>
        </div>

        <!-- Product 2: Garage Management -->
        <div class="card product-card flex flex-col justify-between">
          <div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 class="card-title">Argun Garage Management Software</h3>
            <p class="card-desc">End-to-end software for automobile workshops and insurance bodyshops across ${shortCity}. Digital job cards to cashless insurance billing.</p>
            <ul class="bullet-list">
              <li>Digital Vehicle Inward Job Cards</li>
              <li>Spare Parts Inventory with Minimum Stock Alerts</li>
              <li>Insurer Pre-Invoicing &amp; Cashless Claim Workflow</li>
              <li>Automated Repair Status SMS &amp; WhatsApp</li>
            </ul>
          </div>
          <div class="card-action pt-4 border-t border-slate-100" style="margin-top: 1.5rem;">
            <a href="garage-management-software.html" class="product-page-link">Explore Garage Software →</a>
          </div>
        </div>

        <!-- Product 3: Loan Management -->
        <div class="card product-card flex flex-col justify-between">
          <div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
                <line x1="3" y1="21" x2="21" y2="21"></line>
                <line x1="6" y1="18" x2="6" y2="11"></line>
                <line x1="10" y1="18" x2="10" y2="11"></line>
                <line x1="14" y1="18" x2="14" y2="11"></line>
                <line x1="18" y1="18" x2="18" y2="11"></line>
                <polygon points="12 2 20 7 4 7 12 2"></polygon>
              </svg>
            </div>
            <h3 class="card-title">Argun Loan Management System</h3>
            <p class="card-desc">Complete borrower management, daily collection tracking, and interest calculation software for lenders and NBFCs in ${shortCity}.</p>
            <ul class="bullet-list">
              <li>Borrower KYC &amp; Documentation Archive</li>
              <li>Daily / Weekly / Monthly EMI Schedules</li>
              <li>Automated Payment Reminders &amp; Overdue Logs</li>
              <li>Collector Route &amp; Cash Settlement Reports</li>
            </ul>
          </div>
          <div class="card-action pt-4 border-t border-slate-100" style="margin-top: 1.5rem;">
            <a href="loan-management-system.html" class="product-page-link">Explore Loan System →</a>
          </div>
        </div>

        <!-- Product 4: CA Firm Management -->
        <div class="card product-card flex flex-col justify-between">
          <div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="m9 15 2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="card-title">Argun CA Firm Management System</h3>
            <p class="card-desc">Task assignments, client audit documents, billing, and tax compliance calendar for Chartered Accountants and tax consultants in ${shortCity}.</p>
            <ul class="bullet-list">
              <li>Client Master &amp; Direct WhatsApp Document Collection</li>
              <li>Article Clerk Work Allocation &amp; Time Tracking</li>
              <li>Compliance Due Date Notifications</li>
              <li>Integrated Fee Invoicing &amp; Payment Ledger</li>
            </ul>
          </div>
          <div class="card-action pt-4 border-t border-slate-100" style="margin-top: 1.5rem;">
            <a href="ca-firm-management-system.html" class="product-page-link">Explore CA Software →</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section section-services" id="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">IT Services &amp; Web Development in ${shortCity}</h2>
        <p class="section-desc">Custom web engineering, high-ranking Google SEO, and cloud infrastructure.</p>
      </div>

      <div class="grid grid-3">
        <div class="card service-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Custom Web Development</h3>
          <p class="service-tagline">High-speed websites for hospitals, schools, and brands.</p>
        </div>

        <div class="card service-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 class="service-title">Local SEO &amp; Google Map Ranking</h3>
          <p class="service-tagline">Rank on Google search and Maps in ${shortCity}.</p>
        </div>

        <div class="card service-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.75" fill="none">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <h3 class="service-title">Mobile App Development</h3>
          <p class="service-tagline">Android &amp; iOS mobile apps for field staff and customers.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Cities We Serve Navigation -->
  <section class="section section-cities" id="cities" style="background-color: var(--color-bg-offwhite);">
    <div class="container container-narrow">
      <h2 class="section-title">Explore Our Services Across Bihar &amp; UP</h2>
      <p class="cities-intro">Argun Software Solutions delivers automated business tools, on-ground installation, and localized support across key regional centers.</p>
      <div class="cities-grid">
        <a href="index.html" class="city-chip">Gopalganj (HQ)</a>
        ${otherCities.map(c => `<a href="${c.slug}" class="city-chip">${c.name}</a>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- Local FAQ Section -->
  <section class="section section-faq" id="faq">
    <div class="container container-narrow">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions — ${shortCity}</h2>
        <p class="section-desc">Common questions from business owners in ${city.fullName}.</p>
      </div>

      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            Which is the best software company in ${shortCity}?
            <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-answer"><strong>Argun Software Solutions</strong> is the premier software company serving ${city.fullName}. We engineer custom business applications, fast GST billing software, auto workshop management tools, and modern websites with direct on-site support and staff training in ${shortCity}.</div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            How do we receive software installation and training in ${shortCity}?
            <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-answer">Our technical deployment team provides direct in-person installation, barcode configuration, printer setup, and hands-on staff training at your business premises in ${city.commercialZones}. Ongoing support is provided via phone, screen share, and direct WhatsApp.</div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            Does your billing and garage software work offline?
            <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-answer">Yes. Core counter operations such as printing GST bills, creating repair job cards, and checking stock work completely offline. Data syncs automatically whenever an internet connection is established, ensuring uninterrupted business operations.</div>
        </div>

        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            How can I schedule a live software demonstration?
            <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="faq-answer">You can book a free, no-obligation demo by calling our direct helpline at <strong>+91 70912 76451</strong> or sending a message on WhatsApp. We can schedule an on-site visit in ${shortCity} or an interactive live video demonstration.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section section-contact" id="contact">
    <div class="container">
      <div class="grid grid-contact">
        
        <!-- Contact Information -->
        <div class="contact-info">
          <h2 class="section-title">Connect with Our ${shortCity} Team</h2>
          <p class="section-desc">Get in touch to discuss your software requirements, request an on-site demo, or get a quotation.</p>

          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">Direct Helpline / WhatsApp</span>
              <a href="tel:7091276451" class="contact-value-phone">+91 70912 76451</a>
            </div>

            <div class="contact-item">
              <span class="contact-label">Email Address</span>
              <a href="mailto:argunsoftwaresolution@gmail.com" class="contact-value-address" style="color: #1E63D6; font-weight: 600;">argunsoftwaresolution@gmail.com</a>
            </div>

            <div class="contact-item">
              <span class="contact-label">Regional Service Coverage</span>
              <p class="contact-value-address">
                ${city.commercialZones}, ${city.fullName}
              </p>
            </div>

            <div class="contact-item pt-1">
              <a href="https://wa.me/917091276451?text=Hi%20Argun%20Software,%20I%20am%20from%20${encodeURIComponent(shortCity)}%20and%20would%20like%20to%20inquire%20about%20your%20software%20solutions." 
                 target="_blank" rel="noopener noreferrer" class="whatsapp-link">
                Chat directly on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-card">
          <div id="form-feedback" class="form-feedback hidden">
            <h3 class="feedback-title">Thank You</h3>
            <p class="feedback-desc">Your message has been received. Our ${shortCity} client specialist will contact you shortly.</p>
            <button id="reset-form-btn" class="btn-text">Send another message</button>
          </div>

          <form id="contact-form" class="contact-form" action="#" method="POST">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" class="form-input" placeholder="e.g. Rahul Kumar" required>
            </div>

            <div class="form-group">
              <label for="business-name" class="form-label">Business / Shop Name</label>
              <input type="text" id="business-name" class="form-input" placeholder="e.g. ${shortCity} Traders" required>
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Mobile Number</label>
              <input type="tel" id="phone" class="form-input" placeholder="e.g. 9876543210" required>
            </div>

            <div class="form-group">
              <label for="product-interest" class="form-label">Product / Service Required</label>
              <select id="product-interest" class="form-input" style="background-color: var(--color-white);" required>
                <option value="">Select a Product or Service</option>
                <option value="billing">Argun Billing Software (GST Invoicing &amp; Stock)</option>
                <option value="garage">Argun Garage Management Software (Auto Bodyshop)</option>
                <option value="loan">Argun Loan Management System (Lending &amp; Micro-finance)</option>
                <option value="ca">Argun CA Firm Management System</option>
                <option value="website">Custom Website Design &amp; Local SEO in ${shortCity}</option>
                <option value="custom">Custom Enterprise Software / Mobile App</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message / Details</label>
              <textarea id="message" rows="3" class="form-textarea" placeholder="Describe your software needs in ${shortCity}..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full">Request Free Demo in ${shortCity}</button>
          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        
        <div class="footer-brand">
          <div class="logo-link flex items-center">
            <div class="logo-mark">
              <img src="argunlogo.jpeg" alt="Argun Logo" class="logo-img">
            </div>
            <div class="logo-text">
              <span class="logo-title text-white">ARGUN</span>
              <span class="logo-subtitle text-slate">Software Solutions</span>
            </div>
          </div>
          <p class="footer-desc">
            Argun Software Solutions builds custom billing, loan management, garage management, and enterprise software for businesses in ${shortCity} and across Bihar &amp; UP.
          </p>
        </div>

        <div class="footer-nav">
          <div class="footer-heading">Software Products</div>
          <a href="billing-software.html">GST Billing Software</a>
          <a href="garage-management-software.html">Garage Management Software</a>
          <a href="loan-management-system.html">Loan Management System</a>
          <a href="ca-firm-management-system.html">CA Firm Management System</a>
        </div>

        <div class="footer-contact">
          <div class="footer-heading">Contact &amp; Social</div>
          <p>Phone: <a href="tel:7091276451">+91 70912 76451</a></p>
          <p>Email: <a href="mailto:argunsoftwaresolution@gmail.com">argunsoftwaresolution@gmail.com</a></p>
          <p>HQ Address: Rajhwahi Colony, Gopalganj, Bihar – 841428</p>
          <div class="footer-social-links">
            <a href="https://youtube.com/@argunsoftware?si=oOKnpo4390Ulo7r4" target="_blank" rel="noopener noreferrer" class="social-icon-btn youtube" aria-label="YouTube Channel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/argunsoftware?igsh=Z3NxMG5yejR0YmR3" target="_blank" rel="noopener noreferrer" class="social-icon-btn instagram" aria-label="Instagram Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <div>© 2026 Argun Software Solutions. All rights reserved.</div>
        <div>Best Software Company in ${city.fullName}</div>
      </div>
    </div>
  </footer>

  <!-- Floating Quick Action Buttons: Direct Call & WhatsApp -->
  <div class="argun-floating-container" id="quick-contact" style="position: fixed; bottom: 24px; right: 24px; z-index: 999999; display: flex; flex-direction: column; gap: 12px; align-items: center;">
    <!-- Direct Call Button -->
    <a href="tel:7091276451" class="argun-float-btn argun-float-call" aria-label="Call +91 70912 76451" title="Call: +91 70912 76451" style="display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 50%; background: #1E63D6; box-shadow: 0 4px 16px rgba(30, 99, 214, 0.45); text-decoration: none;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>

    <!-- Direct WhatsApp Button -->
    <a href="https://wa.me/917091276451?text=Hi%20Argun%20Software,%20I%20am%20from%20${encodeURIComponent(shortCity)}%20and%20would%20like%20to%20inquire%20about%20your%20software%20solutions." 
       target="_blank" rel="noopener noreferrer" class="argun-float-btn argun-float-wa" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" style="display: flex; align-items: center; justify-content: center; width: 58px; height: 58px; border-radius: 50%; background: #25D366; box-shadow: 0 4px 18px rgba(37, 211, 102, 0.45); text-decoration: none;">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  </div>

  <!-- Scripts -->
  <script src="script.js"></script>
</body>
</html>
`;
}

function run() {
  console.log(`Generating ${cities.length} city landing pages for Programmatic Local SEO...`);
  
  for (const city of cities) {
    const html = generateCityHTML(city);
    const filePath = path.join(rootDir, city.slug);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Generated ${city.slug}`);
  }
  
  console.log('All 15 city pages successfully generated!');
}

run();
