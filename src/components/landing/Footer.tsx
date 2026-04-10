const Footer = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-3 gap-8 mb-10">
        <div>
          <span className="text-lg font-bold text-gradient mb-3 block">Inventory</span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Современная система учёта мебели с QR-кодами и аудитом.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Навигация</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">О системе</a></li>
            <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
            <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="text-sm font-semibold text-foreground mb-3">Контакты</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@inventory.app</li>
            <li>+ 996 995 052 569</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
        © 2026 Inventory. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
