import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#process", label: "كيف نعمل" },
  { href: "#projects", label: "أعمالنا" },
  { href: "#capabilities", label: "قدراتنا" },
  { href: "#why-eslah", label: "لماذا إصلاح" },
  { href: "#contact", label: "تواصل معنا" },
];

const MotionLink = motion(Link);

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const buildHashLocation = (hash: string) => ({
    pathname: "/",
    hash,
  });

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });
  };

  const navigateToSection = (hash: string) => {
    // Always attempt to scroll, even if we're already on the same hash
    if (window.location.hash === hash && window.location.pathname === "/") {
      scrollToSection(hash);
      closeMobileMenu();
      return;
    }

    navigate(buildHashLocation(hash), { replace: false });
    closeMobileMenu();
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={buildHashLocation("#home")} className="flex items-center gap-3" onClick={() => navigateToSection("#home") }>
            <span className="text-2xl font-bold text-foreground">ESLAH</span>
            <span className="text-xl font-semibold text-accent">إصلاح</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={buildHashLocation(link.href)}
                onClick={() => navigateToSection(link.href)}
                className="nav-link text-sm font-medium text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="section-container py-6 space-y-1">
              {navLinks.map((link, index) => (
                <MotionLink
                  key={link.href}
                  to={buildHashLocation(link.href)}
                  onClick={() => navigateToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block py-3 px-4 text-foreground font-medium hover:bg-accent/10 rounded-sm transition-colors"
                >
                  {link.label}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
