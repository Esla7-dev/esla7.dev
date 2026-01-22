import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">ESLAH</span>
              <span className="text-xl font-semibold text-accent">إصلاح</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              مكتب هندسي متكامل يقدم حلول تصميم قابلة للتنفيذ. شريك تصميم وإنتاج
              هندسي دولي يعمل مع شركات ومكاتب عالمية لتقديم حزم تصميم جاهزة
              للتنفيذ.
            </p>
            <p className="text-accent font-semibold mt-4">عمارة بوعي تنفيذي.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "من نحن" },
                { href: "#services", label: "خدماتنا" },
                { href: "#projects", label: "أعمالنا" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a
                  href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  dir="ltr"
                >
                  {import.meta.env.VITE_CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-primary-foreground/70">
                  {import.meta.env.VITE_CONTACT_LOCATION}
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={import.meta.env.VITE_SOCIAL_LINKEDIN || "https://www.linkedin.com/company/eslah"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://www.instagram.com/eslah"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} ESLAH إصلاح. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
