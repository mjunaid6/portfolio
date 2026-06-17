import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import '../index.css';

type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  liveUrl?: string;
  images?: string[];
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            bg-card border border-border rounded-xl
            w-full max-w-2xl
            max-h-[90vh] overflow-y-auto scrollbar-none
            p-5 sm:p-8
            relative
          "
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute top-3 right-3
              p-2 rounded-md
              text-muted-foreground
              hover:text-foreground hover:bg-secondary
              transition
            "
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1 text-xs
                  rounded-full
                  bg-secondary text-secondary-foreground
                  hover:bg-primary hover:text-primary-foreground
                  transition-colors
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary/80 hover:text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary/80 hover:text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
              {project.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => window.open(image, "_blank", "noopener,noreferrer")}
                  alt={`${project.title} ${index + 2}`}
                  className="m-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:opacity-80 transition"
                />
              ))}
            </div>)}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
