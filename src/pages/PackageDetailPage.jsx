import { useParams, useNavigate } from "react-router-dom";
import { packages } from "../data/packages";
import { useBooking } from "../context/BookingContext";

export default function PackageDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useBooking();

  const pack = packages.find((p) => p.slug === slug);
  if (!pack) return <p className="p-10 text-center">Paquete no encontrado.</p>;

  const reserve = () => {
    dispatch({ type: "SET_PACKAGE", payload: pack });
    navigate("/booking");
  };

  return (
    <>
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('${pack.hero}')` }}
      />
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">{pack.name}</h2>
        <p className="mb-4 text-lg opacity-80">{pack.summary}</p>
        <span className="text-2xl font-bold text-accent block mb-6">
          {pack.price.toLocaleString("es-BO", { style: "currency", currency: "BOB" })}
        </span>
        <button
          onClick={reserve}
          className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/80"
        >
          Reservar ahora
        </button>
      </section>
    </>
  );
}