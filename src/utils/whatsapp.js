import { BAKERY_INFO } from '../data/bakeryInfo';

const WHATSAPP_PHONE = BAKERY_INFO.whatsappRaw; // 919417528889

/**
 * Builds a direct click-to-chat WhatsApp URL with a prefilled, URL-encoded message.
 */
export function createWhatsAppLink(message) {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
}

/**
 * Generates an order message for an individual hamper.
 */
export function buildHamperOrderMessage({
  hamperName,
  price,
  quantity = 1,
  selectedVariant = null,
  deliveryPreference = "Delivery",
  specialInstructions = "",
  needByDate = ""
}) {
  const variantText = selectedVariant ? `\n• Box / Option: ${selectedVariant.label || selectedVariant}` : "";
  const dateText = needByDate ? `\n• Required by: ${needByDate}` : "";
  const instructionsText = specialInstructions.trim() 
    ? `\n• Special Instructions / Customization: ${specialInstructions.trim()}`
    : "\n• Customization: Standard festive packaging";

  return `Hello The Home Delight Bakery! 🪔

I would like to enquire and order the following Diwali Hamper:
• Hamper: ${hamperName}${variantText}
• Price per unit: ₹${price}
• Quantity: ${quantity}
• Total estimate: ₹${price * quantity}
• Preference: ${deliveryPreference}${dateText}${instructionsText}

Please confirm availability, delivery details, and share payment instructions. Thank you!`;
}

/**
 * Generates a WhatsApp enquiry message for corporate / bulk gifting.
 */
export function buildCorporateEnquiryMessage({
  name,
  companyName = "",
  phone,
  hamperCount,
  budgetPerHamper,
  deliveryDate,
  requirements = ""
}) {
  const company = companyName.trim() ? ` (${companyName.trim()})` : "";
  const reqs = requirements.trim() ? `\n• Requirements / Customization: ${requirements.trim()}` : "";

  return `Hello The Home Delight Bakery! 🪔

I am reaching out regarding a Corporate / Bulk Diwali Gifting enquiry:
• Name: ${name.trim()}${company}
• Contact: ${phone.trim()}
• Hampers Required: ${hamperCount}
• Approx. Budget / Hamper: ${budgetPerHamper.trim() || "Open to suggestions"}
• Delivery Date Required: ${deliveryDate.trim() || "Flexible / Prior to Diwali"}${reqs}

Please share your corporate catalogue options and availability for Patiala. Thank you!`;
}

/**
 * Generates a general enquiry WhatsApp link.
 */
export function buildGeneralEnquiryMessage(topic = "") {
  if (topic) {
    return `Hello The Home Delight Bakery! 🪔 I would like to enquire about: ${topic}. Please share details.`;
  }
  return `Hello The Home Delight Bakery! 🪔 I visited your Diwali catalogue website and would like to enquire about your eggless hampers and festive sweets.`;
}
