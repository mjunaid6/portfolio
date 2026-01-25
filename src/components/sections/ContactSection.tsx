import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding section-container" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's work together
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-3 px-6 py-4 rounded-xl card-gradient border border-border hover:border-primary transition-all hover-lift"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-foreground">{personal.email}</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl card-gradient border border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground">{personal.location}</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={`mailto:${personal.email}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
        >
          <Mail className="w-5 h-5" />
          Send me an email
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
