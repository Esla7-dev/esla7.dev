import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Cinematic Parallax Zoom + Blur to Focus */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.15, rotate: 0.5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <motion.img
          src={heroImage}
          alt="تصميم معماري احترافي"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 2, 
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/40" />
      </motion.div>

      {/* Content */}
      <div className="relative section-container py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Brand with Fade and Slide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.span 
              className="inline-block text-accent font-semibold text-lg mb-6 relative"
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.05em", opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              ESLAH | إصلاح
              {/* Subtle glow effect */}
              <span className="absolute inset-0 blur-xl opacity-50 text-accent">ESLAH | إصلاح</span>
            </motion.span>
          </motion.div>

          {/* Headline with Premium Gradient, Glow, and Letter Spacing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="heading-display mb-6 relative"
            style={{ textBalance: "balance" } as any}
          >
            {/* Main text with gradient */}
            <span className="relative inline-block text-primary-foreground drop-shadow-2xl">
              عمارة بوعي تنفيذي.
              {/* Text glow layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-foreground via-white to-primary-foreground/80 bg-clip-text text-transparent blur-sm">
                عمارة بوعي تنفيذي.
              </span>
            </span>
          </motion.h1>

          {/* Subtext with Staggered Entrance and Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl backdrop-blur-sm"
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              مكتب هندسي متكامل يقدم حلول تصميم قابلة للتنفيذ لمشاريع داخل مصر
              وعلى المستوى الدولي. شريك تصميم وإنتاج هندسي، وليس مجرد مكتب تصميم.
            </motion.p>
          </motion.div>

          {/* Buttons with Staggered Entrance, Scale, and Advanced Hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              delay: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative z-10">استكشف خدماتنا</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, -4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowLeft size={20} />
              </motion.div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              تواصل معنا
            </motion.a>
          </motion.div>

          {/* Stats with Glass Morphism Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20 backdrop-blur-sm"
          >
            {[
              { value: "+5", label: "سنوات خبرة" },
              { value: "+100", label: "مشروع منفذ" },
              { value: "+20", label: "شريك دولي" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + (index * 0.1),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-accent mb-2 relative"
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(255,165,0,0.5)",
                  }}
                >
                  {stat.value}
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 text-accent transition-opacity duration-300">
                    {stat.value}
                  </span>
                </motion.div>
                <div className="text-primary-foreground/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Floating Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium">اكتشف المزيد</span>
          <motion.div
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};
