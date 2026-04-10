import { motion } from "framer-motion";

const rows = [
  { id: "INV-001", name: "Стул Ergon X", loc: "Офис 301", status: "Отлично", color: "bg-emerald-500/20 text-emerald-400" },
  { id: "INV-002", name: "Стол Oak Pro", loc: "Офис 205", status: "Хорошо", color: "bg-amber-500/20 text-amber-400" },
  { id: "INV-003", name: "Шкаф S-12", loc: "Склад B", status: "Ремонт", color: "bg-red-500/20 text-red-400" },
  { id: "INV-004", name: "Кресло Premium", loc: "Офис 101", status: "Отлично", color: "bg-emerald-500/20 text-emerald-400" },
  { id: "INV-005", name: "Тумба Classic", loc: "Офис 102", status: "Хорошо", color: "bg-amber-500/20 text-amber-400" },
];

const bars = [75, 90, 60, 85, 50, 95, 70];

const Preview = () => (
  <section className="relative py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Превью <span className="text-gradient">системы</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Интуитивный дашборд для управления инвентарём.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl p-8 glow-border max-w-5xl mx-auto"
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">Dashboard — Inventory System</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_240px] gap-6">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-muted-foreground border-b border-border/40">
                  <th className="pb-3 pr-4">ID</th>
                  <th className="pb-3 pr-4">Название</th>
                  <th className="pb-3 pr-4">Локация</th>
                  <th className="pb-3">Статус</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{r.id}</td>
                    <td className="py-3 pr-4 text-foreground">{r.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground text-xs">{r.loc}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${r.color}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mini chart */}
          <div className="glass rounded-2xl p-5">
            <span className="text-xs text-muted-foreground mb-4 block">Состояние за неделю</span>
            <div className="flex items-end gap-2 h-32">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex-1 rounded-lg bg-gradient-to-t from-primary/60 to-primary/20"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Preview;
