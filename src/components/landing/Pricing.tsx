import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Месячный",
    price: "5 000 сом",
    subtitle: "/ месяц",
    popular: false,
    features: [
      "Учёт мебели",
      "QR-коды",
      "Аудит",
      "Отчёты",
      "Поддержка",
    ],
  },
  {
    title: "Годовой",
    price: "25 000 сом",
    subtitle: "/ год",
    popular: true,
    features: [
      "Все функции системы",
      "QR и аудит",
      "Полная аналитика",
      "Приоритетная поддержка",
      "Экономия по сравнению с месячным",
    ],
  },
  {
    title: "Внедрение",
    price: "от 15 000 сом",
    subtitle: "",
    popular: false,
    features: [
      "Настройка системы",
      "Импорт данных",
      "Обучение сотрудников",
      "Подключение организации",
      "Зависит от объёма работ",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Простые <span className="text-gradient">тарифы</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Выберите подходящий вариант для вашей организации.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 glass border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary glow-primary scale-105"
                  : "border-border/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {plan.title}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>

                <span className="text-muted-foreground ml-2">
                  {plan.subtitle}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </div>

                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = "/checkout"}
                className="w-full bg-primary text-primary-foreground py-3 rounded-2xl font-medium hover:scale-[1.02] transition-transform"
              >
                Подключить
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;