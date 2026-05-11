import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  CreditCard,
  QrCode,
} from "lucide-react";

const plans = [
  {
    name: "Месячный тариф",
    price: "5 000 сом",
  },
  {
    name: "Годовой тариф",
    price: "25 000 сом",
  },
  {
    name: "Внедрение",
    price: "от 15 000 сом",
  },
];

const paymentMethods = [
  "Visa / Mastercard",
  "Mbank",
  "O!Bank",
  "Элкарт",
  "PayPal",
];

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-3xl p-8 glow-primary"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Назад
          </button>

          <h1 className="text-4xl font-bold mb-3">
            Оплата <span className="text-gradient">Inventory</span>
          </h1>

          <p className="text-muted-foreground mb-10">
            Настройте ваш тариф и выберите удобный способ оплаты.
          </p>

          {/* TARIFFS */}
          <div className="space-y-4 mb-10">
            {plans.map((plan, index) => (
              <motion.button
                key={plan.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan(index)}
                className={`w-full rounded-2xl p-5 border transition-all duration-300 flex items-center justify-between ${
                  selectedPlan === index
                    ? "border-primary bg-primary/10 glow-primary"
                    : "border-border glass hover:border-primary/40"
                }`}
              >
                <div className="font-semibold text-left">
                  {plan.name}
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`font-bold ${
                      selectedPlan === index
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>

                  {selectedPlan === index && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* PAYMENT METHODS */}
          <h2 className="text-xl font-semibold mb-4">
            Способ оплаты
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {paymentMethods.map((method, index) => (
              <motion.button
                key={method}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMethod(index)}
                className={`rounded-2xl p-5 border text-left transition-all duration-300 ${
                  selectedMethod === index
                    ? "border-primary bg-primary/10"
                    : "glass border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard size={18} />
                  <span>{method}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CARD FORM */}
          <div className="space-y-4">
            <input
  type="text"
  placeholder="Номер карты"
  maxLength={16}
  inputMode="numeric"
  onInput={(e) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 16);
  }}
  className="w-full glass rounded-2xl px-5 py-4 outline-none border border-border focus:border-primary"
/>

            <div className="grid grid-cols-2 gap-4">
              <input
  type="text"
  placeholder="MM / YY"
  maxLength={5}
  inputMode="numeric"
  onInput={(e) => {
    let value = e.currentTarget.value.replace(/\D/g, "");

    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    e.currentTarget.value = value;
  }}
  className="glass rounded-2xl px-5 py-4 outline-none border border-border focus:border-primary"
/>

             <input
                 type="text"
                 placeholder="CVV"
                 maxLength={3}
                 inputMode="numeric"
                 onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                 .replace(/\D/g, "")
                  .slice(0, 3);
       }}
  className="glass rounded-2xl px-5 py-4 outline-none border border-border focus:border-primary"
/>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-3xl p-8 glow-accent sticky top-10"
        >
          <h2 className="text-3xl font-bold mb-8">
            Ваш заказ
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Тариф
              </span>

              <span className="font-semibold">
                {plans[selectedPlan].name}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Оплата
              </span>

              <span className="font-semibold">
                {paymentMethods[selectedMethod]}
              </span>
            </div>

            <div className="border-t border-border pt-4 flex justify-between text-xl font-bold">
              <span>Итого</span>

              <span className="text-primary">
                {plans[selectedPlan].price}
              </span>
            </div>
          </div>

          {/* QR */}
          <div className="glass rounded-3xl p-6 mb-8 text-center">
            <div className="w-40 h-40 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <QrCode size={90} className="text-primary" />
            </div>

            <p className="text-sm text-muted-foreground">
              QR-код для оплаты через Mbank / O!Money
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-medium glow-primary mb-4"
          >
            Оплатить
          </motion.button>

          <button
            onClick={() =>
              window.open("https://t.me/Umar0207", "_blank")
            }
            className="w-full glass py-4 rounded-2xl"
          >
            Связаться с менеджером
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
