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
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold mb-4 block">
              تواصل معنا
            </span>
            <h2 className="heading-section text-foreground mb-6">
              لنبدأ مشروعك القادم
            </h2>
            <div className="divider-accent mb-8" />

            <p className="text-body mb-10">
              سواء كنت تبحث عن شريك تصميم لمشروعك المحلي أو تحتاج رسومات تنفيذية
              لمشروع دولي، نحن هنا لمساعدتك. تواصل معنا لنناقش كيف يمكننا العمل
              معًا.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                  <a
                    href="mailto:esla7.dev@gmail.com"
                    className="font-medium text-foreground hover:text-accent transition-colors"
                  >
                    esla7.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">واتساب</p>
                  <a
                    href="https://wa.me/971588927001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-accent transition-colors"
                    dir="ltr"
                  >
                    +971 58 892 7001
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">الهاتف</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+971588927001"
                      className="block font-medium text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      +971 58 892 7001 (UAE)
                    </a>
                    <a
                      href="tel:+201094697569"
                      className="block font-medium text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      +20 109 469 7569 (EG)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">العنوان</p>
                  <p className="font-medium text-foreground">القاهرة، مصر</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
