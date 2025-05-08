import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HiOutlineMenu,
  HiX,
  HiOutlinePhone,
} from "react-icons/hi";

const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || "59167236221";
const WA_MSG = encodeURIComponent(
  "Hola, necesito más información sobre los tours."
);
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // ------------ Hide on scroll ------------
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) < 10) return; 
      setVisible(y < lastY.current || y < 50); 
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ------------ helpers ------------
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-primary text-white shadow-md bg-opacity-95 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between py-3">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-serif font-bold tracking-tight"
          >
            Santiago&nbsp;Jukil
          </Link>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-3xl"
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>

          {/* Links */}
          <ul
            className={`${
              open ? "block" : "hidden"
            } sm:flex gap-8 items-center font-medium`}
          >
            <li>
              <NavLink
                to="/packages"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent-200"
                    : "hover:text-accent-200 transition-colors"
                }
              >
                {t("nav.packages", "Paquetes")}
              </NavLink>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition shadow"
              >
                <HiOutlinePhone className="h-5 w-5" />
                <span>{t("nav.contact", "Contáctanos")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
