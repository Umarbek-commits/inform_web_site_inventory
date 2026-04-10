import { motion } from "framer-motion";
import { QrCode, Archive, ClipboardCheck, Shield, BarChart3, HeartPulse } from "lucide-react";

const features = [
  { icon: QrCode, title: "QR-коды", desc: "Генерация и сканирование QR для мгновенной идентификации каждого предмета." },
  { icon: Archive, title: "Учёт мебели", desc: "Полная база данных: поступление, перемещение, списание — всё в одном месте." },
  { icon: ClipboardCheck, title: "Аудит", desc: "Проводите инвентаризацию быстро и без ошибок с мобильным сканером." },
  { icon: Shield, title: "Роли и доступ", desc: "Гибкое управление правами: администратор, аудитор, наблюдатель." },
  { icon: BarChart3, title: "Отчёты", desc: "Автоматические отчёты по состоянию, перемещениям и аудитам." },
  { icon: HeartPulse, title: "Контроль состояния", desc: "Отслеживайте износ, ремонт и замену мебели в реальном времени." },
];

const Features = () => (
  <section id="features" className="relative py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Всё для <span className="text-gradient">управления инвентарём</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Мощные инструменты, которые упрощают учёт и контроль мебели на каждом этапе.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group glass rounded-3xl p-8 hover:-translate-y-2 hover:glow-primary transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="text-primary" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
