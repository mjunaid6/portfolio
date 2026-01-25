import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
