import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function AboutSection() {
  const { personal, education } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-container" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Get to know me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {personal.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Location</p>
              <p className="text-foreground font-medium">{personal.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Email</p>
              <a 
                href={`mailto:${personal.email}`} 
                className="text-primary link-underline"
              >
                {personal.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-semibold mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col md:flex-row md:items-start gap-4 p-6 rounded-xl card-gradient border border-border"
              >
                <div className="md:w-1/4">
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="font-display font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
