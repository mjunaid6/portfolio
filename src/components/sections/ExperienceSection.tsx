import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding section-container" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Where I've worked
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                {/* Icon */}
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                  <Briefcase className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Content */}
                <div className="p-6 rounded-xl card-gradient border border-border hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
