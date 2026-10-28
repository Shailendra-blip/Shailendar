import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { eventsData } from '../data/events';
import { EventItem, EventCategory } from '../types';
import { EventModal } from './EventModal';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'all', label: 'All Sessions' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'tech_talks', label: 'Tech Talks' },
    { id: 'community', label: 'Community' },
  ];

  const filteredEvents =
    selectedCategory === 'all'
      ? eventsData
      : eventsData.filter((evt) => evt.category === selectedCategory);

  return (
    <section
      id="events"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
              <span>Workshops & Hackathons</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
              Explore. Learn. Build.
            </h2>
            <p className="mt-3 text-base text-[#A1A1AA]">
              Hands-on technical workshops, competitive hackathons, and speaker sessions designed for student developers.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A0A0F] border border-[#24242D] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00AEEF] text-white shadow-[0_0_15px_rgba(0,174,239,0.4)]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#24242D]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Data Clarification Notice */}
        <div className="mt-8 flex items-center justify-between p-3.5 rounded-xl bg-[#0A0A0F] border border-[#24242D] text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF] inline-block shrink-0" />
            <span>
              All listings below represent <strong>sample/demo event schedules</strong> for the technical evaluation. Real registration links are activated when session dates are verified with university faculty.
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-[#A1A1AA] shrink-0">
            {filteredEvents.length} events found
          </span>
        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0A0A0F] border border-[#24242D] hover:border-[#FF2DAA] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(255,45,170,0.22)] overflow-hidden"
            >
              {/* Card Graphical Header */}
              <div
                className="relative h-32 p-5 flex flex-col justify-between overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.12) 0%, rgba(10, 10, 15, 0.95) 100%)',
                }}
              >
                {/* Decorative SVG Pattern */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#00AEEF" strokeWidth="2">
                    <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="25" />
                    <path d="M50 10 L50 90 M10 50 L90 50" />
                  </svg>
                </div>

                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#00AEEF]/15 text-[#00AEEF] border border-[#00AEEF]/30">
                    {event.categoryLabel}
                  </span>

                  <span className="text-[11px] font-mono text-[#A1A1AA] bg-[#050505] px-2 py-0.5 rounded border border-[#24242D]">
                    {event.mode}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="z-10 flex items-center justify-between text-xs">
                  <span
                    className={`font-medium ${
                      event.status === 'Registrations Open'
                        ? 'text-[#00AEEF] text-glow-cerulean'
                        : 'text-[#FF2DAA]'
                    }`}
                  >
                    {event.status}
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] font-mono">Demo Data</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-2.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                    <span>{event.date}</span>
                    <span aria-hidden="true">·</span>
                    <Clock className="w-3.5 h-3.5 text-[#A1A1AA] shrink-0" />
                    <span>{event.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight leading-snug group-hover:text-[#00AEEF] transition-colors">
                    {event.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                    {event.shortDescription}
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 pt-4 border-t border-[#24242D] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalEvent(event)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00AEEF] hover:text-[#FF2DAA] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>View Details & Agenda</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {event.status === 'Registrations Open' ? (
                    <button
                      type="button"
                      onClick={() => setActiveModalEvent(event)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white shadow-sm hover:shadow-[0_0_15px_rgba(255,45,170,0.5)] border border-[#00AEEF] hover:border-[#FF2DAA] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Register
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#A1A1AA] font-mono">Coming Soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
