import { Link } from "react-router-dom";
import { HiClock } from "react-icons/hi2";

export default function PackageCard({ pack }) {
  /* color de fondo según categoría */
  const bg = {
    primary: "bg-white",
    secondary: "bg-white",
    accent: "bg-white",
  }[pack.color];

  return (
    <Link
      to={`/packages/${pack.slug}`}
      className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition ${bg}`}
    >
      {/* hero */}
      <img
        src={pack.hero}
        alt={pack.name}
        className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* duración chip */}
      <span className="absolute top-3 left-3 bg-accent text-white text-[11px] font-semibold px-2 py-[2px] rounded-full shadow">
        <HiClock className="inline mb-[2px]" /> {pack.duration}
      </span>

      {/* cuerpo */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-primary font-semibold line-clamp-2">
          {pack.name}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-3 flex-grow">
          {pack.summary}
        </p>

        <span className="font-bold text-accent">
          {pack.price.toLocaleString("es-BO", {
            style: "currency",
            currency: "BOB",
            minimumFractionDigits: 0,
          })}
        </span>
      </div>
    </Link>
  );
}
