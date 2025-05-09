/*  src/pages/PackageDetailPage.jsx  */
import { useParams } from "react-router-dom";
import { packages } from "../data/packages";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import BookingSidebar from "../components/booking/BookingSidebar";
import { formatItinerary } from "../utils/formatItinerary";

export default function PackageDetailPage() {
  /* ------------ data ------------ */
  const { slug }  = useParams();
  const pack      = packages.find((p) => p.slug === slug);

  if (!pack) return <p className="p-10 text-center">Paquete no encontrado.</p>;

  const [activeImg, setActiveImg] = useState(pack.gallery?.[0] || pack.hero);

  /* ------------ helpers ------------ */
  const tabClass = ({ selected }) =>
    `py-2 px-4 -mb-px border-b-2 transition font-medium ${
      selected
        ? "border-accent text-accent"
        : "border-transparent hover:text-accent"
    }`;

  const itineraryRows = formatItinerary(pack.itinerary);

  /* ---------- layout ---------- */
  return (
    <div className="container mx-auto py-10 lg:grid lg:grid-cols-[2fr_1fr] gap-8">
      {/* -------- LEFT -------- */}
      <div>
        {/* Hero ************************************************ */}
        <div className="relative h-60 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
          <img src={activeImg} alt={pack.name} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold drop-shadow-md">
              {pack.name}
            </h1>
          </div>
        </div>

        {/* Thumbs ********************************************** */}
        {pack.gallery?.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {pack.gallery.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImg(img)}
                className={`h-16 w-24 object-cover rounded cursor-pointer border-2 ${
                  img === activeImg
                    ? "border-accent"
                    : "border-transparent hover:border-accent/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tabs ************************************************ */}
        <Tab.Group as="div" className="mt-8">
          <Tab.List className="flex gap-4 border-b overflow-x-auto">
            <Tab className={tabClass}>Descripción</Tab>
            {itineraryRows.length > 0 && <Tab className={tabClass}>Itinerario</Tab>}
            <Tab className={tabClass}>Incluye</Tab>
            {pack.notIncludes?.length > 0 && <Tab className={tabClass}>No incluye</Tab>}
            {pack.gallery?.length > 0 && <Tab className={tabClass}>Galería</Tab>}
          </Tab.List>

          <Tab.Panels className="mt-6">
            {/* -------- Descripción -------- */}
            <Tab.Panel>
              <p className="leading-relaxed whitespace-pre-wrap">
                {pack.description || pack.summary}
              </p>
            </Tab.Panel>

            {/* -------- Itinerario -------- */}
            {itineraryRows.length > 0 && (
              <Tab.Panel>
                <table className="w-full border text-sm">
                  <tbody>
                    {itineraryRows.map((row, idx) => (
                      <tr key={idx} className="even:bg-slate-50">
                        <td className="border px-3 py-2 w-24 font-semibold text-primary whitespace-nowrap">
                          {row.time}
                        </td>
                        <td className="border px-3 py-2">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab.Panel>
            )}

            {/* -------- Incluye -------- */}
            <Tab.Panel>
              <ul className="list-disc pl-6 space-y-1">
                {(pack.includes ?? []).map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
            </Tab.Panel>

            {/* -------- No incluye -------- */}
            {pack.notIncludes?.length > 0 && (
              <Tab.Panel>
                <ul className="list-disc pl-6 space-y-1 text-red-600">
                  {pack.notIncludes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Tab.Panel>
            )}

            {/* -------- Galería extra -------- */}
            {pack.gallery?.length > 0 && (
              <Tab.Panel>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pack.gallery.map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt=""
                      className="w-full h-48 object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              </Tab.Panel>
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* -------- RIGHT / sidebar -------- */}
      <BookingSidebar pack={pack} />
    </div>
  );
}
