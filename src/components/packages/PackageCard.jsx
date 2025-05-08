import { Link } from "react-router-dom";
export default function PackageCard({ pack }) {
  const bg = {
    primary: "bg-primary/90",
    secondary: "bg-secondary/90",
    accent: "bg-accent/90",
  }[pack.color] || "bg-primary/90";

  return (
    <Link
      to={`/packages/${pack.slug}`}
      className={`${bg} text-white rounded overflow-hidden shadow hover:-translate-y-1 hover:shadow-lg transition flex flex-col`}
    >
      <img
        src={pack.hero}
        alt={pack.name}
        className="h-48 w-full object-cover opacity-90 hover:opacity-100 transition"
      />
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-semibold line-clamp-2 flex-grow">
          {pack.name}
        </h3>
        <p className="text-sm opacity-90 line-clamp-3">{pack.summary}</p>
        <span className="font-bold">
          {pack.price.toLocaleString("es-BO", {
            style: "currency",
            currency: "BOB",
          })}
        </span>
      </div>
    </Link>
  );
}
