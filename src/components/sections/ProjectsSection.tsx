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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold mb-4 block">
            معرض الأعمال
          </span>
          <h2 className="heading-section text-foreground mb-6">
            أعمال مختارة
          </h2>
          <div className="divider-accent mx-auto mb-6" />
          <p className="text-body">
            مجموعة من أبرز مشاريعنا التي تعكس التزامنا بالجودة والإبداع والتنفيذ
            المتقن.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group relative overflow-hidden block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <span className="inline-flex items-center gap-2 text-accent font-medium">
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
