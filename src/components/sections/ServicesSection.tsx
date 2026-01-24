import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Home,
  Palette,
  TreePine,
  Store,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "التصميم المعماري",
    description:
      "تصميم مباني سكنية، تجارية، وإدارية بأسلوب معماري عصري يراعي الوظيفة والجمال.",
  },
  {
    icon: Home,
    title: "التصميم الداخلي",
    description:
      "تصميم المساحات الداخلية بما يحقق الراحة والأناقة مع التركيز على التفاصيل والمواد.",
  },
  {
    icon: Palette,
    title: "التصميم الخارجي والواجهات",
    description:
      "تصميم واجهات مميزة تعكس هوية المشروع وتحقق التوازن بين الجمال والتطبيق العملي.",
  },
  {
    icon: TreePine,
    title: "تصميم اللاندسكيب",
    description:
      "تصميم المساحات الخارجية والحدائق بما يتناسب مع البيئة المحيطة والاستخدام المطلوب.",
  },
  {
    icon: Store,
    title: "تصميم المعارض",
    description:
      "تصميم المعارض والمنشآت المؤقتة بحلول إبداعية قابلة للتنفيذ السريع.",
  },
  {
    icon: FileText,
    title: "الرسومات التنفيذية",
    description:
      "إعداد رسومات تنفيذية ورسومات ورش العمل (Shop & Workshop Drawings) بدقة عالية.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            className="text-accent font-semibold mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.05em" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            خدماتنا
          </motion.span>
          <motion.h2 
            className="heading-section text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ماذا نقدم
          </motion.h2>
          <motion.div 
            className="divider-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.p 
            className="text-body"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            نقدم مجموعة متكاملة من الخدمات الهندسية التي تغطي جميع مراحل المشروع
            من التصميم إلى التنفيذ.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.8 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group card-architectural p-8 hover:border-accent"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-500">
                <service.icon
                  className="text-accent group-hover:text-accent-foreground transition-colors duration-200"
                  size={28}
                />
              </div>
              <h3 className="heading-subsection text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-body">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
