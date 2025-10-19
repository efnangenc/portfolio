// src/services/mailService.js
import emailjs from "@emailjs/browser";

/**
 * EmailJS ayarları
 * Bu değerleri .env dosyasına taşı: 
 * REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY
 */
const SERVICE_ID = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

/**
 * ReCAPTCHA doğrulamalı e-posta gönderme
 * @param {HTMLFormElement} form - form element
 * @param {string} recaptchaValue - reCAPTCHA doğrulama token
 */
export const sendEmail = async (form, recaptchaValue) => {
  if (!recaptchaValue) {
    console.error("reCAPTCHA doğrulaması başarısız!");
    return { success: false, error: "reCAPTCHA doğrulaması başarısız" };
  }

  try {
    const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
    console.log("EmailJS başarı:", result.text);
    return { success: true };
  } catch (error) {
    console.error("EmailJS hata:", error.text || error);
    return { success: false, error };
  }
};
