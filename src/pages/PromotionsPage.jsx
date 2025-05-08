import { promotions } from "../data/promotions";
import PromotionCard from "../components/promotions/PromotionCard";
import { motion } from "framer-motion";

export default function PromotionsPage() {
  return (
    <section className="container mx-auto py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serif font-bold text-center text-primary mb-14"
      >
        Promociones vigentes
      </motion.h1>

      <motion.div
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {promotions.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <PromotionCard promo={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
