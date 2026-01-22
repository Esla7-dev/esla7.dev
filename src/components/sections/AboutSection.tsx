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
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold mb-4 block">
              من نحن
            </span>
            <h2 className="heading-section text-foreground mb-6">
              شريك تصميم وإنتاج هندسي دولي
            </h2>
            <div className="divider-accent mb-8" />

            <p className="text-body mb-6">
              ESLAH هو مكتب هندسي متكامل يقدم حلول تصميم قابلة للتنفيذ لمشاريع
              داخل مصر وعلى المستوى الدولي. نتموضع كشريك تصميم وإنتاج هندسي،
              وليس مكتب رندرة أو عمل حر.
            </p>

            <p className="text-body mb-8">
              بخبرة تتجاوز 5 سنوات من العمل الفعلي من التصميم إلى التنفيذ، نعتمد
              على فهم عميق لقابلية التنفيذ، التنسيق، المواد، وواقع الموقع، لضمان
              أن كل تصميم يتم تطويره ليُبنى فعليًا، وليس فقط ليُعرض بصريًا.
            </p>

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
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-accent" size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Model Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Egypt Model */}
            <div className="card-architectural p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">مصر</span>
                </div>
                <h3 className="heading-subsection text-foreground">
                  نموذج العمل المحلي
                </h3>
              </div>
              <p className="text-body">
                داخل مصر، نعمل بنموذج التصميم حتى التنفيذ، حيث نقدم خدمات التصميم
                المعماري، التصميم الداخلي، تصميم اللاندسكيب، المعارض، والإشراف
                والتنفيذ على أرض الواقع.
              </p>
            </div>

            {/* International Model */}
            <div className="card-architectural p-8 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Globe className="text-accent-foreground" size={24} />
                </div>
                <h3 className="heading-subsection text-foreground">
                  نموذج العمل الدولي
                </h3>
              </div>
              <p className="text-body">
                على المستوى الدولي، نقدم خدمات تصميم وتطوير إنتاجي واعٍ بالتنفيذ،
                من خلال تسليم مخططات تنفيذية ورسومات إنشائية وتقنية متكاملة تُمكّن
                الشركاء والمقاولين المحليين من التنفيذ بثقة ودقة.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
