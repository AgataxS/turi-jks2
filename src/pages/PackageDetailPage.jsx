import { useParams } from "react-router-dom";
import { packages } from "../data/packages";
import { useState } from "react";
import BookingSidebar from "../components/booking/BookingSidebar";
import { Tab } from "@headlessui/react";

export default function PackageDetailPage() {
  const { slug } = useParams();
  const pack = packages.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(pack.gallery?.[0] || pack.hero);

  if (!pack) return <p className="p-10 text-center">Paquete no encontrado.</p>;

  return (
    <div className="lg:grid lg:grid-cols-[2fr_1fr] gap-8 container mx-auto py-10">
      {/* Left column */}
      <div>
        {/* Hero */}
        <div className="relative h-60 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
          <img src={activeImg} alt={pack.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold drop-shadow-md">
              {pack.name}
            </h1>
          </div>
        </div>

        {/* Gallery thumbs */}
        {pack.gallery && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {pack.gallery.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImg(img)}
                className={`h-16 w-24 object-cover rounded cursor-pointer border-2 ${
                  img === activeImg ? "border-accent" : "border-transparent"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tabs */}
        <Tab.Group as="div" className="mt-8">
          <Tab.List className="flex gap-4 border-b">
            {[
              { id: "desc", label: "Descripción" },
              { id: "itin", label: "Itinerario" },
              { id: "incl", label: "Incluye" },
            ].map(({ id, label }) => (
              <Tab key={id} className={({ selected }) =>
                  `py-2 px-4 -mb-px border-b-2 transition font-medium ${
                    selected ? "border-accent text-accent" : "border-transparent hover:text-accent"
                  }`}
              >
                {label}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6">
            {/* Descripción */}
            <Tab.Panel>
              <p className="leading-relaxed whitespace-pre-wrap">{pack.description || pack.summary}</p>
            </Tab.Panel>

            {/* Itinerario */}
            <Tab.Panel>
              {pack.itinerary ? (
                <table className="w-full border text-sm">
                  <tbody>
                    {pack.itinerary.map((i) => (
                      <tr key={i.time} className="even:bg-slate-50">
                        <td className="border px-3 py-2 w-24 font-semibold text-primary">{i.time}</td>
                        <td className="border px-3 py-2">{i.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No hay itinerario detallado.</p>
              )}
            </Tab.Panel>

            {/* Incluye */}
            <Tab.Panel>
              <ul className="list-disc pl-6 space-y-1">
                {pack.includes?.map((inc) => (
                  <li key={inc}>{inc}</li>
                )) || <li>Ver folleto adjunto.</li>}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Right column */}
      <BookingSidebar pack={pack} />
    </div>
  );
}