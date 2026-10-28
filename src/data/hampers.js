/**
 * Centralized Hamper Catalogue Data for The Home Delight Bakery
 * Extracted directly from official bakery promotional photographs.
 * 
 * Every hamper features 100% eggless, scratch-made treats with verified prices and contents.
 */

export const HAMPERS = [
  {
    id: "khoya-barfi",
    name: "Homemade Desi Ghee Khoya Barfi",
    price: 400,
    priceFormatted: "₹400 / ₹800",
    priceRange: "under-500", // also accessible in 500-1000 via 1kg variant
    image: "/images/khoya_barfi.png",
    alt: "Homemade Desi Ghee Khoya Barfi in festive purple (500g) and red (1kg) gift boxes",
    tag: "Bakery Signature • Pure Desi Ghee",
    shortDescription: "Handcrafted traditional khoya barfi cooked in pure desi ghee, garnished with premium almonds and pistachios. 100% eggless.",
    isConfirmed: true,
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
      "Traditional Happy Diwali festive presentation packaging"
    ],
    customizationAvailable: true,
    customizationNote: "Festive greeting card tag and box choice customizable."
  },
  {
    id: "choco-box-200",
    name: "Handcrafted Flavoured Chocolate Box — ₹200",
    price: 200,
    priceFormatted: "₹200",
    priceRange: "under-500",
    image: "/images/choco_box.png",
    alt: "Handcrafted Flavoured Chocolate Box ₹200 from The Home Delight Bakery",
    tag: "Festive Assortment • 100% Eggless",
    shortDescription: "A delightful assortment of handcrafted flavoured chocolates and cake pop in a festive Happy Diwali gift box.",
    isConfirmed: true,
    weight: "Festive Box (Assorted Flavours)",
    includedItems: [
      "2 × Orange Chocolate",
      "2 × Ras Malai Chocolate",
      "2 × Strawberry Chocolate",
      "2 × Pistachio Chocolate",
      "1 × Vanilla Cake Pop (Center piece)",
      "Decorative Happy Diwali presentation box"
    ],
    customizationAvailable: true,
    customizationNote: "Personalized Diwali message tag available upon request."
  },
  {
    id: "choco-box-350",
    name: "Luxury Flavoured Chocolate Box — ₹350",
    price: 350,
    priceFormatted: "₹350",
    priceRange: "under-500",
    image: "/images/choco_box.png",
    alt: "Luxury Flavoured Chocolate Box ₹350 (16 Pieces) from The Home Delight Bakery",
    tag: "16 Pieces • 100% Eggless",
    shortDescription: "A rich assortment of 16 handcrafted flavoured chocolates made from scratch in a celebratory Happy Diwali gift box.",
    isConfirmed: true,
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
    id: "cake-pops-box",
    name: "Festive Vanilla Cake Pops Box",
    price: 200,
    priceFormatted: "₹200 / ₹350",
    priceRange: "under-500",
    image: "/images/cake_pops_box.jpeg",
    alt: "Festive Vanilla Cake Pops Box from The Home Delight Bakery",
    tag: "Bestseller • 100% Eggless",
    shortDescription: "Our bestselling handcrafted chocolate-dipped vanilla cake pops finished with golden festive brushstrokes.",
    isConfirmed: true,
    weight: "9 or 16 Pieces",
    variants: [
      {
        id: "9-pops-blue",
        label: "9 Vanilla Cake Pops — Blue Ribbon Box",
        weight: "9 Pieces",
        price: 200
      },
      {
        id: "16-pops-pink",
        label: "16 Vanilla Cake Pops — Pink Ribbon Box",
        weight: "16 Pieces",
        price: 350
      }
    ],
    includedItems: [
      "Signature Vanilla Cake Pops prepared fresh from scratch",
      "Dipped in rich chocolate with edible golden shimmer",
      "9 Pieces in Blue Ribbon Box (₹200) or 16 Pieces in Pink Ribbon Box (₹350)",
      "Festive presentation box with silk ribbon bow"
    ],
    customizationAvailable: true,
    customizationNote: "Personalized greeting tag available."
  },
  {
    id: "hamper-650",
    name: "Sweet & Savoury Diwali Box — ₹650",
    price: 650,
    priceFormatted: "₹650",
    priceRange: "500-1000",
    image: "/images/hamper_650.jpeg",
    alt: "Sweet & Savoury Diwali Box ₹650 from The Home Delight Bakery",
    tag: "Sweet & Savoury • 100% Eggless",
    shortDescription: "Festive celebration box featuring whole wheat jaggery dry cake, savoury crisps, bhel mix, and flower candles.",
    isConfirmed: true,
    weight: "Festive Curated Hamper",
    includedItems: [
      "Whole wheat jaggery dry cake (250g)",
      "Millet masala crisps (100g)",
      "Khatta mitha mix bhel (120g)",
      "Box of 6 flower candles",
      "Houndstooth gift box with grand festive red bow"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-700-chocolates",
    name: "Heritage Trunk Hamper (Chocolates & Jars) — ₹700",
    price: 700,
    priceFormatted: "₹700",
    priceRange: "500-1000",
    image: "/images/hamper_700.jpeg",
    alt: "Heritage Trunk Hamper (Chocolates & Jars) ₹700 from The Home Delight Bakery",
    tag: "Heritage Trunk • 100% Eggless",
    shortDescription: "Traditional peacock & diya heritage trunk box packed with assorted flavoured chocolates, cake pops, and artisanal jars.",
    isConfirmed: true,
    weight: "Curated Gift Trunk",
    includedItems: [
      "Mix flavour chocolates (8 pieces)",
      "Vanilla cake pops (2 pieces)",
      "Coconut laadu (100g)",
      "Chatpatti lemon amla chutney (150g)",
      "Carrot murabba (120g)",
      "Royal peacock & diya heritage gift trunk box"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-700-drycake",
    name: "Heritage Trunk Hamper (Dry Cake & Jars) — ₹700",
    price: 700,
    priceFormatted: "₹700",
    priceRange: "500-1000",
    image: "/images/hamper_700.jpeg",
    alt: "Heritage Trunk Hamper (Dry Cake & Jars) ₹700 from The Home Delight Bakery",
    tag: "Heritage Trunk • 100% Eggless",
    shortDescription: "Traditional peacock & diya heritage trunk box filled with wholesome jaggery dry cake and handcrafted jars.",
    isConfirmed: true,
    weight: "Curated Gift Trunk",
    includedItems: [
      "Whole wheat jaggery cake (250g)",
      "Coconut laadu (100g)",
      "Chatpatti lemon amla chutney (150g)",
      "Carrot murabba (120g)",
      "Royal peacock & diya heritage gift trunk box"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-750",
    name: "Diwali Celebration Hamper Box — ₹750",
    price: 750,
    priceFormatted: "₹750",
    priceRange: "500-1000",
    image: "/images/hamper_750.jpeg",
    alt: "Diwali Celebration Hamper Box ₹750 from The Home Delight Bakery",
    tag: "Festive Assortment • 100% Eggless",
    shortDescription: "Handcrafted festive box with whole wheat jaggery cake, vanilla cake pops, assorted chocolates, and festive candles.",
    isConfirmed: true,
    weight: "Festive Gift Box",
    includedItems: [
      "Whole wheat jaggery dry cake (250g)",
      "Vanilla cake pops (6 pieces)",
      "Flavourful chocolates (8 pieces)",
      "Khatta mitha bhel mix (20g)",
      "Sutli bomb candle (6 pieces)",
      "White presentation box with clear window and red floral ribbon"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1000",
    name: "Pichwai Lotus Dry Fruit & Chocolate Hamper — ₹1,000",
    price: 1000,
    priceFormatted: "₹1,000",
    priceRange: "500-1000",
    image: "/images/hamper_1000.jpeg",
    alt: "Pichwai Lotus Dry Fruit & Chocolate Hamper ₹1,000 from The Home Delight Bakery",
    tag: "Dry Fruits & Chocolates • 100% Eggless",
    shortDescription: "Exquisite Pichwai lotus green & gold foil gift box loaded with premium cashews, almonds, and handcrafted chocolates.",
    isConfirmed: true,
    weight: "Premium Gift Box",
    includedItems: [
      "Premium cashew / kaju (200g in glass jar)",
      "Premium almonds / badam (200g in glass jar)",
      "Mix flavour chocolates (8 pieces)",
      "Vanilla cake pop (1 piece)",
      "Luxury Pichwai lotus festive gift box with golden foil"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1350",
    name: "Festive Grandeur Diwali Hamper — ₹1,350",
    price: 1350,
    priceFormatted: "₹1,350",
    priceRange: "1000-1500",
    image: "/images/hamper_1350.jpeg",
    alt: "Festive Grandeur Diwali Hamper ₹1,350 from The Home Delight Bakery",
    tag: "Grand Celebration • 100% Eggless",
    shortDescription: "Generous Diwali festive hamper with 16 chocolates, traditional desi ghee biscuits, chutneys, murabba, and candles.",
    isConfirmed: true,
    weight: "Grand Gift Box",
    includedItems: [
      "Flavourful homemade chocolates (16 pieces)",
      "Carrot murabba (300g)",
      "Chatpatti lemon amla chutney (150g)",
      "Desi ghee atta shakkar biscuits (130g)",
      "Khatta mitha bhel mix (80g)",
      "Millet masala crisps (60g)",
      "Sutli bomb candle (6 pieces)",
      "Royal blue & gold Happy Diwali presentation box with floral lid"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1400",
    name: "Deluxe Traditional Diwali Hamper — ₹1,400",
    price: 1400,
    priceFormatted: "₹1,400",
    priceRange: "1000-1500",
    image: "/images/hamper_1400.jpeg",
    alt: "Deluxe Traditional Diwali Hamper ₹1,400 from The Home Delight Bakery",
    tag: "Deluxe Hamper • 100% Eggless",
    shortDescription: "Handcrafted 9-item festive trunk featuring jaggery cake, nan khatai, vanilla cake pops, bhel, and Motichoor candles.",
    isConfirmed: true,
    weight: "Large Curated Box",
    includedItems: [
      "Whole wheat jaggery dry cake (250g)",
      "Kesar pista nan khatai (120g)",
      "Vanilla cake pops (8 pieces)",
      "Desi ghee atta shakkar biscuits (130g)",
      "Carrot murabba (120g)",
      "Coconut laadu (100g)",
      "Khatta mitha bhel mix (80g)",
      "Millet masala crisps (50g)",
      "Motichoor laadu candle (2 pieces)",
      "Large pink presentation box with fresh rose & floral decor"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1500",
    name: "Pastel Suitcase Festive Treasure Hamper — ₹1,500",
    price: 1500,
    priceFormatted: "₹1,500",
    priceRange: "1000-1500",
    image: "/images/hamper_1500.jpeg",
    alt: "Pastel Suitcase Festive Treasure Hamper ₹1,500 from The Home Delight Bakery",
    tag: "Suitcase Trunk • 100% Eggless",
    shortDescription: "Pastel green suitcase trunk with rope handle filled with freshly baked treats, nan khatai, dry cake, and festive candles.",
    isConfirmed: true,
    weight: "Pastel Suitcase Trunk",
    includedItems: [
      "Carrot murabba (300g)",
      "Coconut laadu (200g)",
      "Kesar pista nan khatai (170g)",
      "Whole wheat jaggery dry cake (250g)",
      "Desi ghee atta biscuits (150g)",
      "Millet masala crisps (100g)",
      "Khatta mitha bhel mix (70g)",
      "Motichoor laadu candles (4 pieces)",
      "Pastel green suitcase trunk with rope handle & floral accents"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1700",
    name: "Royal Blue Velvet Heritage Hamper — ₹1,700",
    price: 1700,
    priceFormatted: "₹1,700",
    priceRange: "above-1500",
    image: "/images/hamper_1700.jpeg",
    alt: "Royal Blue Velvet Heritage Hamper ₹1,700 from The Home Delight Bakery",
    tag: "Royal Blue Chest • 100% Eggless",
    shortDescription: "Regal navy blue chest box packed with Desi Ghee Khoya Barfi, 16 chocolates, nan khatai, and festive matki candle.",
    isConfirmed: true,
    weight: "Luxury Velvet Chest",
    includedItems: [
      "Desi ghee khoya barfi (300g)",
      "Mix flavour chocolates (16 pieces)",
      "Carrot murabba (300g)",
      "Kesar pista nan khatai (130g)",
      "Khatta mitha bhel mix (100g)",
      "Millet masala crisps (60g)",
      "Matki candle (1 piece)",
      "Royal navy blue chest box with golden mandala inlay & floral bow"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1800-maharaja",
    name: "Maharaja Diwali Celebration Hamper — ₹1,800",
    price: 1800,
    priceFormatted: "₹1,800",
    priceRange: "above-1500",
    image: "/images/hamper_1800_maharaja.jpeg",
    alt: "Maharaja Diwali Celebration Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Maharaja Box • 100% Eggless",
    shortDescription: "Grand festive hamper loaded with Desi Ghee Khoya Barfi, 16 chocolates, nan khatai, murabba, and Sutli bomb candles.",
    isConfirmed: true,
    weight: "Grand Celebration Box",
    includedItems: [
      "Desi ghee khoya barfi (300g)",
      "Carrot murabba (300g)",
      "Mix chocolates (16 pieces — pistachio, ras malai, strawberry, orange)",
      "Chatpatti lemon amla chutney (140g)",
      "Kesar pista nan khatai (100g)",
      "Khatta mitha bhel mix (100g)",
      "Coconut laadu (90g)",
      "Millet masala crisps (70g)",
      "Sutli bomb candle box of 6",
      "Large festive presentation box with clear display lid & red ribbon"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1800-velvet",
    name: "Imperial Black Velvet Trunk Hamper — ₹1,800",
    price: 1800,
    priceFormatted: "₹1,800",
    priceRange: "above-1500",
    image: "/images/hamper_1800_velvet.jpeg",
    alt: "Imperial Black Velvet Trunk Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Black Velvet Trunk • 100% Eggless",
    weight: "Velvet Trunk with Gold Clasp",
    shortDescription: "Exclusive black velvet trunk with gold clasp and yellow lining, featuring premium cashews, almonds, sweets, and candles.",
    isConfirmed: true,
    includedItems: [
      "Premium kaju / cashews (200g)",
      "Premium almonds / badam (200g)",
      "Coconut laadu (250g)",
      "Carrot murabba (250g)",
      "Kesar pista nan khatai (150g)",
      "Chatpatti lemon amla chutney (150g)",
      "Khatta mitha bhel mix (100g)",
      "Millet masala crisps (50g)",
      "Motichoor laadu candles (4 pieces)",
      "Handcrafted black velvet trunk with gold clasp & yellow velvet lining"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-1800-dryfruit",
    name: "Royal Dry Fruits & Khoya Barfi Hamper — ₹1,800",
    price: 1800,
    priceFormatted: "₹1,800",
    priceRange: "above-1500",
    image: "/images/hamper_1800_dryfruit.jpeg",
    alt: "Royal Dry Fruits & Khoya Barfi Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Dry Fruits & Barfi • 100% Eggless",
    weight: "Grand Festive Box",
    shortDescription: "Luxurious houndstooth box loaded with 400g of dry fruits (cashew & almonds), 300g Desi Ghee Khoya Barfi, and 16 chocolates.",
    isConfirmed: true,
    includedItems: [
      "Premium cashews (200g)",
      "Premium almonds (200g)",
      "Desi ghee khoya barfi (300g)",
      "Carrot murabba (300g)",
      "Mix flavour chocolates (16 pieces)",
      "Signature houndstooth presentation box with grand red ribbon bow"
    ],
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
