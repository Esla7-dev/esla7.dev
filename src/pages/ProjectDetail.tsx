import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MapPin, Calendar, Users, Ruler, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProjectById, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-section text-foreground mb-4">المشروع غير موجود</h1>
          <Link to="/#projects" className="btn-primary inline-block">
            العودة للمشاريع
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        <div className="absolute bottom-0 right-0 left-0 section-container pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowRight size={18} />
              العودة للمشاريع
            </Link>
            <span className="text-accent font-semibold block mb-3">
              {project.category}
            </span>
            <h1 className="heading-display text-primary-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {project.year}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-section text-foreground mb-6">نبذة عن المشروع</h2>
                <div className="divider-accent mb-6" />
                <p className="text-body text-lg leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="card-architectural p-8">
                  <h3 className="heading-subsection text-foreground mb-4">التحدي</h3>
                  <p className="text-body">{project.challenge}</p>
                </div>
                <div className="card-architectural p-8 border-accent">
                  <h3 className="heading-subsection text-foreground mb-4">الحل</h3>
                  <p className="text-body">{project.solution}</p>
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-section text-foreground mb-6">معرض الصور</h2>
                <div className="divider-accent mb-8" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">
                          {image.caption || "عرض الصورة"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-section text-foreground mb-6">مميزات المشروع</h2>
                <div className="divider-accent mb-8" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-secondary rounded"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-architectural p-8 sticky top-24"
              >
                <h3 className="heading-subsection text-foreground mb-6">
                  تفاصيل المشروع
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">العميل</p>
                      <p className="font-medium text-foreground">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">الموقع</p>
                      <p className="font-medium text-foreground">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Ruler className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">المساحة</p>
                      <p className="font-medium text-foreground">{project.area}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">المدة</p>
                      <p className="font-medium text-foreground">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Calendar className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">سنة الإنجاز</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    الخدمات المقدمة
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-sm text-foreground rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/#contact"
                  className="btn-accent w-full text-center mt-8 block"
                >
                  تواصل معنا لمشروعك
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <h2 className="heading-section text-foreground mb-8">مشاريع مشابهة</h2>
            <div className="divider-accent mb-12" />
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group relative overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedProject.mainImage}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 right-0 left-0 p-6">
                      <span className="text-accent text-sm font-medium mb-2 block">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary-foreground">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 left-6 p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label="إغلاق"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label="الصورة السابقة"
          >
            <ChevronRight size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-primary-foreground hover:text-accent transition-colors"
            aria-label="الصورة التالية"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={project.images[currentImageIndex].src}
              alt={project.images[currentImageIndex].alt}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />
            {project.images[currentImageIndex].caption && (
              <p className="text-center text-primary-foreground mt-4">
                {project.images[currentImageIndex].caption}
              </p>
            )}
            <p className="text-center text-primary-foreground/60 mt-2">
              {currentImageIndex + 1} / {project.images.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
