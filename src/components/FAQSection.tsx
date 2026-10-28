import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faq';

export function FAQSection() {
  // Only one accordion open at a time per requirement
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] mb-2">
            Answers & Clarity
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Everything you need to know about joining, attending workshops, and contributing at Poornima University.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl bg-[#0A0A0F] border transition-all ${
                  isOpen
                    ? 'border-[#00AEEF]/50 shadow-[0_0_15px_rgba(0,174,239,0.15)]'
                    : 'border-[#24242D] hover:border-[#24242D]/80'
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#F5F5F7] hover:text-[#00AEEF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00AEEF]' : 'text-[#A1A1AA]'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#24242D] animate-in fade-in-50 duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
