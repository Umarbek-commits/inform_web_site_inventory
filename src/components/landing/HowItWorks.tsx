import { motion } from "framer-motion";
import { PlusCircle, QrCode, ScanLine, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: PlusCircle, title: "Добавьте мебель", desc: "Внесите предметы в систему вручную или через импорт." },
  { icon: QrCode, title: "Сгенерируйте QR", desc: "Система автоматически создаст уникальный QR-код." },
  { icon: ScanLine, title: "Сканируйте", desc: "Используйте камеру телефона для быстрого сканирования." },
  { icon: CheckCircle2, title: "Получите результат", desc: "Мгновенный доступ к данным, статусу и истории предмета." },
];

const HowItWorks = () => (
  <section id="about" className="relative py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Как это <span className="text-gradient">работает</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Четыре простых шага к полному контролю.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative text-center"
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
            )}
            <div className="w-20 h-20 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center mb-5 relative">
              <s.icon className="text-primary" size={28} />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
