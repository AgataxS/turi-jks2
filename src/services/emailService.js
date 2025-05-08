
import emailjs from "@emailjs/browser";


export async function sendBookingEmail({
  name,
  email,
  date,
  packageName,
  isPromo,
}) {
  const templateParams = {
    to_email: "agustinteje1@gmail.com",
    subject: `${isPromo ? "PROMOCIÓN · " : ""}Reserva — ${packageName}`,
    name,
    email,
    date,
    packageName,
  };

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE,
    import.meta.env.VITE_EMAILJS_TEMPLATE,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC
  );
}
