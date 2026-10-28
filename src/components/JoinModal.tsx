import { useEffect } from 'react';
import { X, ExternalLink, MessageSquare, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { siteConfig } from '../config/site';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#0A0A0F] border border-[#24242D] shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Gradient Bar in Cerulean to Neon Rose */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#00AEEF] via-[#FF2DAA] to-[#00AEEF]" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00AEEF] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>POORNIMA UNIVERSITY CHAPTER</span>
              </div>
              <h2
                id="join-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight"
              >
                Join GDG on Campus
              </h2>
              <p className="mt-1.5 text-sm text-[#A1A1AA]">
                Become part of our developer ecosystem at Poornima University, Jaipur. Open to all branches and years.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-lg text-[#A1A1AA] hover:text-[#FF2DAA] hover:bg-[#050505] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Steps */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050505] border border-[#24242D]">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F7]">
                  Official Community Portal
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Sign in with your Google account on the community platform and hit &quot;Join&quot; to receive official event invites and badges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050505] border border-[#24242D]">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#FF2DAA]/10 text-[#FF2DAA] border border-[#FF2DAA]/20 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F7]">
                  Campus Discord & Study Jams
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Join our chat server to find hackathon teammates, share code questions, and get peer review on technical projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#050505] border border-[#24242D]">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F7]">
                  Attend Workshops & Hackathons
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Participate in monthly in-person labs in Sitapura campus and prepare for the annual Solution Challenge.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="mt-4 p-3 rounded-lg bg-[#050505] border border-[#00AEEF]/30 text-xs text-[#A1A1AA] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span>Membership is 100% free and open to all enrolled students at Poornima University.</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={siteConfig.communityLinks.chapterPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#00AEEF] text-white font-medium text-sm transition-all border border-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <span>Join on Community Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.communityLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#050505] hover:bg-[#0A0A0F] text-[#F5F5F7] hover:text-[#00AEEF] font-medium text-sm transition-colors border border-[#24242D] hover:border-[#00AEEF] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#5865F2]" />
              <span>Join Discord</span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-[#24242D] text-center">
            <p className="text-[11px] text-[#A1A1AA]/70">
              Need assistance? Email{' '}
              <a
                href={`mailto:${siteConfig.communityLinks.contactEmail}`}
                className="underline hover:text-[#00AEEF] transition-colors"
              >
                {siteConfig.communityLinks.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
