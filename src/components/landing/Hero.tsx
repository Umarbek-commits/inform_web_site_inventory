import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const statusColors: Record<string, string> = {
  "Отлично": "bg-emerald-500/20 text-emerald-400",
  "Хорошо": "bg-amber-500/20 text-amber-400",
  "Ремонт": "bg-red-500/20 text-red-400",
};

const mockItems = [
  { id: "INV-001", name: "Офисный стул Ergon X", location: "Офис 301", status: "Отлично" },
  { id: "INV-002", name: "Стол рабочий Oak Pro", location: "Офис 205", status: "Хорошо" },
  { id: "INV-003", name: "Шкаф металлический S-12", location: "Склад B", status: "Ремонт" },
  { id: "INV-004", name: "Кресло директора Premium", location: "Офис 101", status: "Отлично" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" style={{ animation: "float 8s ease-in-out infinite reverse" }} />
    <div className="absolute inset-0 bg-grid opacity-30" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Новая версия 2.0 уже доступна
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Контроль над каждым{" "}
            <span className="text-gradient">предметом мебели</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            От поступления до списания. QR-коды, аудит, отчёты и полный контроль над вашим инвентарём.
          </p>

          <div className="flex flex-wrap gap-4">
          
          </div>
        </motion.div>

        {/* Right - Mock UI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="glass rounded-3xl p-6 glow-border" style={{ animation: "float 6s ease-in-out infinite" }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">inventory.app</span>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-[80px_1fr_100px_80px] gap-3 text-xs text-muted-foreground pb-2 border-b border-border/40 px-3">
                <span>ID</span><span>Название</span><span>Локация</span><span>Статус</span>
              </div>
              {mockItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="grid grid-cols-[80px_1fr_100px_80px] gap-3 items-center text-sm py-2.5 px-3 rounded-xl hover:bg-secondary/40 transition-colors"
                >
                  <span className="font-mono text-xs text-muted-foreground">{item.id}</span>
                  <span className="text-foreground font-medium truncate">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.location}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full text-center ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
