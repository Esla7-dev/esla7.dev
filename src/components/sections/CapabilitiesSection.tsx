import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const capabilities = [
  {
    category: "التصميم والتطوير",
    items: [
      "تصميم مفهومي وتطويري شامل",
      "نمذجة BIM متقدمة",
      "رسومات معمارية تفصيلية",
      "تصميم داخلي وخارجي متكامل",
    ],
  },
  {
    category: "الرسومات التنفيذية",
    items: [
      "مخططات تنفيذية كاملة",
      "رسومات إنشائية وتقنية",
      "رسومات ورش العمل (Shop Drawings)",
      "جداول الكميات والمواصفات",
    ],
  },
  {
    category: "التنسيق والإنتاج",
    items: [
      "تنسيق بين التخصصات",
      "مراجعة وتدقيق الرسومات",
      "إدارة التغييرات والتعديلات",
      "دعم فني أثناء التنفيذ",
    ],
  },
  {
    category: "الخبرة التقنية",
    items: [
      "AutoCAD و Revit",
      "SketchUp و 3ds Max",
      "Lumion و V-Ray",
      "Adobe Creative Suite",
    ],
  },
];

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="capabilities"
      className="section-padding bg-primary text-primary-foreground"
      ref={ref}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold mb-4 block">
            القدرات التنفيذية
          </span>
          <h2 className="heading-section mb-6">قدراتنا الإنتاجية</h2>
          <div className="divider-accent mx-auto mb-6" />
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            نمتلك الخبرة والأدوات اللازمة لتقديم حزم تصميم متكاملة جاهزة للتنفيذ.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 p-8"
            >
              <h3 className="heading-subsection mb-6 text-accent">
                {capability.category}
              </h3>
              <ul className="space-y-4">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-primary-foreground/70 mb-6">
            هل تحتاج شريكًا موثوقًا لمشروعك القادم؟
          </p>
          <a href="#contact" className="btn-accent inline-block">
            تواصل معنا الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
};
