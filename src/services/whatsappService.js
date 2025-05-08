export function buildWhatsappLink({ number, packageName, date, name }) {
  const text = `Hola, soy ${name}. Quiero reservar el tour ${packageName} para el ${date}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}