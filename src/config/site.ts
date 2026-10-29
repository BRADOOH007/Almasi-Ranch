export const site = {
  name: 'Almasi Ranch',
  tagline: 'Farming for the Future',
  location: 'Nanyuki, Kenya',
  phoneDisplay: '+254 755 681 929',
  phoneHref: 'tel:+254755681929',
  whatsapp: '254755681929',
  email: '',
  hours: 'Monday to Saturday, 8am to 5pm',
};

export const whatsappLink = (message = `Hello ${site.name}, I would like to make an enquiry.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export interface Product {
  slug: string;
  name: string;
  category: 'Dairy Cattle' | 'Goats' | 'Sheep' | 'Poultry' | 'Dairy Products' | 'Farm Inputs' | 'Horses';
  blurb: string;
  care: string;
  from: number;
  to?: number;
  unit: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: 'friesian-cow',
    name: 'Friesian Cow',
    category: 'Dairy Cattle',
    blurb: 'Premium dairy breed, high milk yield, vaccinated and health-certified.',
    care: 'Health records provided. Visit the farm before you buy.',
    from: 45000,
    unit: 'per head',
    image: '/githaka/friesian-cow.jpg',
  },
  {
    slug: 'jersey-cow',
    name: 'Jersey Cow',
    category: 'Dairy Cattle',
    blurb: 'Rich butterfat milk, hardy and adaptable to highland conditions.',
    care: 'Health records provided. Visit the farm before you buy.',
    from: 55000,
    unit: 'per head',
    image: '/githaka/jersey-cow.jpg',
  },
  {
    slug: 'ayrshire-cow',
    name: 'Ayrshire Cow',
    category: 'Dairy Cattle',
    blurb: 'Balanced dairy breed, excellent for both milk and grazing.',
    care: 'Health records provided. Visit the farm before you buy.',
    from: 50000,
    unit: 'per head',
    image: '/githaka/ayrshire-cow.jpg',
  },
  {
    slug: 'fleckvieh-dairy-cows',
    name: 'Fleckvieh Dairy Cows',
    category: 'Dairy Cattle',
    blurb: 'High-quality Fleckvieh dairy cows. A dual-purpose breed known for excellent milk production, strong fertility and a long productive life.',
    care: 'Strong fertility with shorter calving intervals, and easy calving with minimal complications.',
    from: 180000,
    unit: 'per head',
    image: '/assets/product-dairy-cows.jpg',
  },
  {
    slug: 'sahiwal-cows',
    name: 'Sahiwal Cows',
    category: 'Dairy Cattle',
    blurb: 'Healthy Sahiwal cows. All livestock records are provided immediately after purchase, and they suit both dairy production and breeding.',
    care: 'Every animal comes with its health and breeding records. You are welcome to visit the farm before you buy.',
    from: 80000,
    to: 150000,
    unit: 'per head',
    image: '/assets/product-heifers.jpg',
  },
  {
    slug: 'in-calf-heifers',
    name: 'In-Calf Heifers',
    category: 'Dairy Cattle',
    blurb: 'Young females near their first calving, ready to join a growing herd.',
    care: 'Confirmed in calf. Breeding and calving details shared before sale.',
    from: 80000,
    to: 120000,
    unit: 'per head',
    image: '/assets/product-heifers.jpg',
  },
  {
    slug: 'horses',
    name: 'Horses',
    category: 'Horses',
    blurb: 'Riding and working horses, schooled and settled, sold after a full veterinary check and a ridden trial at the farm.',
    care: 'Asking prices start at KSh 250,000 and rise with breed, age, height and level of training.',
    from: 250000,
    unit: 'per head',
    image: '/assets/product-horses.jpg',
  },
  {
    slug: 'arabian-stallion',
    name: 'Arabian Stallion',
    category: 'Horses',
    blurb: 'Strong bloodline, exceptional endurance and temperament.',
    care: 'Full pedigree and health records provided.',
    from: 150000,
    unit: 'per head',
    image: '/githaka/arabian-stallion.jpg',
  },
  {
    slug: 'boer-goat',
    name: 'Boer Goat',
    category: 'Goats',
    blurb: 'Premium meat breed, fast growing and disease resistant.',
    care: 'Vaccinated and health-certified.',
    from: 12000,
    unit: 'per head',
    image: '/githaka/boer-goat.jpg',
  },
  {
    slug: 'full-blood-boer-goat-does',
    name: 'Full Blood Boer Goat Does',
    category: 'Goats',
    blurb: 'Full blood Boer goat females with excellent meat production and strong growth rates, available in several age categories.',
    care: 'Kids up to five months from KSh 5,500; young goats at nine months from KSh 10,000.',
    from: 5500,
    to: 13000,
    unit: 'per head',
    image: '/assets/product-german-alpine.jpg',
  },
  {
    slug: 'dairy-goats',
    name: 'Dairy Goats',
    category: 'Goats',
    blurb: 'Dairy-bred does with good milk yield and a calm, easy-to-handle temperament.',
    care: 'Dewormed and vaccinated before collection. Kids and young does available at several ages.',
    from: 13500,
    to: 18000,
    unit: 'per head',
    image: '/assets/product-german-alpine.jpg',
  },
  {
    slug: 'goat-kids',
    name: 'Goat Kids',
    category: 'Goats',
    blurb: 'Weaned kids from quality dairy lines, raised on balanced feed.',
    care: 'Dewormed and vaccinated before collection.',
    from: 3500,
    to: 8000,
    unit: 'per kid',
    image: '/assets/product-german-alpine.jpg',
  },
  {
    slug: 'dorper-sheep',
    name: 'Dorper Sheep',
    category: 'Sheep',
    blurb: 'Excellent meat breed, low maintenance and hardy.',
    care: 'Five months from KSh 5,500; seven months from KSh 8,000.',
    from: 5500,
    to: 13500,
    unit: 'per head',
    image: '/githaka/dorper-sheep.jpg',
  },
  {
    slug: 'layer-hens',
    name: 'Commercial Layer Hens (Vaccinated)',
    category: 'Poultry',
    blurb: 'Pure commercial layer hens, healthy, pre-debeaked and fully vaccinated. Breeds include Sasso, Kuroiler, Kari, Kenbro and Rainbow, with day-old and growing chicks also available.',
    care: 'Vaccinated and pre-debeaked. Egg production runs from four and a half months up to three years.',
    from: 500,
    unit: 'per bird',
    image: '/assets/product-poultry.jpg',
  },
  {
    slug: 'day-old-chicks',
    name: 'Day-Old & Growing Chicks',
    category: 'Poultry',
    blurb: 'Vaccinated day-old and growing chicks from healthy parent flocks.',
    care: 'Day-old chicks from KSh 60 each and growing pullets to order, collected in ventilated crates with a brooding guide.',
    from: 60,
    unit: 'per chick',
    image: '/assets/product-chicks.jpg',
  },
  {
    slug: 'broiler-chicks',
    name: 'Broiler Chicks',
    category: 'Poultry',
    blurb: 'Day-old Cobb 500 chicks, strong and fast growing.',
    care: 'Vaccinated. Available in batches.',
    from: 200,
    unit: 'per chick',
    image: '/githaka/broiler-chicks.jpg',
  },
  {
    slug: 'fresh-milk',
    name: 'Fresh Milk (Daily Supply)',
    category: 'Dairy Products',
    blurb: 'Pasteurised, chilled whole milk from our own herd, bottled at the farm and delivered while it is still fresh.',
    care: 'Daily and weekly standing orders accepted. Chilled delivery within Nanyuki the same day.',
    from: 60,
    unit: 'per litre',
    image: '/assets/service-milk-processing.jpg',
  },
  {
    slug: 'natural-yoghurt',
    name: 'Natural Yoghurt',
    category: 'Dairy Products',
    blurb: 'Thick, live natural yoghurt cultured from our own milk, with no preservatives and nothing added that we did not make ourselves.',
    care: 'Sold in 500 ml and 1 litre tubs and kept cold. Best within two weeks of delivery.',
    from: 400,
    unit: 'per litre',
    image: '/assets/product-yoghurt.jpg',
  },
  {
    slug: 'farm-butter',
    name: 'Artisan Butter',
    category: 'Dairy Products',
    blurb: 'Churned in small batches from fresh cream off our own herd. Pure, salted or unsalted, with nothing else in it.',
    care: 'Sold in 250 g and 500 g packs. Keeps a month refrigerated, or three months frozen.',
    from: 900,
    unit: 'per kg',
    image: '/assets/product-butter.jpg',
  },
  {
    slug: 'composted-manure',
    name: 'Composted Manure',
    category: 'Farm Inputs',
    blurb: 'Well-decomposed goat and cow manure, ideal for soil fertility, crop yield and organic farming.',
    care: 'Bulk deliveries by the tonne. Ask for a quote for your location.',
    from: 12000,
    to: 18000,
    unit: 'per tonne',
    image: '/assets/product-manure.jpg',
  },
  {
    slug: 'boma-rhodes-hay',
    name: 'Boma Rhodes Hay',
    category: 'Farm Inputs',
    blurb: 'Premium hay bales, ideal for dairy and beef cattle.',
    care: 'Sold per bale. Ask for bulk pricing.',
    from: 350,
    unit: 'per bale',
    image: '/githaka/boma-rhodes-hay.jpg',
  },
];

export const productCategories = ['All', 'Dairy Cattle', 'Goats', 'Sheep', 'Poultry', 'Dairy Products', 'Farm Inputs', 'Horses'] as const;

export const services = [
  {
    name: 'Livestock Sales',
    blurb: 'Animals selected to match your herd goals, with records shared before you buy.',
    price: 'Quoted per animal',
  },
  {
    name: 'Farm Visits',
    blurb: 'Walk the herd and facilities with our team, and see the animals before you commit.',
    price: 'From KSh 5,000 per visit',
  },
  {
    name: 'We Visit Your Farm',
    blurb: 'We come to you: a herd, housing and feeding assessment, breeding and record-keeping advice, and a written plan to take away.',
    price: 'From KSh 8,000 per visit',
  },
  {
    name: 'Delivery & Transport',
    blurb: 'Careful transport with rest stops and bedding, arranged anywhere in Kenya.',
    price: 'Quoted per trip',
  },
  {
    name: 'Farm Advisory',
    blurb: 'Feeding, housing and herd health guidance from people who work with livestock every day.',
    price: 'From KSh 5,000 per visit',
  },
  {
    name: 'Veterinary & Health Checks',
    blurb: 'All animals vaccinated and dewormed. Full health records provided. On-call vet support for new buyers.',
    price: 'Quoted per animal',
  },
  {
    name: 'Seeds & Farm Inputs',
    blurb: 'Hybrid maize seeds, tomato seeds, Boma Rhodes hay and Lucerne bales available for farm use.',
    price: 'From KSh 350 per bale',
  },
];

export const faqs = [
  {
    q: 'Where is the ranch?',
    a: 'Almasi Ranch is based in Nanyuki. Visits are by appointment, so please call or WhatsApp us first.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes. We arrange delivery across Kenya. The cost depends on distance and the type of animal, and we quote it before you confirm.',
  },
  {
    q: 'Are your animals vaccinated?',
    a: 'Yes. Every animal is vaccinated and checked before it leaves the ranch, and its records travel with it.',
  },
  {
    q: 'How do I place an order?',
    a: 'Choose a product, tap Enquire, and send us your details on WhatsApp. We will confirm availability and the final price.',
  },
  {
    q: 'Can I visit the farm?',
    a: 'Yes. Farm visits are by appointment, booked at least 3 days in advance. A visit fee of KSh 5,000 per person applies.',
  },
];

export const hero = {
  eyebrow: 'Nanyuki · Livestock · Dairy',
  heading: 'Healthy herds. Careful farming.',
  subheading:
    'Almasi Ranch raises dairy cattle, goats and sheep with close attention to health, feed and welfare, and supplies fresh dairy from our own herd.',
};
