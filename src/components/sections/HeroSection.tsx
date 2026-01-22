import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="تصميم معماري احترافي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative section-container py-32 lg:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-lg mb-6">
              ESLAH | إصلاح
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-primary-foreground mb-6"
          >
            عمارة بوعي تنفيذي.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl"
          >
            مكتب هندسي متكامل يقدم حلول تصميم قابلة للتنفيذ لمشاريع داخل مصر
            وعلى المستوى الدولي. شريك تصميم وإنتاج هندسي، وليس مجرد مكتب تصميم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-colors"
            >
              استكشف خدماتنا
              <ArrowLeft size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              تواصل معنا
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20"
          >
            {[
              { value: "+5", label: "سنوات خبرة" },
              { value: "+100", label: "مشروع منفذ" },
              { value: "+20", label: "شريك دولي" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-sm">اكتشف المزيد</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
