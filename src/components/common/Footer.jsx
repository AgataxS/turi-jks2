import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const socials = [
  { icon: FaFacebookF, href: "https://facebook.com/santiagojukil" },
  { icon: FaInstagram, href: "https://instagram.com/santiagojukil" },
  { icon: FaWhatsapp, href: "https://wa.me/59167236221" },
];

export default function Footer() {
  const [showMap, setShowMap] = useState(false);
  return (
    <footer className="bg-white border-t py-10">
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Redes */}
        <div className="flex gap-5 text-primary text-xl">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener"
              className="hover:text-accent transition"
            >
              <Icon />
            </a>
          ))}

          {/* Ubicación toggle */}
          <button
            onClick={() => setShowMap(!showMap)}
            className={`hover:text-accent transition ${showMap ? "text-accent" : "text-primary"}`}
            aria-label="Ubicación"
          >
            <FaMapMarkerAlt />
          </button>
        </div>

        {/* Mapa */}
        {showMap && (
          <div className="w-full max-w-xl aspect-video rounded overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.129437836167!2d-66.83467462602751!3d-20.46363515628371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fa5b7eabba20e3%3A0x6f6f59d6a9ac07be!2sUyuni%2C%20Bolivia!5e0!3m2!1ses!2sus!4v1700000000000"
              loading="lazy"
              allowFullScreen
              className="w-full h-full"
              title="Ubicación Santiago Jukil"
            ></iframe>
          </div>
        )}

        <p className="text-xs text-slate-500 mt-4 text-center">
          © {new Date().getFullYear()} Santiago Jukil · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}