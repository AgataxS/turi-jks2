// src/pages/PromotionDetailPage.jsx
import { useParams, Navigate } from "react-router-dom";
import { promotions } from "../data/promotions";
import BookingSidebar from "../components/booking/BookingSidebar";
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext";

export default function PromotionDetailPage() {
  const { slug } = useParams();
  const promo = promotions.find((p) => p.slug === slug);

  if (!promo) return <Navigate to="/promotions" replace />;

  const { dispatch } = useBooking();

  /* Guardar promo en contexto por acceso directo */
  useEffect(() => {
    dispatch({
      type: "SET_PACKAGE",
      payload: { ...promo, name: promo.title, promo: true },
    });
    dispatch({ type: "SET_EXTRAS", payload: [] });
  }, [promo]);

  const [imgActive] = useState(promo.image);

  return (
    <div className="lg:grid lg:grid-cols-[2fr_1fr] gap-8 container mx-auto py-10">
      {/* -------------- Sección izquierda (hero + tabs) -------------- */}
      <div>
        <div className="relative h-60 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-xl">
          <img src={imgActive} alt={promo.title} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold drop-shadow">
              {promo.title}
            </h1>
          </div>
        </div>

        <Tab.Group as="div" className="mt-8">
          <Tab.List className="flex gap-6 border-b">
            {["Descripción", "Detalles"].map((t) => (
              <Tab
                key={t}
                className={({ selected }) =>
                  `py-2 px-4 -mb-px border-b-2 font-medium ${
                    selected
                      ? "border-accent text-accent"
                      : "border-transparent hover:text-accent"
                  }`
                }
              >
                {t}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6 min-h-[150px]">
            <Tab.Panel>
              <p className="leading-relaxed whitespace-pre-wrap">
                {promo.description}
              </p>
            </Tab.Panel>

            <Tab.Panel>
              <ul className="list-disc pl-6 space-y-1">
                <li>Duración: {promo.duration}</li>
                <li>
                  Precio promocional:&nbsp;
                  {promo.price
                    ? promo.price.toLocaleString("es-BO", {
                        style: "currency",
                        currency: "BOB",
                      })
                    : "Gratis"}
                </li>
                <li>
                  Puedes agregar extras opcionales en el formulario de reserva.
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* -------------- Sidebar con BookingForm -------------- */}
      <BookingSidebar pack={{ ...promo, name: promo.title, promo: true }} />
    </div>
  );
}
