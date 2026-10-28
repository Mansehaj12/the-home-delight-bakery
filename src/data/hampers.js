/**
 * Centralized Hamper Catalogue Data for The Home Delight Bakery (Patiala)
 * Extracted directly from official bakery promotional photographs.
 * 
 * Features clean product photographs with all names, prices, weights,
 * and contents displayed as clear website text outside the image.
 */

export const HAMPERS = [
  {
    id: "khoya-barfi",
    name: "Homemade Desi Ghee Khoya Barfi",
    price: 400,
    priceFormatted: "₹400 / ₹800",
    priceRange: "under-500",
    image: "/images/products/khoya_barfi.png",
    alt: "Homemade Desi Ghee Khoya Barfi in festive purple and red gift boxes",
    tag: "Bakery Signature • Pure Desi Ghee",
    shortDescription: "Homemade desi ghee khoya barfi, garnished with nuts. 100% eggless.",
    isConfirmed: true,
    weight: "500 g or 1 kg",
    variants: [
      {
        id: "500g-purple",
        label: "500 g — ₹400 (Purple Box)",
        weight: "500 g (Purple Box)",
        boxColor: "Purple Box",
        price: 400
      },
      {
        id: "1kg-red",
        label: "1 kg — ₹800 (Red Box)",
        weight: "1 kg (Red Box)",
        boxColor: "Red Box",
        price: 800
      }
    ],
    includedItems: [
      "500 g — ₹400 (Purple Box)",
      "1 kg — ₹800 (Red Box)",
      "Prepared fresh from scratch in 100% pure desi ghee",
      "Garnished with slivered almonds and pistachios",
      "Festive Happy Diwali presentation gift box"
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
    image: "/images/products/choco_200.png",
    alt: "Handcrafted Flavoured Chocolate Box ₹200 from The Home Delight Bakery",
    tag: "Festive Assortment • 100% Eggless",
    shortDescription: "Delightful assortment of handcrafted flavoured chocolates and cake pop in a festive gift box.",
    isConfirmed: true,
    weight: "12 Treats (9 Pcs Box)",
    includedItems: [
      "2 × Orange Chocolate",
      "2 × Ras Malai Chocolate",
      "2 × Strawberry Chocolate",
      "2 × Pistachio Chocolate",
      "1 × Vanilla Cake Pop (Centerpiece treat)",
      "Festive Happy Diwali presentation box"
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
    image: "/images/products/choco_350.png",
    alt: "Luxury Flavoured Chocolate Box ₹350 (16 Pieces) from The Home Delight Bakery",
    tag: "16 Pieces • 100% Eggless",
    shortDescription: "Rich assortment of 16 handcrafted flavoured chocolates made from scratch in a celebratory gift box.",
    isConfirmed: true,
    weight: "16 Pieces in Festive Box",
    includedItems: [
      "4 × Ras Malai Chocolate",
      "4 × Strawberry Chocolate",
      "4 × Orange Chocolate",
      "4 × Pistachio Chocolate",
      "Festive Happy Diwali 16-compartment gift box"
    ],
    customizationAvailable: true,
    customizationNote: "Custom festive greetings and corporate gifting tags available."
  },
  {
    id: "cake-pops-200",
    name: "Vanilla Cake Pops Box (9 Pcs) — ₹200",
    price: 200,
    priceFormatted: "₹200",
    priceRange: "under-500",
    image: "/images/products/cake_pops_200.jpeg",
    alt: "Vanilla Cake Pops Box 9 Pcs in Blue Ribbon Box from The Home Delight Bakery",
    tag: "Bestseller • 100% Eggless",
    shortDescription: "Bestselling chocolate-dipped vanilla cake pops finished with golden festive brushstrokes in a blue ribbon box.",
    isConfirmed: true,
    weight: "9 Vanilla Cake Pops",
    includedItems: [
      "9 × Signature vanilla cake pops prepared fresh from scratch",
      "Dipped in rich chocolate with edible golden shimmer",
      "Blue ribbon presentation gift box with silk bow"
    ],
    customizationAvailable: true
  },
  {
    id: "cake-pops-350",
    name: "Vanilla Cake Pops Box (16 Pcs) — ₹350",
    price: 350,
    priceFormatted: "₹350",
    priceRange: "under-500",
    image: "/images/products/cake_pops_350.jpeg",
    alt: "Vanilla Cake Pops Box 16 Pcs in Pink Ribbon Box from The Home Delight Bakery",
    tag: "Bestseller • 100% Eggless",
    shortDescription: "Grand 16-piece assortment of chocolate-dipped vanilla cake pops with golden festive shimmer in a pink ribbon box.",
    isConfirmed: true,
    weight: "16 Vanilla Cake Pops",
    includedItems: [
      "16 × Signature vanilla cake pops prepared fresh from scratch",
      "Dipped in rich chocolate with edible golden shimmer",
      "Pink ribbon presentation gift box with silk bow"
    ],
    customizationAvailable: true
  },
  {
    id: "hamper-650",
    name: "Sweet & Savoury Diwali Box — ₹650",
    price: 650,
    priceFormatted: "₹650",
    priceRange: "500-1000",
    image: "/images/products/hamper_650_open.jpeg",
    alt: "Sweet & Savoury Diwali Box ₹650 from The Home Delight Bakery",
    tag: "Sweet & Savoury • 100% Eggless",
    shortDescription: "Celebration box featuring whole wheat jaggery dry cake, savoury crisps, bhel mix, and flower candles.",
    isConfirmed: true,
    weight: "4-Item Curated Hamper",
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
    image: "/images/products/hamper_700_chocolates.jpeg",
    alt: "Heritage Trunk Hamper (Chocolates & Jars) ₹700 from The Home Delight Bakery",
    tag: "Heritage Trunk • 100% Eggless",
    shortDescription: "Peacock & diya heritage trunk box packed with assorted flavoured chocolates, cake pops, and artisanal jars.",
    isConfirmed: true,
    weight: "5-Item Gift Trunk",
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
    image: "/images/products/hamper_700_drycake.jpeg",
    alt: "Heritage Trunk Hamper (Dry Cake & Jars) ₹700 from The Home Delight Bakery",
    tag: "Heritage Trunk • 100% Eggless",
    shortDescription: "Peacock & diya heritage trunk box filled with wholesome jaggery dry cake and handcrafted jars.",
    isConfirmed: true,
    weight: "4-Item Gift Trunk",
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
    image: "/images/products/hamper_750_open.jpeg",
    alt: "Diwali Celebration Hamper Box ₹750 from The Home Delight Bakery",
    tag: "Festive Assortment • 100% Eggless",
    shortDescription: "Festive box with whole wheat jaggery cake, vanilla cake pops, assorted chocolates, and Sutli bomb candles.",
    isConfirmed: true,
    weight: "5-Item Festive Box",
    includedItems: [
      "Whole wheat jaggery dry cake (250g)",
      "Vanilla cake pops (6 pieces)",
      "Flavourful chocolates (8 pieces)",
      "Khata mitha bhel mix (20g)",
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
    image: "/images/products/hamper_1000.jpeg",
    alt: "Pichwai Lotus Dry Fruit & Chocolate Hamper ₹1,000 from The Home Delight Bakery",
    tag: "Dry Fruits & Chocolates • 100% Eggless",
    shortDescription: "Pichwai lotus green & gold foil gift box loaded with premium cashews, almonds, and handcrafted chocolates.",
    isConfirmed: true,
    weight: "Dry Fruits & Chocolates",
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
    image: "/images/products/hamper_1350.jpeg",
    alt: "Festive Grandeur Diwali Hamper ₹1,350 from The Home Delight Bakery",
    tag: "Grand Celebration • 100% Eggless",
    shortDescription: "Diwali festive hamper with 16 chocolates, traditional desi ghee biscuits, chutneys, murabba, and candles.",
    isConfirmed: true,
    weight: "7-Item Grand Hamper",
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
    image: "/images/products/hamper_1400_open.jpeg",
    alt: "Deluxe Traditional Diwali Hamper ₹1,400 from The Home Delight Bakery",
    tag: "Deluxe Hamper • 100% Eggless",
    shortDescription: "9-item festive trunk featuring jaggery cake, nan khatai, vanilla cake pops, bhel, and Motichoor candles.",
    isConfirmed: true,
    weight: "9-Item Curated Trunk",
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
    image: "/images/products/hamper_1500_open.jpeg",
    alt: "Pastel Suitcase Festive Treasure Hamper ₹1,500 from The Home Delight Bakery",
    tag: "Suitcase Trunk • 100% Eggless",
    shortDescription: "Pastel green suitcase trunk with rope handle filled with fresh baked treats, nan khatai, dry cake, and candles.",
    isConfirmed: true,
    weight: "8-Item Suitcase Trunk",
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
    image: "/images/products/hamper_1700_open.jpeg",
    alt: "Royal Blue Velvet Heritage Hamper ₹1,700 from The Home Delight Bakery",
    tag: "Royal Blue Chest • 100% Eggless",
    shortDescription: "Regal navy blue chest box packed with Desi Ghee Khoya Barfi, 16 chocolates, nan khatai, and festive matki candle.",
    isConfirmed: true,
    weight: "7-Item Velvet Chest",
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
    image: "/images/products/hamper_1800_maharaja_open.jpeg",
    alt: "Maharaja Diwali Celebration Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Maharaja Box • 100% Eggless",
    shortDescription: "Grand festive hamper loaded with Desi Ghee Khoya Barfi, 16 chocolates, nan khatai, murabba, and Sutli bomb candles.",
    isConfirmed: true,
    weight: "9-Item Grand Box",
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
    image: "/images/products/hamper_1800_velvet.jpeg",
    alt: "Imperial Black Velvet Trunk Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Black Velvet Trunk • 100% Eggless",
    weight: "9-Item Velvet Trunk",
    shortDescription: "Exclusive black velvet trunk with gold clasp and yellow lining, featuring cashews, almonds, sweets, and candles.",
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
    image: "/images/products/hamper_1800_dryfruit_open.jpeg",
    alt: "Royal Dry Fruits & Khoya Barfi Hamper ₹1,800 from The Home Delight Bakery",
    tag: "Dry Fruits & Barfi • 100% Eggless",
    weight: "5-Item Grand Box",
    shortDescription: "Signature houndstooth box loaded with 400g dry fruits (cashew & almonds), 300g Desi Ghee Khoya Barfi, and 16 chocolates.",
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
