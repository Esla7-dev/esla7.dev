import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { getAllProjects, type Project } from "@/data/projects";

const categories = ["الكل", "سكني", "تجاري", "داخلي", "خارجي"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const projects = getAllProjects();

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "الكل" || project.category === selectedCategory;
    const searchMatch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-background-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-display mb-4">أعمالنا</h1>
            <p className="text-body text-lg text-muted-foreground">
              استكشف مجموعة من مشاريعنا المتميزة في التصميم المعماري والداخلي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="ابحث عن مشروع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-background-light text-foreground hover:bg-background-light/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                لم يتم العثور على مشاريع مطابقة
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium">عرض التفاصيل</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-background">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="heading-subsection mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
