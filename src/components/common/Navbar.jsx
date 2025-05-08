import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || "59167236221";
const WA_MSG = encodeURIComponent("Hola, necesito más información sobre los tours.");
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="backdrop-blur bg-white/90 sticky top-0 z-50 shadow">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-serif font-bold text-primary">
          Santiago Jukil
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl text-primary px-2"
        >
          ☰
        </button>

        <ul
          className={`${open ? "block" : "hidden"} sm:flex gap-8 items-center list-none font-medium`}
        >
          <li>
            <NavLink
              to="/packages"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-accent" : "hover:text-accent transition-colors"
              }
            >
              Paquetes
            </NavLink>
          </li>

          {/* Botón WhatsApp */}
          <li>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-white rounded-full hover:bg-accent/90 transition"
            >
              <span></span> <span>Contáctanos</span>
            </a>
          </li>

          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
