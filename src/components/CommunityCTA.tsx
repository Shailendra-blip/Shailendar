import { ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

interface CommunityCTAProps {
  onJoinClick: () => void;
  onExploreProjects: () => void;
}

export function CommunityCTA({ onJoinClick, onExploreProjects }: CommunityCTAProps) {
  return (
    <section className="relative py-24 bg-[#050505] border-t border-[#24242D] overflow-hidden">
      {/* Decorative Futuristic Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00AEEF]/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[260px] bg-[#FF2DAA]/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-xs font-semibold text-[#00AEEF] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN POORNIMA UNIVERSITY DEVELOPERS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight [text-wrap:balance]">
          Your Next Big Idea Starts Here.
        </h2>

        <p className="mt-4 text-base sm:text-xl text-[#F5F5F7] font-medium tracking-wide">
          Learn together. <span className="text-[#00AEEF]">Build together.</span> <span className="text-[#FF2DAA]">Grow together.</span>
        </p>

        <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto">
          Whether you want to build your first web app, contribute to open source, or enter competitive hackathons, our campus chapter provides the resources, peers, and mentorship to help you get there.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00AEEF] hover:bg-[#00AEEF] text-white font-semibold text-sm transition-all border border-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_25px_rgba(255,45,170,0.6)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <span>Join the Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A0A0F] hover:bg-[#0A0A0F] text-[#F5F5F7] hover:text-[#00AEEF] font-semibold text-sm transition-all border border-[#24242D] hover:border-[#00AEEF] hover:shadow-[0_0_15px_rgba(0,174,239,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <span>Explore Projects</span>
            <Code className="w-4 h-4 text-[#A1A1AA]" />
          </button>
        </div>

        <p className="mt-6 text-[11px] text-[#A1A1AA]/70">
          Open to all undergraduate students at Poornima University, Sitapura, Jaipur • Free Membership
        </p>
      </div>
    </section>
  );
}
