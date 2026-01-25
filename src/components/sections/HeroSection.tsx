import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function HeroSection() {
  const { personal } = portfolioData;
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-container">
      <div className="text-center max-w-4xl mx-auto">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-gradient">{personal.name}</span>
        </motion.h1>
        
        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8"
        >
          {personal.role}
        </motion.p>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12"
        >
          {personal.tagline}
        </motion.p>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personal.socialLinks.leetcode}  
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover-lift"
            aria-label="LeetCode"
          >
            {/* <img src="https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=ffffff" alt="LeetCode" className="w-5 h-5 color-white" /> */}
            <img src="../../../public/leetcode-icon.svg" alt="LeetCode" className="w-5 h-5 color-white" />
          </a>

        </motion.div>
        
        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
