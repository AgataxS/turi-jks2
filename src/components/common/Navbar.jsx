import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const WA = import.meta.env.VITE_WHATSAPP_NUMBER || "59167236221";
const WA_LINK = `https://wa.me/${WA}?text=${encodeURIComponent(
  "Hola, necesito más información sobre los tours."
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  /* ─── mostrar/ocultar al hacer scroll ─── */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      setHide(cur > last && cur > 100);
      last = cur;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── bloquear scroll de fondo cuando overlay activo ─── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const link =
    "block py-3 px-6 text-lg font-medium hover:text-accent transition";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-primary text-white shadow transition-transform duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3 pl-4 md:pl-2">
          <img src="/assets/images/logo-sj.png" className="h-10 w-10 md:h-14 md:w-14" />
          <span className="font-serif font-bold text-xl md:text-2xl">Santiago Jukil</span>
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLink
              to="/packages"
              className={({ isActive }) =>
                `${link} ${isActive ? "text-accent" : ""}`
              }
            >
              Paquetes
            </NavLink>
          </li>
          <li>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-accent px-5 py-2 rounded-full shadow hover:bg-accent/90 transition font-medium"
            >
              📞 Contáctanos
            </a>
          </li>
        </ul>

        {/* hamburguesa */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl p-2 pr-4"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </nav>

      {/* overlay móvil */}
      {open && (
        <div className="fixed inset-0 bg-primary/95 text-white flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img src="/assets/images/logo-sj.png" className="h-16 w-16" />
              <span className="font-serif font-bold text-2xl">Santiago Jukil</span>
            </Link>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="text-3xl p-2"
            >
              <HiX />
            </button>
          </div>

          <ul className="flex-1 flex flex-col items-center justify-center gap-12 -mt-6">
            <li>
              <NavLink
                to="/packages"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold hover:text-accent transition-colors"
              >
                Paquetes
              </NavLink>
            </li>
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-accent px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:bg-accent/90 transition-all"
              >
                📞 Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}