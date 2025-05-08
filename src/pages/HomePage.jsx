import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { packages } from "../data/packages";
import PackageCard from "../components/packages/PackageCard";
import { promotions } from "../data/promotions";

export default function HomePage() {
  const { t } = useTranslation();
  const featured = packages.filter((p) => /^(1|2|3) día/.test(p.duration));

  return (
    <>
      {}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/assets/images/salar-hero.jpg"
          alt="Salar de Uyuni"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative z-10 max-w-2xl px-6 text-white">
          <h1 className="font-serif text-5xl sm:text-6xl mb-6 drop-shadow-lg">
            {t("home.headline", "Vive el Salar de Uyuni")}
          </h1>
          <p className="mb-8 text-lg sm:text-xl">
            {t("home.tagline", "Experiencias inolvidables, rutas seguras y reservas en un clic.")}
          </p>
          <Link
            to="/packages"
            className="inline-block bg-accent text-white px-8 py-3 rounded shadow hover:bg-accent/90 transition"
          >
            {t("home.cta", "Explorar todos los paquetes")}
          </Link>
        </div>
      </section>

      {/* Video */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary">
          {t("home.video", "Descubre Uyuni desde las alturas")}
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/Scxs7L0vhZ4?rel=0&mute=1"
            title="Drone Uyuni"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </section>

      {/*  Logo */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto grid gap-16 md:grid-cols-3 items-center">
          <article className="md:col-span-1 md:order-1 order-2">
            <h3 className="text-2xl font-serif mb-4">{t("home.mission", "Nuestra misión")}</h3>
            <p className="leading-relaxed opacity-90">
              Brindar atención excepcional y responsable, mostrando la riqueza cultural y natural de Bolivia mientras
              protegemos nuestro medio ambiente.
            </p>
          </article>

          <div className="flex justify-center md:order-2 order-1">
            <img
              src="/assets/images/logo-sj.png"
              alt="Santiago Jukil"
              className="h-40 drop-shadow-logo"
            />
          </div>

          <article className="md:col-span-1 md:order-3 order-3">
            <h3 className="text-2xl font-serif mb-4">{t("home.vision", "Nuestra visión")}</h3>
            <p className="leading-relaxed opacity-90">
              Ser la empresa líder en turismo especializado del sudoeste potosino, reconocida por calidad, ética y
              compromiso con la comunidad.
            </p>
          </article>
        </div>
      </section>

      {/* Promociones */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-secondary">
          {t("home.promos", "Promociones del mes")}
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white">
              <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-6 flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-primary">{p.title}</h4>
                <p className="text-sm opacity-70 flex-grow">{p.description}</p>
                <span className="text-accent font-bold">
                  {p.price ? p.price.toLocaleString("es-BO", { style: "currency", currency: "BOB" }) : t("home.free", "Gratis")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manual PDF */}
      <section className="bg-secondary text-white py-20 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">
          {t("home.services", "Servicios y Manual")}
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Descarga nuestro manual completo en PDF y conoce todos los servicios adicionales.
        </p>
        <a
          href="/manual.pdf"
          target="_blank"
          rel="noopener"
          className="inline-block bg-white text-secondary font-semibold px-10 py-3 rounded-full shadow hover:bg-slate-100"
        >
          {t("home.downloadPdf", "Descargar manual PDF")}
        </a>
      </section>

      {/* Tours principales */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary">
          {t("home.featuredTours", "Tours principales")}
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PackageCard key={p.id} pack={p} />
          ))}
        </div>
      </section>
    </>
  );
}
