import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="relative py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
      >
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
        <div className="absolute inset-0 glass" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Начните управлять инвентарём <span className="text-gradient">уже сегодня</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Бесплатная регистрация. Без кредитной карты. Начните за 2 минуты.
          </p>
          <button
            onClick={() => console.log("Создать аккаунт")}
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:scale-105 transition-transform duration-200 glow-primary"
          >
            Создать аккаунт
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
