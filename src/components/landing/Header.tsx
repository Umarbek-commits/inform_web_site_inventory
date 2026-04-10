import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "О системе", href: "#about" },
  { label: "Возможности", href: "#features" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-bold text-gradient">Inventory</a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => console.log("Войти")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Войти
          </button>
          <button
            onClick={() => console.log("Зарегистрироваться")}
            className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200 glow-primary"
          >
            Зарегистрироваться
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-strong border-t border-border/30 px-6 pb-6"
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block py-3 text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <button onClick={() => console.log("Войти")} className="text-sm text-muted-foreground py-2">Войти</button>
            <button onClick={() => console.log("Зарегистрироваться")} className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-2xl">
              Зарегистрироваться
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
