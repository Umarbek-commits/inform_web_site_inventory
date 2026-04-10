import { motion } from "framer-motion";
import { Package, Users, Target } from "lucide-react";

const stats = [
  { icon: Package, value: "10 000+", label: "объектов учтено" },
  { icon: Users, value: "500+", label: "пользователей" },
  { icon: Target, value: "99%", label: "точность данных" },
];

const Trust = () => (
  <section className="relative py-20">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300"
          >
            <s.icon className="mx-auto mb-4 text-primary" size={28} />
            <div className="text-3xl font-bold text-foreground mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
