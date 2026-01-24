import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, getProjectsByCategory } from "@/data/projects";

const categories = ["الكل", "سكني", "تجاري", "داخلي", "لاندسكيب"];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <section id="projects" className="section-padding bg-secondary" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span 
            className="text-accent font-semibold mb-4 block"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.05em" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            معرض الأعمال
          </motion.span>
          <motion.h2 
            className="heading-section text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            أعمال مختارة
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
            مجموعة من أبرز مشاريعنا التي تعكس التزامنا بالجودة والإبداع والتنفيذ
            المتقن.
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: 1 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.5 + (index * 0.15),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -10,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group relative overflow-hidden block shadow-elevated hover:shadow-hero"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 right-0 left-0 p-8">
                    <span className="text-accent text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 mb-4">
                      {project.location}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:translate-x-[-5px] transition-transform duration-200">
                      عرض المشروع
                      <ArrowLeft size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 btn-outline"
          >
            عرض جميع الأعمال
            <ArrowLeft size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
