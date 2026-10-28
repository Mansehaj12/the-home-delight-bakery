import React, { useState } from 'react';
import { Building2, MessageCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { createWhatsAppLink, buildCorporateEnquiryMessage } from '../utils/whatsapp';

export default function CorporateGifting() {
  const [showForm, setShowForm] = useState(false);
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
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.hamperCount.trim()) newErrors.hamperCount = "Please enter quantity";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C49A45', '#641522', '#FBF5EB']
    });

    const message = buildCorporateEnquiryMessage(formData);
    window.open(createWhatsAppLink(message), '_blank');
    setSubmitted(true);
  };

  const handleQuickEnquire = () => {
    const message = `Hello The Home Delight Bakery! 🪔 I would like to enquire about bulk / corporate Diwali gifting hampers for our team/clients. Please share your catalogue and options.`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <section id="corporate" className="py-8 sm:py-14 bg-bakery-ivory border-t border-bakery-border relative">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6">
        
        {/* Compact Promotional Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-bakery-border shadow-card-subtle text-center space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-cream text-bakery-maroon text-xs font-semibold border border-bakery-border">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate & Bulk Gifting</span>
          </div>

          <div className="space-y-1.5 max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bakery-maroon tracking-tight">
              Diwali Gifting for Teams & Businesses
            </h2>
            <p className="text-xs sm:text-sm text-bakery-brown-muted leading-relaxed">
              Explore festive gifting options for employees, clients, and business partners.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
            <button
              onClick={handleQuickEnquire}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Enquire on WhatsApp</span>
            </button>

            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-bakery-cream text-bakery-maroon border border-bakery-maroon/50 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <span>{showForm ? "Hide Form" : "Custom Bulk Enquiry Form"}</span>
              {showForm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expandable Form */}
          {showForm && (
            <div className="mt-6 pt-6 border-t border-bakery-border text-left animate-fadeIn">
              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>WhatsApp opened! Please press send in WhatsApp so our team can reply immediately.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaspreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    />
                    {errors.name && <p className="text-[10px] text-red-600 mt-0.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studio"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    />
                    {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Hampers Count *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 20, 50, 100"
                      value={formData.hamperCount}
                      onChange={(e) => setFormData({ ...formData, hamperCount: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    />
                    {errors.hamperCount && <p className="text-[10px] text-red-600 mt-0.5">{errors.hamperCount}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Approx. Budget per Box
                    </label>
                    <select
                      value={formData.budgetPerHamper}
                      onChange={(e) => setFormData({ ...formData, budgetPerHamper: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    >
                      <option value="">Select range...</option>
                      <option value="Under ₹500">Under ₹500</option>
                      <option value="₹500 – ₹800">₹500 – ₹800</option>
                      <option value="₹800 – ₹1,200">₹800 – ₹1,200</option>
                      <option value="Above ₹1,200">Above ₹1,200</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                      Required Date
                    </label>
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-bakery-brown block mb-1">
                    Special Notes / Branding Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Include greeting card tag with company logo..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg bg-bakery-cream/30 border border-bakery-border focus:outline-none focus:ring-1 focus:ring-bakery-maroon resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
