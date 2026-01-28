import { FileText, Download } from "lucide-react";

export default function FloatingResumeCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group relative flex items-center gap-3">
        
        {/* View Resume */}
        <a
          href="https://drive.google.com/drive/folders/1r0ajDcANgSC2auYMogjPL2Ai6yTAN_aF?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full border border-border bg-background/80 backdrop-blur-md
                     text-sm font-medium text-foreground
                     hover:border-primary hover:text-primary transition-all hover-lift"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </a>

        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1IMikzhsu5IKf6iuSPzZXpgv7pwZE4jjT"
          download
          className="flex items-center justify-center w-11 h-11 rounded-full
                     bg-primary text-primary-foreground
                     hover:opacity-90 transition-all hover-lift"
          aria-label="Download Resume"
        >
          <Download className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}
