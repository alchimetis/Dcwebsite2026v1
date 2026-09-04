import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const PDF_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_PDF_TEMPLATE_ID;

if (!EMAILJS_PUBLIC_KEY) {
  console.error("Missing VITE_EMAILJS_PUBLIC_KEY");
}

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

export interface ContactUsData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface PdfDownloadData {
  name: string;
  email: string;
  pdfName: string;
}
const VITE_CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;


export const emailSend = {
  async contact(data: ContactUsData) {
    if (!EMAILJS_SERVICE_ID || !CONTACT_TEMPLATE_ID) {
      throw new Error("EmailJS contact configuration is missing.");
    }

    const templateParams = {
    name: data.name,
    email: data.email,
    to_email: VITE_CONTACT_EMAIL,
    phone: data.phone || "Not provided",
    company: data.company || "Not provided",
    message: data.message,
    submitted_at: new Date().toLocaleString(),
  };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams
    );

    return response;
  },

  async pdfDownload(data: PdfDownloadData) {
    if (!EMAILJS_SERVICE_ID || !PDF_TEMPLATE_ID) {
      throw new Error("EmailJS PDF configuration is missing.");
    }

    const templateParams = {
      name: data.name,
      email: data.email,
      to_email: VITE_CONTACT_EMAIL,
      pdf_name: data.pdfName,
      downloaded_at: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      PDF_TEMPLATE_ID,
      templateParams
    );

    return response;
  },
};

export const contactUs = emailSend.contact;
export const downloadPdf = emailSend.pdfDownload;
