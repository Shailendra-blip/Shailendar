import { useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Users,
  CheckCircle2,
  BookOpen,
  Info
} from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0A0A0F] border border-[#24242D] shadow-2xl z-10 my-8">
        {/* Top colored accent line */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: event.accentColor }}
        />

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full font-medium border"
                  style={{
                    backgroundColor: `${event.accentColor}18`,
                    color: event.accentColor,
                    borderColor: `${event.accentColor}40`,
                  }}
                >
                  {event.categoryLabel}
                </span>
                <span className="text-[#A1A1AA]/50">·</span>
                <span className="text-[#A1A1AA] font-mono">{event.mode}</span>
                {event.isDemo && (
                  <span className="text-[11px] text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-2 py-0.5 rounded font-mono">
                    Demo Event
                  </span>
                )}
              </div>

              <h2
                id="event-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight leading-snug"
              >
                {event.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-lg text-[#A1A1AA] hover:text-[#FF2DAA] hover:bg-[#050505] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#050505] border border-[#24242D] text-xs">
            <div className="flex items-center gap-2 text-[#A1A1AA]">
              <Calendar className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <span className="text-[#F5F5F7]">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#A1A1AA]">
              <Clock className="w-4 h-4 text-[#FF2DAA] shrink-0" />
              <span className="text-[#F5F5F7]">{event.time}</span>
            </div>
            <div className="sm:col-span-2 flex items-start gap-2 text-[#A1A1AA]">
              <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <span className="text-[#F5F5F7]">{event.venue}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-[#F5F5F7]">
              About This Session
            </h3>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[#F5F5F7] mb-3">
                Session Agenda
              </h3>
              <div className="space-y-2 border-l-2 border-[#24242D] ml-2 pl-4">
                {event.agenda.map((slot, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
                    <span className="text-xs font-mono text-[#00AEEF] font-medium">
                      {slot.time}
                    </span>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      {slot.activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites & Takeaways */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2">
                Prerequisites
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {event.prerequisites.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#00AEEF] mt-0.5">›</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2">
                Key Takeaways
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {event.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span className="text-[#F5F5F7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Speaker / Facilitator */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#24242D]">
              <h4 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2">
                Session Facilitator
              </h4>
              {event.speakers.map((spk, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#050505] border border-[#24242D] flex items-center justify-center text-xs font-bold text-[#00AEEF]">
                    {spk.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F5F5F7]">
                      {spk.name}
                    </div>
                    <div className="text-xs text-[#A1A1AA]">
                      {spk.role} · {spk.organization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Registration Notice & Action */}
          <div className="mt-8 pt-5 border-t border-[#24242D] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A1A1AA] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <span>
                {event.status === 'Registrations Open'
                  ? 'Registration active on community portal.'
                  : 'Official RSVP schedule announced in campus Discord.'}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-[#050505] hover:bg-[#0A0A0F] text-[#A1A1AA] hover:text-[#F5F5F7] border border-[#24242D] transition-colors"
              >
                Close
              </button>

              {event.status === 'Registrations Open' ? (
                <a
                  href={event.registrationUrl || 'https://gdg.community.dev'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#00AEEF] hover:bg-[#00AEEF] text-white border border-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] transition-all whitespace-nowrap"
                >
                  <span>Register on Community Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-[#050505] text-[#A1A1AA]/50 border border-[#24242D] cursor-not-allowed whitespace-nowrap"
                >
                  Registration Link Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
