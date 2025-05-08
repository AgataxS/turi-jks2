import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { packages } from "../data/packages";
import { promotions } from "../data/promotions";
import PackageCard from "../components/packages/PackageCard";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useBooking } from "../context/BookingContext";

/* Animación reutilizable */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

export default function HomePage() {
  const { t } = useTranslation();
  const { dispatch } = useBooking();

  /* Tours de 1-3 días */
  const featured = packages.filter((p) => /^(1|2|3) día/.test(p.duration));

  /* Top 3 promociones */
  const promos = promotions.slice(0, 3);

  /* —— markup —— */
  return (
    <>
      {/* HERO */}      
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/assets/images/salar-hero.jpg"
          alt="Salar de Uyuni"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl px-6 text-white"
        >
          <h1 className="font-serif text-5xl sm:text-6xl mb-6 drop-shadow-lg">
            {t("home.headline", "Vive el Salar de Uyuni")}
          </h1>
          <p className="mb-8 text-lg sm:text-xl opacity-90">
            {t(
              "home.tagline",
              "Experiencias inolvidables, rutas seguras y reservas en un clic."
            )}
          </p>
          <Link
            to="/packages"
            className="inline-block bg-accent px-8 py-3 rounded-full shadow-lg hover:bg-accent/90 transition"
          >
            {t("home.cta", "Explorar todos los paquetes")}
          </Link>
        </motion.div>
      </section>

      {/* VIDEO */}
      <section className="container mx-auto py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold mb-8 text-center text-primary"
        >
          {t("home.video", "Descubre Uyuni desde las alturas")}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/Scxs7L0vhZ4?rel=0&mute=1"
            title="Drone Uyuni"
            className="w-full h-full"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* MISIÓN / VISIÓN + LOGO */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto grid gap-16 md:grid-cols-3 items-center">
          {[
            {
              title: t("home.mission", "Nuestra misión"),
              text: "Brindar atención excepcional y responsable, mostrando la riqueza cultural y natural de Bolivia mientras protegemos nuestro medio ambiente.",
            },
            { isLogo: true },
            {
              title: t("home.vision", "Nuestra visión"),
              text: "Ser la empresa líder en turismo especializado del sudoeste potosino, reconocida por calidad, ética y compromiso con la comunidad.",
            },
          ].map((b, i) =>
            b.isLogo ? (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img
                  src="/assets/images/logo-sj.png"
                  alt="Santiago Jukil"
                  className="h-44 drop-shadow-lg"
                />
              </motion.div>
            ) : (
              <motion.article
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4">{b.title}</h3>
                <p className="leading-relaxed opacity-90">{b.text}</p>
              </motion.article>
            )
          )}
        </div>
      </section>

      {/* PROMOCIONES DESTACADAS */}
      <section className="container mx-auto py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold mb-12 text-center text-secondary"
        >
          {t("home.promos", "Promociones del mes")}
        </motion.h2>

        <motion.div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {promos.map((p, idx) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              custom={idx}
              className="group relative rounded-2xl border border-primary/20 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              {/* chip oferta */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                <HiSparkles className="h-4 w-4" />
                {t("home.sale", "Oferta")}
              </span>

              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6 flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-primary">{p.title}</h4>
                <p className="text-sm opacity-70 flex-grow">{p.description}</p>

                <div className="flex items-end justify-between">
                  <span className="text-accent font-bold text-lg">
                    {p.price
                      ? p.price.toLocaleString("es-BO", {
                          style: "currency",
                          currency: "BOB",
                        })
                      : t("home.free", "Gratis")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/promotions"
            className="inline-block px-10 py-3 bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
          >
            {t("home.allPromos", "Ver todas las promociones")}
          </Link>
        </motion.div>
      </section>

      {/* MANUAL PDF */}
      <section className="bg-secondary text-white py-24 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">
          {t("home.services", "Servicios y Manual")}
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Descarga nuestro manual completo en PDF y conoce todos los servicios
          adicionales.
        </p>
        <a
          href="/manual.pdf"
          target="_blank"
          rel="noopener"
          className="inline-block bg-white text-secondary font-semibold px-12 py-3 rounded-full shadow hover:bg-slate-100 transition"
        >
          {t("home.downloadPdf", "Descargar manual PDF")}
        </a>
      </section>

      {/* TOURS PRINCIPALES */}
      <section className="container mx-auto py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold mb-12 text-center text-primary"
        >
          {t("home.featuredTours", "Tours principales")}
        </motion.h2>

        <motion.div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featured.map((p, i) => (
            <motion.div key={p.id} variants={fadeUp} custom={i}>
              <PackageCard pack={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
