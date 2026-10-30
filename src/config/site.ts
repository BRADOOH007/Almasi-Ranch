export const site = {
  name: 'Almasi Ranch',
  domain: 'https://almasiranchofficial.com',
  tagline: 'Farming for the Future',
  location: 'Nanyuki, Kenya',
  phoneDisplay: '0784 160 221',
  phoneHref: 'tel:+254784160221',
  whatsapp: '254784160221',
  email: 'info@almasiranch.co.ke',
  hours: 'Monday to Saturday, 8am to 5pm',
  facebook: 'https://www.facebook.com/p/Almasi-Ranch-61583051263903',
  instagram: '',
};

export const whatsappLink = (message = `Hello ${site.name}, I would like to make an enquiry.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
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
  { slug: 'friesian-cow', name: 'Friesian Cow', category: 'Dairy Cattle', blurb: 'High-yielding Friesian (Holstein) dairy cows, known for excellent milk production, strong fertility and a long productive life.', care: 'Strong fertility with shorter calving intervals, and easy calving with minimal complications.', from: 180000, unit: 'per head', image: '/products/friesian-cow.jpg' },
  { slug: 'jersey-cow', name: 'Jersey Cow', category: 'Dairy Cattle', blurb: 'Rich butterfat milk, hardy and adaptable to highland conditions.', care: 'Health records provided. Visit the farm before you buy.', from: 55000, unit: 'per head', image: '/products/jersey-cow.jpg' },
  { slug: 'ayrshire-cow', name: 'Ayrshire Cow', category: 'Dairy Cattle', blurb: 'Balanced dairy breed, excellent for both milk and grazing.', care: 'Health records provided. Visit the farm before you buy.', from: 50000, unit: 'per head', image: '/products/ayrshire-cow.jpg' },
  { slug: 'sahiwal-cows', name: 'Sahiwal Cows', category: 'Dairy Cattle', blurb: 'Healthy Sahiwal cows. All livestock records are provided immediately after purchase, and they suit both dairy production and breeding.', care: 'Every animal comes with its health and breeding records. You are welcome to visit the farm before you buy.', from: 80000, to: 150000, unit: 'per head', image: '/products/sahiwal-cows.jpg' },
  { slug: 'in-calf-heifers', name: 'In-Calf Heifers', category: 'Dairy Cattle', blurb: 'Young females near their first calving, ready to join a growing herd.', care: 'Confirmed in calf. Breeding and calving details shared before sale.', from: 80000, to: 120000, unit: 'per head', image: '/assets/product-heifers.jpg' },
  { slug: 'horses', name: 'Horses', category: 'Horses', blurb: 'Riding and working horses, schooled and settled, sold after a full veterinary check and a ridden trial at the farm.', care: 'Asking prices start at KSh 250,000 and rise with breed, age, height and level of training.', from: 250000, unit: 'per head', image: '/assets/product-horses.jpg' },
  { slug: 'arabian-stallion', name: 'Arabian Stallion', category: 'Horses', blurb: 'Strong bloodline, exceptional endurance and temperament.', care: 'Full pedigree and health records provided.', from: 150000, unit: 'per head', image: '/githaka/arabian-stallion.jpg' },
  { slug: 'boer-goat', name: 'Boer Goat', category: 'Goats', blurb: 'Premium meat breed, fast growing and disease resistant.', care: 'Vaccinated and health-certified.', from: 12000, unit: 'per head', image: '/githaka/boer-goat.jpg' },
  { slug: 'full-blood-boer-goat-does', name: 'Full Blood Boer Goat Does', category: 'Goats', blurb: 'Full blood Boer goat females with excellent meat production and strong growth rates, available in several age categories.', care: 'Kids up to five months from KSh 5,500; young goats at nine months from KSh 10,000.', from: 5500, to: 13000, unit: 'per head', image: '/products/full-blood-boer-goat-does.jpg' },
  { slug: 'dairy-goats', name: 'Dairy Goats', category: 'Goats', blurb: 'Dairy-bred does with good milk yield and a calm, easy-to-handle temperament.', care: 'Dewormed and vaccinated before collection. Kids and young does available at several ages.', from: 13500, to: 18000, unit: 'per head', image: '/products/dairy-goats.jpg' },
  { slug: 'goat-kids', name: 'Goat Kids', category: 'Goats', blurb: 'Weaned kids from quality dairy lines, raised on balanced feed.', care: 'Dewormed and vaccinated before collection.', from: 3500, to: 8000, unit: 'per kid', image: '/products/goat-kids.jpg' },
  { slug: 'dorper-sheep', name: 'Dorper Sheep', category: 'Sheep', blurb: 'Excellent meat breed, low maintenance and hardy.', care: 'Five months from KSh 5,500; seven months from KSh 8,000.', from: 5500, to: 13500, unit: 'per head', image: '/githaka/dorper-sheep.jpg' },
  { slug: 'layer-hens', name: 'Commercial Layer Hens (Vaccinated)', category: 'Poultry', blurb: 'Pure commercial layer hens, healthy, pre-debeaked and fully vaccinated. Breeds include Sasso, Kuroiler, Kari, Kenbro and Rainbow, with day-old and growing chicks also available.', care: 'Vaccinated and pre-debeaked. Egg production runs from four and a half months up to three years.', from: 500, unit: 'per bird', image: '/products/layer-hens.jpg' },
  { slug: 'day-old-chicks', name: 'Day-Old & Growing Chicks', category: 'Poultry', blurb: 'Vaccinated day-old and growing chicks from healthy parent flocks.', care: 'Day-old chicks from KSh 60 each and growing pullets to order, collected in ventilated crates with a brooding guide.', from: 60, unit: 'per chick', image: '/assets/product-chicks.jpg' },
  { slug: 'broiler-chicks', name: 'Broiler Chicks', category: 'Poultry', blurb: 'Day-old Cobb 500 chicks, strong and fast growing.', care: 'Vaccinated. Available in batches.', from: 200, unit: 'per chick', image: '/products/broiler-chicks.jpg' },
  { slug: 'fresh-milk', name: 'Fresh Milk (Daily Supply)', category: 'Dairy Products', blurb: 'Pasteurised, chilled whole milk from our own herd, bottled at the farm and delivered while it is still fresh.', care: 'Daily and weekly standing orders accepted. Chilled delivery within Nanyuki the same day.', from: 60, unit: 'per litre', image: '/githaka/githaka-10.jpg' },
  { slug: 'natural-yoghurt', name: 'Natural Yoghurt', category: 'Dairy Products', blurb: 'Thick, live natural yoghurt cultured from our own milk, with no preservatives and nothing added that we did not make ourselves.', care: 'Sold in 500 ml and 1 litre tubs and kept cold. Best within two weeks of delivery.', from: 400, unit: 'per litre', image: '/assets/product-yoghurt.jpg' },
  { slug: 'farm-butter', name: 'Artisan Butter', category: 'Dairy Products', blurb: 'Churned in small batches from fresh cream off our own herd. Pure, salted or unsalted, with nothing else in it.', care: 'Sold in 250 g and 500 g packs. Keeps a month refrigerated, or three months frozen.', from: 900, unit: 'per kg', image: '/assets/product-butter.jpg' },
  { slug: 'composted-manure', name: 'Composted Manure', category: 'Farm Inputs', blurb: 'Well-decomposed goat and cow manure, ideal for soil fertility, crop yield and organic farming.', care: 'Bulk deliveries by the tonne. Ask for a quote for your location.', from: 12000, to: 18000, unit: 'per tonne', image: '/assets/product-manure.jpg' },
  { slug: 'boma-rhodes-hay', name: 'Boma Rhodes Hay', category: 'Farm Inputs', blurb: 'Premium hay bales, ideal for dairy and beef cattle.', care: 'Sold per bale. Ask for bulk pricing.', from: 350, unit: 'per bale', image: '/products/boma-rhodes-hay.jpg' },
];

export const productCategories = ['All', 'Dairy Cattle', 'Goats', 'Sheep', 'Poultry', 'Dairy Products', 'Farm Inputs', 'Horses'] as const;

export const services = [
  { name: 'Livestock Sales', blurb: 'Animals selected to match your herd goals, with records shared before you buy.', price: 'Quoted per animal' },
  { name: 'Farm Visits', blurb: 'Walk the herd and facilities with our team, and see the animals before you commit.', price: 'From KSh 5,000 per visit' },
  { name: 'We Visit Your Farm', blurb: 'We come to you: a herd, housing and feeding assessment, breeding and record-keeping advice, and a written plan to take away.', price: 'From KSh 8,000 per visit' },
  { name: 'Delivery & Transport', blurb: 'Careful transport with rest stops and bedding, arranged anywhere in Kenya.', price: 'Quoted per trip' },
  { name: 'Farm Advisory', blurb: 'Feeding, housing and herd health guidance from people who work with livestock every day.', price: 'From KSh 5,000 per visit' },
  { name: 'Veterinary & Health Checks', blurb: 'All animals vaccinated and dewormed. Full health records provided. On-call vet support for new buyers.', price: 'Quoted per animal' },
  { name: 'Seeds & Farm Inputs', blurb: 'Hybrid maize seeds, tomato seeds, Boma Rhodes hay and Lucerne bales available for farm use.', price: 'From KSh 350 per bale' },
];

export const faqs = [
  { q: 'Where is the ranch?', a: 'Almasi Ranch is based in Nanyuki. Visits are by appointment, so please call or WhatsApp us first.' },
  { q: 'Do you deliver?', a: 'Yes. We arrange delivery across Kenya. The cost depends on distance and the type of animal, and we quote it before you confirm.' },
  { q: 'Are your animals vaccinated?', a: 'Yes. Every animal is vaccinated and checked before it leaves the ranch, and its records travel with it.' },
  { q: 'How do I place an order?', a: 'Choose a product, tap Enquire, and send us your details on WhatsApp. We will confirm availability and the final price.' },
  { q: 'Can I visit the farm?', a: 'Yes. Farm visits are by appointment, booked at least 3 days in advance. A visit fee of KSh 5,000 per person applies.' },
];

export const hero = {
  eyebrow: 'Nanyuki · Livestock · Dairy',
  heading: 'Healthy herds. Careful farming.',
  subheading: 'Almasi Ranch raises dairy cattle, goats and sheep with close attention to health, feed and welfare, and supplies fresh dairy from our own herd.',
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  { slug: 'girolando-heifers-now-available', title: 'Premium Girolando Heifers Now Available', date: '2026-10-15', category: 'Stock Arrival', excerpt: 'We have a fresh batch of Girolando heifers ready for collection. Quality breeding stock for dairy farmers looking to upgrade their herd.', image: '/assets/product-heifers.jpg', author: 'Almasi Ranch Team' },
  { slug: 'feeding-troughs-for-your-farm', title: 'Make Feeding Time Easier with Quality Feeding Troughs', date: '2026-10-08', category: 'Farm Tips', excerpt: 'Invest in better feeding today for a cleaner farm and smarter livestock management. Our feeding troughs reduce waste and make daily management easier.', image: '/githaka/githaka-4.jpg', author: 'Almasi Ranch Team' },
  { slug: 'farm-visit-experience', title: 'What to Expect on a Farm Visit', date: '2026-09-28', category: 'Farm News', excerpt: 'Walk among our animals, see our facilities and choose your livestock in person. An experience unlike any other. Book at least 3 days in advance.', image: '/githaka/herd.jpg', author: 'Almasi Ranch Team' },
  { slug: 'dairy-goat-breeding-tips', title: 'Dairy Goat Breeding: Tips for Higher Milk Yield', date: '2026-09-15', category: 'Farming Tips', excerpt: 'Learn how to maximize milk production from your dairy goats with proper feeding, housing, and breeding strategies.', image: '/products/dairy-goats.jpg', author: 'Almasi Ranch Team' },
  { slug: 'vaccination-importance', title: 'Why Vaccination Matters for Your Livestock', date: '2026-09-01', category: 'Health & Care', excerpt: 'Every animal on our ranch is vaccinated and health-checked before sale. Learn why this matters for your farm.', image: '/githaka/pasture.jpg', author: 'Almasi Ranch Team' },
];

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: 'James Whitfield', location: 'Nanyuki', text: 'Excellent quality animals. The Friesian heifer I purchased is producing well above expectations. The team was professional and transparent throughout.' },
  { name: 'Sarah Mitchell', location: 'Nakuru', text: 'Bought Boer goats for breeding. Healthy stock, great after-sale support on WhatsApp. Would recommend to any farmer.' },
  { name: 'David Thompson', location: 'Nairobi', text: 'The farm visit was an amazing experience. Got to see the animals up close, select my preferred stock, and received expert advice. Worth every shilling.' },
  { name: 'Emily Richardson', location: 'Eldoret', text: 'Fresh milk delivery is reliable and the quality is outstanding. The yoghurt is the best I have tasted in Kenya.' },
  { name: 'Michael Anderson', location: 'Laikipia', text: 'Purchased Dorper sheep and they have adapted perfectly. The team guided me on feeding and housing. Great service.' },
  { name: 'Jessica Parker', location: 'Meru', text: 'The feeding troughs are well-made and durable. Reduced feed waste significantly. Fast delivery to Meru.' },
  { name: 'Robert Clarke', location: 'Nyeri', text: 'Bought a Jersey cow for my dairy. Milk production exceeded expectations. The team followed up to ensure she settled in well.' },
  { name: 'Catherine Wilson', location: 'Thika', text: 'Ordered day-old chicks and they arrived healthy and strong. The brooding guide was very helpful. Zero mortality in the first week.' },
  { name: 'Thomas Brown', location: 'Kitale', text: 'The composted manure transformed my maize farm. Delivery was prompt and the quality was excellent. Will order again.' },
  { name: 'Margaret Taylor', location: 'Naivasha', text: 'Farm visit was incredible. Got to see the herd, select my animals, and received expert advice. The team is knowledgeable and friendly.' },
  { name: 'William Harris', location: 'Mombasa', text: 'Purchased an Arabian stallion. The bloodline is exceptional and the animal was in superb condition. Delivery to Mombasa was handled professionally.' },
  { name: 'Jennifer Davis', location: 'Kisumu', text: 'The fresh milk and yoghurt are top quality. Consistent delivery and fair pricing. Highly recommend Almasi Ranch dairy products.' },
  { name: 'Kipchoge Rotich', location: 'Kericho', text: 'Excellent Boer goats. Fast growth rate and good temperament. The team provided detailed care guides.' },
  { name: 'Wanjiku Muthoni', location: 'Nyeri', text: 'Bought a Sahiwal heifer and she is producing 15 litres daily. Great genetics and health records included.' },
  { name: 'Otieno Odhiambo', location: 'Kisumu', text: 'The Dorper sheep are thriving in our climate. Low maintenance and excellent meat quality. Very satisfied.' },
  { name: 'Akinyi Ouma', location: 'Siaya', text: 'Ordered composted manure for my vegetable farm. The quality is outstanding and delivery was prompt.' },
  { name: 'Mwangi Kamau', location: 'Murang\'a', text: 'Purchased day-old chicks and broiler chicks. Zero mortality. The team advised on ventilation and bio-security.' },
  { name: 'Njeri Wambui', location: 'Kiambu', text: 'The artisan butter is delicious. My family loves it. Consistent quality and fair pricing.' },
  { name: 'Kariuki Njoroge', location: 'Nakuru', text: 'Bought an Arabian stallion for breeding. Exceptional bloodline and temperament. Professional delivery to Nakuru.' },
  { name: 'Wambui Gathoni', location: 'Thika', text: 'Fresh milk delivery is reliable. The yoghurt is the best I have tasted. Highly recommend Almasi Ranch.' },
  { name: 'Ochieng Otieno', location: 'Homa Bay', text: 'The Boer goats are healthy and growing fast. Great after-sale support on WhatsApp. Will buy again.' },
  { name: 'Chebet Kiprotich', location: 'Uasin Gishu', text: 'Dorper sheep adapted perfectly to our climate. Low maintenance and excellent meat quality. Very satisfied with the purchase.' },
];

// ─── Toast Notifications ────────────────────────────────────────────────────
export interface ToastEntry {
  name: string;
  product: string;
}

export const toastEntries: ToastEntry[] = [
  { name: 'Michael', product: 'Farm Produce' },
  { name: 'Rebecca', product: 'Sahiwal Cows' },
  { name: 'Kamau', product: 'Boer Goats' },
  { name: 'Sarah', product: 'Fresh Milk' },
  { name: 'John', product: 'Dorper Sheep' },
  { name: 'Grace', product: 'Layer Hens' },
  { name: 'David', product: 'Composted Manure' },
  { name: 'Mary', product: 'Natural Yoghurt' },
  { name: 'Peter', product: 'Boma Rhodes Hay' },
  { name: 'Faith', product: 'Artisan Butter' },
  { name: 'Daniel', product: 'Day-Old Chicks' },
  { name: 'Lucy', product: 'Goat Kids' },
  { name: 'James', product: 'Friesian Cow' },
  { name: 'Anne', product: 'Jersey Cow' },
  { name: 'Robert', product: 'Arabian Stallion' },
  { name: 'Catherine', product: 'Broiler Chicks' },
  { name: 'Thomas', product: 'In-Calf Heifers' },
  { name: 'Margaret', product: 'Ayrshire Cow' },
  { name: 'William', product: 'Horses' },
  { name: 'Jennifer', product: 'Fresh Milk' },
  { name: 'Kipchoge', product: 'Dairy Goats' },
  { name: 'Wanjiku', product: 'Farm Produce' },
  { name: 'Otieno', product: 'Composted Manure' },
  { name: 'Akinyi', product: 'Natural Yoghurt' },
  { name: 'Mwangi', product: 'Boma Rhodes Hay' },
  { name: 'Njeri', product: 'Layer Hens' },
  { name: 'Kariuki', product: 'Sahiwal Cows' },
  { name: 'Wambui', product: 'Artisan Butter' },
  { name: 'Ochieng', product: 'Boer Goats' },
  { name: 'Chebet', product: 'Dorper Sheep' },
  { name: 'Sarah', product: 'Fresh Milk' },
  { name: 'James', product: 'Friesian Cow' },
  { name: 'Grace', product: 'Layer Hens' },
  { name: 'David', product: 'Composted Manure' },
  { name: 'Peter', product: 'Boma Rhodes Hay' },
  { name: 'Faith', product: 'Artisan Butter' },
  { name: 'Daniel', product: 'Day-Old Chicks' },
  { name: 'Lucy', product: 'Goat Kids' },
  { name: 'Anne', product: 'Jersey Cow' },
  { name: 'Robert', product: 'Arabian Stallion' },
  { name: 'Catherine', product: 'Broiler Chicks' },
  { name: 'Thomas', product: 'In-Calf Heifers' },
  { name: 'Margaret', product: 'Ayrshire Cow' },
  { name: 'William', product: 'Horses' },
  { name: 'Jennifer', product: 'Fresh Milk' },
  { name: 'Kipchoge', product: 'Dairy Goats' },
  { name: 'Wanjiku', product: 'Farm Produce' },
  { name: 'Otieno', product: 'Composted Manure' },
  { name: 'Akinyi', product: 'Natural Yoghurt' },
  { name: 'Mwangi', product: 'Boma Rhodes Hay' },
  { name: 'Njeri', product: 'Layer Hens' },
  { name: 'Kariuki', product: 'Sahiwal Cows' },
  { name: 'Wambui', product: 'Artisan Butter' },
  { name: 'Ochieng', product: 'Boer Goats' },
  { name: 'Chebet', product: 'Dorper Sheep' },
  { name: 'Michael', product: 'Farm Produce' },
  { name: 'Rebecca', product: 'Sahiwal Cows' },
  { name: 'Kamau', product: 'Boer Goats' },
  { name: 'Sarah', product: 'Fresh Milk' },
  { name: 'John', product: 'Dorper Sheep' },
  { name: 'Grace', product: 'Layer Hens' },
  { name: 'David', product: 'Composted Manure' },
  { name: 'Mary', product: 'Natural Yoghurt' },
  { name: 'Peter', product: 'Boma Rhodes Hay' },
  { name: 'Faith', product: 'Artisan Butter' },
  { name: 'Daniel', product: 'Day-Old Chicks' },
  { name: 'Lucy', product: 'Goat Kids' },
  { name: 'James', product: 'Friesian Cow' },
  { name: 'Anne', product: 'Jersey Cow' },
  { name: 'Robert', product: 'Arabian Stallion' },
  { name: 'Catherine', product: 'Broiler Chicks' },
  { name: 'Thomas', product: 'In-Calf Heifers' },
  { name: 'Margaret', product: 'Ayrshire Cow' },
  { name: 'William', product: 'Horses' },
  { name: 'Jennifer', product: 'Fresh Milk' },
];

export const footerPolicies = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export const socialLinks = [
  { label: 'Facebook', href: site.facebook, icon: '' },
];
