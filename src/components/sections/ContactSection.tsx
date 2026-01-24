import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/email";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Resend
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      if (result.success) {
        // Show success message
        toast.success("تم إرسال الرسالة بنجاح!", {
          description: "سنتواصل معك في أقرب وقت ممكن",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("حدث خطأ أثناء إرسال الرسالة", {
        description: "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span 
              className="text-accent font-semibold mb-4 block"
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.05em" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              تواصل معنا
            </motion.span>
            <motion.h2 
              className="heading-section text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              لنبدأ مشروعك القادم
            </motion.h2>
            <motion.div 
              className="divider-accent mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <motion.p 
              className="text-body mb-10"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              سواء كنت تبحث عن شريك تصميم لمشروعك المحلي أو تحتاج رسومات تنفيذية
              لمشروع دولي، نحن هنا لمساعدتك. تواصل معنا لنناقش كيف يمكننا العمل
              معًا.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "البريد الإلكتروني",
                  value: import.meta.env.VITE_CONTACT_EMAIL,
                  href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
                },
                {
                  icon: MessageCircle,
                  label: "واتساب",
                  value: import.meta.env.VITE_CONTACT_PHONE,
                  href: `https://wa.me/${import.meta.env.VITE_CONTACT_WHATSAPP}`,
                  isLtr: true,
                },
                {
                  icon: Phone,
                  label: "الهاتف (مصر)",
                  value: import.meta.env.VITE_CONTACT_PHONE_EG,
                  href: `tel:${import.meta.env.VITE_CONTACT_PHONE_EG}`,
                  isLtr: true,
                },
              ].map((contact, index) => (
                <motion.div 
                  key={contact.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.1),
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      backgroundColor: "hsl(var(--accent) / 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <contact.icon className="text-accent" size={24} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? "_blank" : undefined}
                      rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="font-medium text-foreground hover:text-accent transition-colors"
                      dir={contact.isLtr ? "ltr" : undefined}
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "hsl(var(--accent) / 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <MapPin className="text-accent" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">العنوان</p>
                  <p className="font-medium text-foreground">{import.meta.env.VITE_CONTACT_LOCATION}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border p-8 shadow-subtle"
            >
              <h3 className="heading-subsection text-foreground mb-6">
                أرسل لنا رسالة
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    الشركة / المؤسسة
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="اسم الشركة (اختياري)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="أخبرنا عن مشروعك..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
