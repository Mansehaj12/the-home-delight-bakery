# The Home Delight Bakery — Diwali Hamper Catalogue

A premium, mobile-first Diwali Hamper digital catalogue website built for **The Home Delight Bakery**, Patiala, Punjab.

---

## 🌟 Features Implemented

1. **Brand-Aligned Festive Aesthetic:**
   - Color palette: Warm ivory & cream backgrounds (`#FDFBF7`, `#F7F2E8`), deep royal maroon (`#5C131D`), antique gold highlights (`#C89D47`), and dark brown typography (`#2C1810`).
   - Traditional Indian festive accents with diya motifs, rangoli watermarks, subtle gold shimmers, and soft festive shadows.
   - Mobile-first responsive layout tailored for Instagram bio and WhatsApp sharing.

2. **Navigation & Hero Section:**
   - Sticky header with festive announcement banner, brand identity, navigation links, and mobile drawer.
   - Hero section featuring the official tagline *"Whisked with love for bakery"*, festive heading *"Make This Diwali Sweeter"*, account-free browsing guarantee, and a real product spotlight for the bakery's signature **Homemade Desi Ghee Khoya Barfi**.

3. **Diwali Hamper Catalogue & Filtering:**
   - Centralized, easily editable hamper dataset located at `src/data/hampers.js`.
   - Confirmed real bakery product:
     - **Homemade Desi Ghee Khoya Barfi** with authentic photograph (`/images/1.png`), variant packaging (500 g purple box for ₹400; 1 kg red box for ₹800), and confirmed ingredient details.
   - Hampers for observed price points (₹200, ₹350, ₹650, ₹700, ₹750, ₹1,000, ₹1,300, ₹1,350, ₹1,400, ₹1,500, ₹1,700, ₹1,800) with elegant festive placeholder artwork and direct *"Message for Details"* WhatsApp prompts until final box contents are uploaded.
   - Interactive price range filter tabs:
     - **All Hampers**
     - **Under ₹500**
     - **₹500 – ₹1,000**
     - **₹1,000 – ₹1,500**
     - **Above ₹1,500**
   - Sorting by: Featured Catalogue Order, Price (Low to High), and Price (High to Low).

4. **Interactive Product Detail Modal:**
   - High-resolution photograph view.
   - Interactive variant selector (e.g. 500 g Purple Box vs 1 kg Red Box).
   - Functional quantity counter (`+` and `-`) with real-time total price calculation.
   - Delivery or Self-Pickup toggle (Tripuri Town, Patiala).
   - Special instructions / customization note input.
   - Live WhatsApp message preview box with one-click copy.
   - One-click **Order on WhatsApp** action triggering celebratory festive confetti.

5. **Corporate & Bulk Gifting Section:**
   - Dedicated *"Make Your Corporate Gifting Sweeter"* section.
   - Form for corporate inquiries (Name, Company, Phone, Number of hampers, Budget range, Required date, Special requests).
   - Form validation with functional WhatsApp submission fallback that pre-formats the inquiry and opens WhatsApp.

6. **Why Choose Us & How to Order:**
   - 4 confirmed facts cards: 100% Eggless, Made from Scratch, Festive Gifting, Local Pickup & Delivery.
   - 5-step visual roadmap with crucial ordering and advance payment reminders.

7. **Permanent QR Code Generator:**
   - Built-in scannable QR Code generation tool (`QRCodeModal.jsx`) powered by `qrcode`.
   - Allows the owner to input their permanent public URL after deployment.
   - Real-time high-resolution QR rendering styled in the bakery's deep maroon.
   - One-click **Download High-Res PNG** button for printing on physical gift tags, flyers, box sleeves, and counter cards.

8. **WhatsApp Floating Action Button:**
   - Persistent, accessible floating WhatsApp button on mobile and desktop linked to `+91 9417528889`.

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Steps
1. Navigate to the project directory:
   ```bash
   cd "Cake_Bakery"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## 📸 How to Replace Placeholder Product Images

1. Take your high-resolution hamper photos and save them as `.jpg`, `.png`, or `.webp`.
2. Copy the image files into the public directory:
   ```
   Cake_Bakery/public/images/
   ```
   *(For example: `public/images/hamper-700.jpg`)*
3. Open `src/data/hampers.js`.
4. Locate the corresponding hamper entry by price or ID (e.g., `hamper-700`), and update the fields:
   ```javascript
   {
     id: "hamper-700",
     name: "Diwali Hamper — ₹700", // Update with confirmed title if available
     price: 700,
     priceFormatted: "₹700",
     image: "/images/hamper-700.jpg", // Point to your uploaded image
     isConfirmed: true, // Mark as confirmed once verified
     includedItems: [
       "Item 1",
       "Item 2",
       "Item 3"
     ]
   }
   ```

---

## 💰 How to Edit Prices and Product Contents

All product information is centralized in a single file:
👉 **`src/data/hampers.js`**

To change any price, item description, weight, or add/remove items:
- Simply open `src/data/hampers.js` in your editor.
- Modify the `price`, `priceFormatted`, `shortDescription`, `weight`, or `includedItems` array.
- Save the file; the website will update immediately.

All bakery contact details (WhatsApp number, Instagram link, pickup address) are in:
👉 **`src/data/bakeryInfo.js`**

---

## 🌐 How to Deploy the Website Publicly

You can host this website for free in under 2 minutes:

### Option A: Deploy with Vercel (Recommended)
1. Push this project to a GitHub repository or install the Vercel CLI (`npm i -g vercel`).
2. Run:
   ```bash
   vercel
   ```
3. Follow the simple prompts. Vercel will build the Vite app and give you a permanent public URL (e.g., `https://the-home-delight-bakery.vercel.app`).
4. (Optional) In Vercel Project Settings > Domains, connect your custom domain (e.g., `thehomedelightbakery.com`).

### Option B: Deploy with Netlify
1. Run `npm run build` to generate the production bundle in the `dist` folder.
2. Drag and drop the `dist` folder into [Netlify Drop](https://app.netlify.com/drop).
3. Netlify will instantly provide a live permanent URL with HTTPS.

---

## 📱 How to Create a QR Code Using the Permanent URL

1. Deploy your website using Vercel or Netlify to get your permanent public URL.
2. Open your live website in a browser.
3. Click the **QR Code icon** in the top navigation bar or the **"Generate Print QR Code"** button in the footer.
4. Verify or type your live public URL (e.g., `https://the-home-delight-bakery.vercel.app` or `https://thehomedelightbakery.com`).
5. Click **Download High-Res PNG**.
6. Send the downloaded image to your printer for printing on hamper tags, stickers, and promotional flyers.
