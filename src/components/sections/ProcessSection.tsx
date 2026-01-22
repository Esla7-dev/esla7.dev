import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Pencil, Wrench, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "التصميم",
    subtitle: "Design",
    description:
      "نبدأ بفهم رؤيتك واحتياجاتك، ثم نطور مفهومًا تصميميًا يجمع بين الإبداع والواقعية التنفيذية.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "التطوير",
    subtitle: "Development",
    description:
      "نحول المفهوم إلى تصاميم تفصيلية ورسومات تقنية متكاملة تراعي جميع الجوانب الإنشائية.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "الإنتاج",
    subtitle: "Production",
    description:
      "نعد رسومات تنفيذية ورسومات ورش عمل دقيقة تمكّن المقاولين من التنفيذ بثقة ووضوح.",
  },
  {
    icon: HeadphonesIcon,
    number: "04",
    title: "الدعم",
    subtitle: "Support",
    description:
      "نقدم دعمًا مستمرًا خلال مرحلة التنفيذ لضمان تطابق النتيجة النهائية مع التصميم المعتمد.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold mb-4 block">
            منهجية العمل
          </span>
          <h2 className="heading-section text-foreground mb-6">كيف نعمل</h2>
          <div className="divider-accent mx-auto mb-6" />
          <p className="text-body">
            منهجية متكاملة تضمن انتقالًا سلسًا من الفكرة الأولى إلى التنفيذ
            النهائي.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Card */}
                <div className="relative z-10 bg-background">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center shadow-elevated">
                    <step.icon className="text-primary-foreground" size={32} />
                  </div>
                  <span className="text-accent font-bold text-lg mb-2 block">
                    {step.number}
                  </span>
                  <h3 className="heading-subsection text-foreground mb-1">
                    {step.title}
                  </h3>
                  <span className="text-muted-foreground text-sm mb-4 block">
                    {step.subtitle}
                  </span>
                  <p className="text-body text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
