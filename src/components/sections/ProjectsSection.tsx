import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Folder } from "lucide-react";
import ProjectModal from "../ProjectModal";

type Project = typeof portfolioData.projects[number];

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding section-container"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group cursor-pointer relative p-6 rounded-xl card-gradient
                         border border-border hover:border-primary/50
                         transition-all duration-300 hover-lift"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <ExternalLink className="w-5 h-5 text-muted-foreground
                                       group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3
                             group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full
                               bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo (does NOT open modal) */}
              {project.liveUrl && project.liveUrl !== "#" && (
                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        project.liveUrl,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="mt-4 inline-flex items-center text-sm
                               text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="font-display text-2xl font-semibold mb-8 text-center">
              Other Noteworthy Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group cursor-pointer flex items-center gap-4 p-4
                             rounded-lg border border-border
                             hover:border-primary/50 transition-all"
                >
                  <Folder className="w-6 h-6 text-primary flex-shrink-0" />

                  <div className="min-w-0">
                    <h4 className="font-medium group-hover:text-primary
                                   transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate w-full">
                      {project.technologies.join(" • ")}
                    </p>
                  </div>

                  <ExternalLink
                    className="w-4 h-4 text-muted-foreground ml-auto
                               flex-shrink-0 opacity-0
                               group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
