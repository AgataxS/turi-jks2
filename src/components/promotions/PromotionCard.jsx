// src/components/promotions/PromotionCard.jsx
import { HiSparkles } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";


export default function PromotionCard({ promo }) {
  const navigate   = useNavigate();
  const { dispatch } = useBooking();

  const goToDetail = () => {
    dispatch({
      type: "SET_PACKAGE",
      // 👇 aseguramos "name" para el BookingForm
      payload: { ...promo, name: promo.title, promo: true },
    });
    navigate(`/promotions/${promo.slug}`);
  };

  return (
    <div
      onClick={goToDetail}
      className="group relative cursor-pointer rounded-2xl bg-white border border-primary/10 shadow hover:shadow-xl transition overflow-hidden"
    >
      {/* Chip oferta */}
      <span className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
        <HiSparkles className="h-4 w-4" />
        Oferta
      </span>

      <img
        src={promo.image}
        alt={promo.title}
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-primary">{promo.title}</h3>
        <p className="text-sm opacity-70 flex-grow">{promo.description}</p>

        <div className="flex items-end justify-between mt-2">
          <span className="text-accent font-bold text-lg">
            {promo.price
              ? promo.price.toLocaleString("es-BO", {
                  style: "currency",
                  currency: "BOB",
                })
              : "Gratis"}
          </span>

          <span className="text-primary font-medium underline opacity-0 group-hover:opacity-100 transition">
            Reservar
          </span>
        </div>
      </div>
    </div>
  );
}
