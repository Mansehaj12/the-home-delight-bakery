/**
 * Centralized Hamper Catalogue Data for The Home Delight Bakery
 * 
 * INSTRUCTIONS FOR UPDATING:
 * - When you receive new photographs, place them in `/public/images/` and update the `image` path below.
 * - Set `isConfirmed: true` once you have confirmed the exact hamper name, contents, and weight.
 * - Update `includedItems`, `weight`, and `description` with the verified contents.
 * - Internal development notes in `_devNotes` are strictly for maintainers and NEVER shown to public visitors.
 */

export const HAMPERS = [
  {
    id: "khoya-barfi",
    name: "Homemade Desi Ghee Khoya Barfi",
    price: 400,
    priceFormatted: "₹400 / ₹800",
    priceRange: "under-500", // also accessible in 500-1000 via variant
    image: "/images/khoya_barfi.png", // Easily update image filename here
    alt: "Homemade Desi Ghee Khoya Barfi in festive purple (500g) and red (1kg) gift boxes",
    tag: "Bakery Signature • Pure Desi Ghee",
    shortDescription: "Handcrafted traditional khoya barfi cooked in pure desi ghee, garnished with premium almonds and pistachios. 100% eggless.",
    isConfirmed: true,
    _devNotes: "CONFIRMED: Matched to official promotional poster khoya_barfi.png. Purple box is 500g (₹400), Red box is 1kg (₹800).",
    weight: "500 g or 1 kg",
    variants: [
      {
        id: "500g-purple",
        label: "500 g (Half Kg) — Festive Purple Box",
        weight: "500 g (Half Kg)",
        boxColor: "Purple Festive Box",
        price: 400
      },
      {
        id: "1kg-red",
        label: "1 kg — Royal Red Festive Box",
        weight: "1 kg",
        boxColor: "Royal Red Festive Box",
        price: 800
      }
    ],
    includedItems: [
      "Pure Desi Ghee Khoya Barfi prepared fresh from scratch",
      "Garnished with slivered almonds and pistachios",
      "Half Kg in festive Purple Box (₹400) or 1 Kg in Royal Red Box (₹800)",
      "Traditional Happy Diwali presentation packaging"
    ],
    customizationAvailable: true,
    customizationNote: "Festive greeting card tag and box choice customizable."
  },
  {
    id: "hamper-200",
    name: "Premium Chocolate Box — ₹200",
    price: 200,
    priceFormatted: "₹200",
    priceRange: "under-500",
    image: "/images/choco_box.png", // Easily update image filename here
    alt: "Premium Chocolate Box ₹200 from The Home Delight Bakery",
    tag: "Festive Chocolates • 100% Eggless",
    shortDescription: "Delightful assortment of handcrafted flavoured chocolates and cake pop in a festive Happy Diwali gift box.",
    isConfirmed: true,
    _devNotes: "CONFIRMED: Matched to official promotional poster choco_box.png (top box, ₹200). 3x3 grid box.",
    weight: "Festive Assorted Box",
    includedItems: [
      "2 × Orange Chocolate",
      "2 × Ras Malai Chocolate",
      "2 × Strawberry Chocolate",
      "2 × Pistachio Chocolate",
      "1 × Vanilla Cake Pop (Center treat)",
      "Decorative Happy Diwali presentation box"
    ],
    customizationAvailable: true,
    customizationNote: "Personalized Diwali message tag available upon request."
  },
  {
    id: "hamper-350",
    name: "Premium Chocolate Box — ₹350",
    price: 350,
    priceFormatted: "₹350",
    priceRange: "under-500",
    image: "/images/choco_box.png", // Easily update image filename here
    alt: "Premium Chocolate Box ₹350 (16 Pieces) from The Home Delight Bakery",
    tag: "16 Pieces • 100% Eggless",
    shortDescription: "A rich assortment of 16 handcrafted flavoured chocolates made from scratch in a celebratory Happy Diwali gift box.",
    isConfirmed: true,
    _devNotes: "CONFIRMED: Matched to official promotional poster choco_box.png (bottom box, ₹350). 4x4 grid (16 pcs).",
    weight: "16 Pieces in Festive Box",
    includedItems: [
      "4 × Ras Malai Chocolate",
      "4 × Strawberry Chocolate",
      "4 × Orange Chocolate",
      "4 × Pistachio Chocolate",
      "Decorative Happy Diwali 16-compartment gift box"
    ],
    customizationAvailable: true,
    customizationNote: "Custom festive greetings and corporate gifting tags available."
  },
  {
    id: "hamper-650",
    name: "Diwali Hamper — ₹650",
    price: 650,
    priceFormatted: "₹650",
    priceRange: "500-1000",
    image: "/images/hamper-placeholder-amber.svg",
    alt: "Diwali Hamper ₹650 from The Home Delight Bakery",
    tag: "Diwali Special Hamper",
    shortDescription: "Handcrafted festive hamper with assorted 100% eggless treats, made from scratch.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹650). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-700",
    name: "Diwali Hamper — ₹700",
    price: 700,
    priceFormatted: "₹700",
    priceRange: "500-1000",
    image: "/images/hamper-placeholder-purple.svg",
    alt: "Diwali Hamper ₹700 from The Home Delight Bakery",
    tag: "Festive Celebration Box",
    shortDescription: "A celebration of flavours with handcrafted festive delights, packaged for gifting.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹700). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-750",
    name: "Diwali Hamper — ₹750",
    price: 750,
    priceFormatted: "₹750",
    priceRange: "500-1000",
    image: "/images/hamper-placeholder-gold.svg",
    alt: "Diwali Hamper ₹750 from The Home Delight Bakery",
    tag: "Diwali Gift Hamper",
    shortDescription: "Curated with love for festive celebrations, filled with fresh home-baked treats.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹750). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1000",
    name: "Diwali Hamper — ₹1,000",
    price: 1000,
    priceFormatted: "₹1,000",
    priceRange: "500-1000",
    image: "/images/hamper-placeholder-maroon.svg",
    alt: "Diwali Hamper ₹1,000 from The Home Delight Bakery",
    tag: "Premium Diwali Hamper",
    shortDescription: "An exquisite festive hamper prepared from scratch for family, friends, and special clients.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,000). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1300",
    name: "Diwali Hamper — ₹1,300",
    price: 1300,
    priceFormatted: "₹1,300",
    priceRange: "1000-1500",
    image: "/images/hamper-placeholder-amber.svg",
    alt: "Diwali Hamper ₹1,300 from The Home Delight Bakery",
    tag: "Festive Royal Hamper",
    shortDescription: "Thoughtfully assembled festive box featuring our finest eggless home-baked creations.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,300). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1350",
    name: "Diwali Hamper — ₹1,350",
    price: 1350,
    priceFormatted: "₹1,350",
    priceRange: "1000-1500",
    image: "/images/hamper-placeholder-purple.svg",
    alt: "Diwali Hamper ₹1,350 from The Home Delight Bakery",
    tag: "Festive Grandeur Box",
    shortDescription: "Grand celebration gift hamper packed with wholesome, 100% eggless handcrafted treats.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,350). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1400",
    name: "Diwali Hamper — ₹1,400",
    price: 1400,
    priceFormatted: "₹1,400",
    priceRange: "1000-1500",
    image: "/images/hamper-placeholder-gold.svg",
    alt: "Diwali Hamper ₹1,400 from The Home Delight Bakery",
    tag: "Deluxe Diwali Hamper",
    shortDescription: "Handcrafted festive hamper with rich seasonal treats, perfect for corporate and family gifting.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,400). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1500",
    name: "Diwali Hamper — ₹1,500",
    price: 1500,
    priceFormatted: "₹1,500",
    priceRange: "1000-1500",
    image: "/images/hamper-placeholder-maroon.svg",
    alt: "Diwali Hamper ₹1,500 from The Home Delight Bakery",
    tag: "Celebration Treasure Box",
    shortDescription: "Luxurious festive hamper loaded with artisanal home-baked delights made from scratch.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,500). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1700",
    name: "Diwali Hamper — ₹1,700",
    price: 1700,
    priceFormatted: "₹1,700",
    priceRange: "above-1500",
    image: "/images/hamper-placeholder-amber.svg",
    alt: "Diwali Hamper ₹1,700 from The Home Delight Bakery",
    tag: "Imperial Diwali Hamper",
    shortDescription: "Curated grand gift collection featuring our signature festive treats in premium packaging.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,700). Awaiting photo and exact box contents.",
    customizationAvailable: true
  },
  {
    id: "hamper-1800",
    name: "Diwali Hamper — ₹1,800",
    price: 1800,
    priceFormatted: "₹1,800",
    priceRange: "above-1500",
    image: "/images/hamper-placeholder-purple.svg",
    alt: "Diwali Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Ultimate Celebration Hamper",
    shortDescription: "The pinnacle of our Diwali gifting range — rich, generous, and completely eggless.",
    isConfirmed: false,
    _devNotes: "AWAITING CONFIRMATION: Price observed from bakery reference sheet (₹1,800). Awaiting photo and exact box contents.",
    customizationAvailable: true
  }
];

export const FILTER_CATEGORIES = [
  { id: "all", label: "All Hampers" },
  { id: "under-500", label: "Under ₹500" },
  { id: "500-1000", label: "₹500 – ₹1,000" },
  { id: "1000-1500", label: "₹1,000 – ₹1,500" },
  { id: "above-1500", label: "Above ₹1,500" }
];
