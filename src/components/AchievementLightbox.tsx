import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Award } from 'lucide-react';
import { AchievementPhoto } from '../types';

interface AchievementLightboxProps {
  photos: AchievementPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function AchievementLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: AchievementLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Reset zoom on index change or close
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Awards Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF2DAA]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Lightbox Container */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[92vh] mx-auto p-4 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between z-10 px-2 py-3 bg-[#0A0A0F]/80 backdrop-blur-md rounded-2xl border border-[#24242D] shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF2DAA]/15 text-[#FF2DAA] border border-[#FF2DAA]/30">
              <Award className="w-3.5 h-3.5" />
              {currentPhoto.caption}
            </span>
            <span className="text-xs text-[#A1A1AA] font-mono">
              Photo {currentIndex + 1} of {photos.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl text-[#A1A1AA] hover:text-[#00AEEF] hover:bg-[#24242D]/60 transition-colors"
              title={isZoomed ? 'Zoom out' : 'Zoom in'}
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#24242D]/60 transition-colors"
              title="Close (Esc)"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Image Display */}
        <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden select-none">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#0A0A0F]/90 text-white border border-[#24242D] hover:border-[#00AEEF]/60 hover:text-[#00AEEF] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all transform active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Photo */}
          <div
            className={`relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.altText}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain rounded-xl border border-[#24242D] shadow-[0_0_40px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#0A0A0F]/90 text-white border border-[#24242D] hover:border-[#FF2DAA]/60 hover:text-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.4)] transition-all transform active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div className="z-10 bg-[#0A0A0F]/90 backdrop-blur-md rounded-2xl border border-[#24242D] p-3 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-[#F5F5F7] tracking-wide">
              {currentPhoto.title}
            </h4>
            <p className="text-xs text-[#A1A1AA] line-clamp-1">
              {currentPhoto.altText}
            </p>
          </div>

          {/* Thumbnail preview row */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 scrollbar-thin">
            {photos.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setIsZoomed(false);
                  onNavigate(idx);
                }}
                className={`relative w-11 h-11 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                  idx === currentIndex
                    ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/40 scale-105'
                    : 'border-[#24242D] opacity-60 hover:opacity-100 hover:border-[#A1A1AA]/50'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              >
                <img src={p.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
