import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onJoinClick: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'IoT & Robotics', href: '#iot-robotics' },
    { label: 'Software', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#24242D] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element with Futuristic Cerulean/Rose Icon) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[#F5F5F7] whitespace-nowrap shrink-0 transition-opacity hover:opacity-95"
          >
            {/* Custom geometric symbol with Cerulean Blue & Neon Rose */}
            <span
              className="w-7 h-7 rounded-lg bg-[#0A0A0F] border border-[#24242D] flex items-center justify-center p-1 shadow-sm group-hover:border-[#00AEEF] group-hover:shadow-[0_0_12px_rgba(0,174,239,0.35)] transition-all"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 6L3 12L7 18" stroke="#00AEEF" />
                <path d="M17 6L21 12L17 18" stroke="#FF2DAA" />
                <circle cx="10" cy="12" r="1.5" fill="#00AEEF" />
                <circle cx="14" cy="12" r="1.5" fill="#FF2DAA" />
              </svg>
            </span>
            <span className="tracking-tight">GDG Campus Connect</span>
          </a>

          {/* Zone 2: Navigation Links (Single Line, Cerulean hover, Neon Rose indicator) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#A1A1AA]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#F5F5F7] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
              >
                <span>{link.label}</span>
                {/* Neon Rose underline accent */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF2DAA] shadow-[0_0_8px_#FF2DAA] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            {/* Prominent Join Community button with Cerulean Blue & Neon Rose hover */}
            <button
              type="button"
              onClick={onJoinClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#00AEEF] hover:bg-[#00AEEF]/90 rounded-lg shadow-md shadow-[#00AEEF]/30 hover:shadow-[0_0_20px_rgba(255,45,170,0.55)] border border-[#00AEEF] hover:border-[#FF2DAA] transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] active:scale-[0.98] cursor-pointer"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-[#F5F5F7] bg-[#0A0A0F] border border-[#24242D] hover:border-[#00AEEF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF2DAA]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/98 backdrop-blur-2xl border-b border-[#24242D] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#0A0A0F] hover:border-l-2 hover:border-[#FF2DAA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#24242D] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] rounded-lg shadow-sm transition-all"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
