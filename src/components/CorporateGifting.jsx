import React, { useState } from 'react';
import { Building2, Gift, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createWhatsAppLink, buildCorporateEnquiryMessage } from '../utils/whatsapp';

export default function CorporateGifting() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    hamperCount: '',
    budgetPerHamper: '',
    deliveryDate: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.hamperCount.trim()) {
      newErrors.hamperCount = "Please enter the required number of hampers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#C89D47', '#5C131D', '#F7E2A9']
    });

    const message = buildCorporateEnquiryMessage(formData);
    const whatsappUrl = createWhatsAppLink(message);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="corporate" className="py-16 sm:py-20 bg-bakery-ivory relative overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full bg-bakery-gold/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bakery-maroon/10 text-bakery-maroon text-xs font-semibold border border-bakery-maroon/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>Bulk & Corporate Orders</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-maroon tracking-tight leading-tight">
                Make Your Corporate Gifting Sweeter
              </h2>
              <p className="text-base text-bakery-brown-muted leading-relaxed">
                Celebrate the festival of lights with thoughtfully prepared Diwali hampers for your employees, clients, friends, and business partners.
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-bakery-border shadow-xs space-y-1">
                <div className="w-8 h-8 rounded-lg bg-bakery-cream text-bakery-maroon flex items-center justify-center font-bold text-sm">
                  ✨
                </div>
                <h4 className="font-serif font-bold text-sm text-bakery-brown">Multiple Hamper Options</h4>
                <p className="text-xs text-bakery-brown-muted">Curated options from ₹200 up to ₹1,800 to match your gifting tier.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-bakery-border shadow-xs space-y-1">
                <div className="w-8 h-8 rounded-lg bg-bakery-cream text-bakery-maroon flex items-center justify-center font-bold text-sm">
                  🏷️
                </div>
                <h4 className="font-serif font-bold text-sm text-bakery-brown">Customized Greeting Tags</h4>
                <p className="text-xs text-bakery-brown-muted">Include your personalized Diwali message with each corporate hamper.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-bakery-border shadow-xs space-y-1">
                <div className="w-8 h-8 rounded-lg bg-bakery-cream text-bakery-maroon flex items-center justify-center font-bold text-sm">
                  🌱
                </div>
                <h4 className="font-serif font-bold text-sm text-bakery-brown">100% Eggless Assurance</h4>
                <p className="text-xs text-bakery-brown-muted">Pure vegetarian, universally appreciated by all team members and clients.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-bakery-border shadow-xs space-y-1">
                <div className="w-8 h-8 rounded-lg bg-bakery-cream text-bakery-maroon flex items-center justify-center font-bold text-sm">
                  📍
                </div>
                <h4 className="font-serif font-bold text-sm text-bakery-brown">Patiala City Delivery</h4>
                <p className="text-xs text-bakery-brown-muted">Safe bulk pickup near Tripuri Town or delivery arranged within Patiala.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-festive border border-bakery-gold/40 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-bakery-border mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-bakery-maroon">
                    Corporate Enquiry Form
                  </h3>
                  <p className="text-xs text-bakery-brown-muted">
                    Submits directly via WhatsApp to our Patiala bakery team.
                  </p>
                </div>
                <span className="text-2xl">🪔</span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>WhatsApp Opened with Your Details!</span>
                  </p>
                  <p>
                    Please press send in your WhatsApp chat so we can review your corporate hamper request immediately.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaspreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-400 focus:ring-red-400' : 'border-bakery-border focus:ring-bakery-gold'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Company Name <span className="font-normal lowercase text-bakery-brown-muted">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-bakery-border focus:ring-bakery-gold'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Number of Hampers *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 20, 50, 100"
                      value={formData.hamperCount}
                      onChange={(e) => setFormData({ ...formData, hamperCount: e.target.value })}
                      className={`w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border focus:outline-none focus:ring-2 ${
                        errors.hamperCount ? 'border-red-400 focus:ring-red-400' : 'border-bakery-border focus:ring-bakery-gold'
                      }`}
                    />
                    {errors.hamperCount && <p className="text-[11px] text-red-600 mt-1">{errors.hamperCount}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Approx. Budget per Hamper
                    </label>
                    <select
                      value={formData.budgetPerHamper}
                      onChange={(e) => setFormData({ ...formData, budgetPerHamper: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold"
                    >
                      <option value="">Select budget range...</option>
                      <option value="Under ₹500">Under ₹500</option>
                      <option value="₹500 – ₹800">₹500 – ₹800</option>
                      <option value="₹800 – ₹1,200">₹800 – ₹1,200</option>
                      <option value="₹1,200 – ₹1,800">₹1,200 – ₹1,800</option>
                      <option value="Above ₹1,800 (Premium Luxury)">Above ₹1,800 (Premium Luxury)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Required Delivery / Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                    Additional Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Include personalized greeting cards, specific delivery timing in Patiala, etc."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-bakery-cream/40 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-200" />
                    <span>Send Corporate Enquiry via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-bakery-brown-muted mt-2">
                    Enquiries are formatted into a WhatsApp message and handled directly by our owner.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
