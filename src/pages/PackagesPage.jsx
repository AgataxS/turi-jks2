import { useState } from "react";
import { packages } from "../data/packages";
import PackageCard from "../components/packages/PackageCard";

export default function PackagesPage() {
  const [query, setQuery] = useState("");
  const list = packages.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Todos los paquetes</h2>
      <input
        type="text"
        placeholder="Buscar…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block mx-auto mb-8 px-4 py-2 border rounded w-full max-w-md"
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PackageCard pack={p} key={p.id} />
        ))}
        {list.length === 0 && (
          <p className="col-span-full text-center opacity-70">Sin resultados</p>
        )}
      </div>
    </section>
  );
}