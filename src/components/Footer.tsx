import { Github, Linkedin, MessageSquare, Twitter, Mail, ExternalLink, Heart } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FooterProps {
  onJoinClick: () => void;
}

export function Footer({ onJoinClick }: FooterProps) {
  const currentYear = siteConfig.copyrightYear;

  const quickLinks = [
    { label: 'About Chapter', href: '#about' },
    { label: 'Upcoming Events', href: '#events' },
    { label: 'IoT & Robotics', href: '#iot-robotics' },
    { label: 'Software Projects', href: '#projects' },
    { label: 'Awards & Achievements', href: '#achievements' },
    { label: 'Student Leads', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Get in Touch', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050505] text-[#A1A1AA] border-t border-[#24242D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1 & 2: Branding & Statement */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 text-lg font-bold text-[#F5F5F7] tracking-tight mb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center p-1 shadow-[0_0_10px_rgba(0,174,239,0.2)]">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 6L3 12L7 18" stroke="#00AEEF" />
                  <path d="M17 6L21 12L17 18" stroke="#FF2DAA" />
                  <circle cx="10" cy="12" r="1.5" fill="#00AEEF" />
                  <circle cx="14" cy="12" r="1.5" fill="#FF2DAA" />
                </svg>
              </span>
              <span>{siteConfig.name}</span>
            </div>

            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm mb-4">
              Google Developer Groups on Campus at Poornima University, Jaipur. Where developers meet possibilities through peer workshops, open-source projects, and hands-on learning.
            </p>

            <div className="text-[11px] text-[#A1A1AA]/60 font-mono">
              Sitapura Campus • Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#F5F5F7] uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-[#A1A1AA] hover:text-[#00AEEF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Community Resources */}
          <div>
            <h4 className="text-xs font-bold text-[#F5F5F7] uppercase tracking-wider mb-3">
              Community Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={siteConfig.communityLinks.chapterPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#00AEEF] transition-colors flex items-center gap-1.5"
                >
                  <span>GDG Community Dev</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.communityLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#00AEEF] transition-colors flex items-center gap-1.5"
                >
                  <span>Campus Discord War Room</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.communityLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1AA] hover:text-[#00AEEF] transition-colors flex items-center gap-1.5"
                >
                  <span>Student Code Repositories</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onJoinClick}
                  className="text-[#00AEEF] hover:text-[#FF2DAA] font-semibold text-left transition-colors"
                >
                  Join Chapter Roster →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div>
            <h4 className="text-xs font-bold text-[#F5F5F7] uppercase tracking-wider mb-3">
              Connect Channels
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <a
                href={siteConfig.communityLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center text-[#A1A1AA] hover:text-[#00AEEF] hover:border-[#00AEEF] hover:shadow-[0_0_12px_rgba(0,174,239,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.communityLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center text-[#A1A1AA] hover:text-[#00AEEF] hover:border-[#00AEEF] hover:shadow-[0_0_12px_rgba(0,174,239,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.communityLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center text-[#A1A1AA] hover:text-[#5865F2] hover:border-[#5865F2] hover:shadow-[0_0_12px_rgba(88,101,242,0.3)] transition-all"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.communityLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center text-[#A1A1AA] hover:text-[#FF2DAA] hover:border-[#FF2DAA] hover:shadow-[0_0_12px_rgba(255,45,170,0.3)] transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] text-[#A1A1AA]">
              <span>Direct: </span>
              <a
                href={`mailto:${siteConfig.communityLinks.contactEmail}`}
                className="text-[#00AEEF] hover:text-[#FF2DAA] transition-colors"
              >
                {siteConfig.communityLinks.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Divider */}
        <div className="pt-8 border-t border-[#24242D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]/60">
          <p className="max-w-2xl leading-relaxed text-center md:text-left">
            {siteConfig.disclaimer}
          </p>

          <div className="shrink-0 text-center md:text-right font-mono text-[11px]">
            © {currentYear} {siteConfig.name} • Poornima University
          </div>
        </div>
      </div>
    </footer>
  );
}
