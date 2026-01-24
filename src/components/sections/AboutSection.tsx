import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Globe, Compass } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span 
              className="text-accent font-semibold mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              من نحن
            </motion.span>
            <motion.h2 
              className="heading-section text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              شريك تصميم وإنتاج هندسي دولي
            </motion.h2>
            <motion.div 
              className="divider-accent mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <motion.p 
              className="text-body mb-6"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ESLAH هو مكتب هندسي متكامل يقدم حلول تصميم قابلة للتنفيذ لمشاريع
              داخل مصر وعلى المستوى الدولي. نتموضع كشريك تصميم وإنتاج هندسي،
              وليس مكتب رندرة أو عمل حر.
            </motion.p>

            <motion.p 
              className="text-body mb-8"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              بخبرة تتجاوز 5 سنوات من العمل الفعلي من التصميم إلى التنفيذ، نعتمد
              على فهم عميق لقابلية التنفيذ، التنسيق، المواد، وواقع الموقع، لضمان
              أن كل تصميم يتم تطويره ليُبنى فعليًا، وليس فقط ليُعرض بصريًا.
            </motion.p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "دقة تنفيذية",
                  desc: "تصاميم جاهزة للبناء",
                },
                {
                  icon: Globe,
                  title: "حضور دولي",
                  desc: "شراكات عالمية",
                },
                {
                  icon: Compass,
                  title: "رؤية متكاملة",
                  desc: "من الفكرة للتنفيذ",
                },
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + (index * 0.15),
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: "hsl(var(--accent) / 0.2)",
                      rotate: 5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    <feature.icon className="text-accent" size={24} />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Model Section */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Egypt Model */}
            <motion.div 
              className="card-architectural p-8 group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360, transition: { duration: 0.5, ease: "easeOut" } }}
                >
                  <span className="text-primary-foreground font-bold">مصر</span>
                </motion.div>
                <h3 className="heading-subsection text-foreground">
                  نموذج العمل المحلي
                </h3>
              </div>
              <p className="text-body">
                داخل مصر، نعمل بنموذج التصميم حتى التنفيذ، حيث نقدم خدمات التصميم
                المعماري، التصميم الداخلي، تصميم اللاندسكيب، المعارض، والإشراف
                والتنفيذ على أرض الواقع.
              </p>
            </motion.div>

            {/* International Model */}
            <motion.div 
              className="card-architectural p-8 border-accent group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: "hsl(var(--accent))",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5, ease: "easeOut" } }}
                >
                  <Globe className="text-accent-foreground" size={24} />
                </motion.div>
                <h3 className="heading-subsection text-foreground">
                  نموذج العمل الدولي
                </h3>
              </div>
              <p className="text-body">
                على المستوى الدولي، نقدم خدمات تصميم وتطوير إنتاجي واعٍ بالتنفيذ،
                من خلال تسليم مخططات تنفيذية ورسومات إنشائية وتقنية متكاملة تُمكّن
                الشركاء والمقاولين المحليين من التنفيذ بثقة ودقة.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
