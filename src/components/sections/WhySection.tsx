import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Clock,
  Users,
  Zap,
  Award,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "موثوقية عالية",
    description:
      "نلتزم بالمواعيد والمعايير، ونضمن جودة التسليم في كل مشروع نتولاه.",
  },
  {
    icon: Clock,
    title: "سرعة في التنفيذ",
    description:
      "نقلل الجداول الزمنية من خلال عمليات مُحكمة وتنسيق فعال بين الفرق.",
  },
  {
    icon: Users,
    title: "شراكة حقيقية",
    description:
      "نعمل كامتداد لفريقك، نفهم تحدياتك ونقدم حلولًا مخصصة لاحتياجاتك.",
  },
  {
    icon: Zap,
    title: "كفاءة تكلفة",
    description:
      "نقدم قيمة عالية بتكلفة تنافسية دون المساس بجودة التصميم أو التنفيذ.",
  },
  {
    icon: Award,
    title: "خبرة عملية",
    description:
      "أكثر من 5 سنوات من الخبرة الفعلية في مشاريع متنوعة محليًا ودوليًا.",
  },
  {
    icon: HeartHandshake,
    title: "دعم مستمر",
    description:
      "نوفر دعمًا تقنيًا مستمرًا خلال مرحلة التنفيذ لضمان نجاح المشروع.",
  },
];

export const WhySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-eslah" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold mb-4 block">
            لماذا نحن
          </span>
          <h2 className="heading-section text-foreground mb-6">
            لماذا ESLAH؟
          </h2>
          <div className="divider-accent mx-auto mb-6" />
          <p className="text-body">
            نتميز بالجمع بين الإبداع التصميمي والوعي التنفيذي لنقدم لك حلولًا
            موثوقة وقابلة للتطبيق.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <reason.icon className="text-accent" size={32} />
              </div>
              <h3 className="heading-subsection text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-body">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
