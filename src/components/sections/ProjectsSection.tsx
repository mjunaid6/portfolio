import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Folder } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding section-container" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured work
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other Projects */}
        {projects.filter(p => !p.featured).length > 0 && (
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
              {projects.filter(p => !p.featured).map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <Folder className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-medium group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate">
                      {project.technologies.join(' • ')}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
