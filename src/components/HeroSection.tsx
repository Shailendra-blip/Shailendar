import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreEvents: () => void;
  onDiscoverCommunity: () => void;
}

export function HeroSection({ onExploreEvents, onDiscoverCommunity }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
      } else if (!e.matches && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };

    mediaQuery.addEventListener('change', handleMotionPreference);

    if (!mediaQuery.matches && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* =========================================================================
          FULL-SCREEN CINEMATIC AI VIDEO BACKGROUND (100VH / OBJECT-COVER)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {!prefersReducedMotion && !videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.02]"
            aria-hidden="true"
          >
            <source
              src="/assets/aistudio/gemini_generated_video_618de1bf_9c608f6b.mp4"
              type="video/mp4"
            />
            <source
              src="/assets/gemini_generated_video_618de1bf_9c608f6b.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          /* Accessible static fallback for reduced-motion or video load failure */
          <div
            className="absolute inset-0 w-full h-full bg-[#050505] bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 40%, rgba(0, 174, 239, 0.25), rgba(5, 5, 5, 0.95))',
            }}
            aria-hidden="true"
          />
        )}

        {/* Primary Requested Subtle Transparent Gradient Overlay (20% - 35% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5, 5, 5, 0.35) 0%, rgba(5, 5, 5, 0.20) 50%, rgba(5, 5, 5, 0.35) 100%)',
          }}
        />

        {/* Delicate edge feathering to blend with navbar top and section bottom */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505]/45 via-transparent to-[#050505]/75" />

        {/* Ambient Cerulean Blue (#00AEEF) and Neon Rose (#FF2DAA) Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#00AEEF]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-80 h-80 rounded-full bg-[#FF2DAA]/12 blur-[130px] pointer-events-none" />
      </div>

      {/* =========================================================================
          HERO CONTENT (ALL PRESERVED WITH CRISP CONTRAST & READABILITY)
          ========================================================================= */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center my-auto">
        {/* Community Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0F]/90 backdrop-blur-md border border-[#24242D] shadow-[0_0_20px_rgba(0,174,239,0.35)] text-xs font-semibold text-[#F5F5F7] mb-6 drop-shadow-md">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]" />
            <span className="w-2 h-2 rounded-full bg-[#FF2DAA] shadow-[0_0_8px_#FF2DAA]" />
          </span>
          <span className="tracking-wide">GDG on Campus • Poornima University</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F7] leading-[1.14] [text-wrap:balance] drop-shadow-[0_4px_24px_rgba(5,5,5,0.95)]">
          Where Developers <br />
          <span className="bg-gradient-to-r from-[#00AEEF] via-[#60E0FF] to-[#FF2DAA] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(0,174,239,0.55)]">
            Meet Possibilities.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F5F5F7] drop-shadow-[0_2px_12px_rgba(5,5,5,0.95)] leading-relaxed max-w-2xl [text-wrap:balance] font-medium">
          A campus community for curious minds, creative builders, and future innovators. Learn new technologies, collaborate on ideas, and build projects that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button: Cerulean Blue with Neon Rose Hover */}
          <button
            type="button"
            onClick={onExploreEvents}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#00AEEF]/35 hover:shadow-[0_0_25px_rgba(255,45,170,0.6)] border border-[#00AEEF] hover:border-[#FF2DAA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
          >
            <span>Explore Events</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Secondary Button: Deep Black with Glass Effect and Cerulean Hover */}
          <button
            type="button"
            onClick={onDiscoverCommunity}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A0A0F]/85 backdrop-blur-md hover:bg-[#0A0A0F] text-[#F5F5F7] hover:text-[#00AEEF] font-semibold text-sm transition-all duration-200 border border-[#24242D] hover:border-[#00AEEF] hover:shadow-[0_0_20px_rgba(0,174,239,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
          >
            <span>Discover Our Community</span>
          </button>
        </div>

        {/* Unboxed Metadata Trust Bar */}
        <div className="mt-12 pt-8 border-t border-[#24242D]/80 backdrop-blur-sm w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#A1A1AA]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
            <span>Sitapura Campus, Jaipur</span>
          </div>
          <span className="hidden sm:inline text-[#24242D]" aria-hidden="true">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2DAA] shadow-[0_0_6px_#FF2DAA]" />
            <span>100% Open & Free</span>
          </div>
          <span className="hidden sm:inline text-[#24242D]" aria-hidden="true">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
            <span>Peer-Led Learning</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#00AEEF] transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase text-[10px] font-mono opacity-80">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#00AEEF]" />
          </a>
        </div>
      </div>
    </section>
  );
}
