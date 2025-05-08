import emailjs from "@emailjs/browser";

export async function sendBookingEmail(data) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      ...data,
      to_email: import.meta.env.VITE_COMPANY_EMAIL,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
