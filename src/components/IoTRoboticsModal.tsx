import { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Info,
  Tag
} from 'lucide-react';
import { IoTRoboticsProject } from '../types';

interface IoTRoboticsModalProps {
  project: IoTRoboticsProject | null;
  initialImageIndex?: number;
  onClose: () => void;
}

export function IoTRoboticsModal({
  project,
  initialImageIndex = 0,
  onClose,
}: IoTRoboticsModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(initialImageIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setActiveImageIdx(initialImageIndex);
    setIsZoomed(false);
  }, [project, initialImageIndex]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, activeImageIdx, onClose]);

  if (!project) return null;

  const totalImages = project.galleryImages.length;
  const currentPhoto = project.galleryImages[activeImageIdx] || project.galleryImages[0];

  const handlePrev = () => {
    if (totalImages <= 1) return;
    setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const handleNext = () => {
    if (totalImages <= 1) return;
    setActiveImageIdx((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="iot-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0A0A0F] border border-[#24242D] shadow-2xl z-10 flex flex-col my-auto">
        {/* Top colored accent indicator */}
        <div
          className="h-1.5 w-full shrink-0"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#24242D] shrink-0">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: project.accentColor, color: project.accentColor }}
            />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A1A1AA]">
              Real Hardware Photograph Showcase
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FF2DAA] hover:bg-[#050505] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            aria-label="Close dialog (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto">
          {/* Main Large Photograph Viewer / Lightbox */}
          <div className="relative rounded-xl overflow-hidden bg-[#050505] border border-[#24242D] group shadow-lg">
            <div className={`relative flex items-center justify-center transition-all duration-200 ${
              isZoomed ? 'min-h-[500px] md:min-h-[620px]' : 'h-72 sm:h-96 md:h-[460px]'
            }`}>
              <img
                src={currentPhoto.url}
                alt={currentPhoto.altText}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (currentPhoto.url.includes('firefighting')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__3__d337ce08.jpeg';
                  else if (currentPhoto.url.includes('control_panel')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__2__956e6554.jpeg';
                  else if (currentPhoto.url.includes('sensor_robotic')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__1__b2ff7eac.jpeg';
                  else if (currentPhoto.url.includes('smart_automation')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM_e6e2a6f2.jpeg';
                  else target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.26_PM_b475f903.jpeg';
                }}
                className={`w-full h-full select-none transition-all duration-300 ${
                  isZoomed ? 'object-contain' : 'object-contain sm:object-cover'
                }`}
              />

              {/* Prev / Next Navigation Buttons */}
              {totalImages > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous photograph (Left Arrow)"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0A0A0F]/90 hover:bg-[#00AEEF] text-white border border-[#24242D] hover:border-[#FF2DAA] backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next photograph (Right Arrow)"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0A0A0F]/90 hover:bg-[#00AEEF] text-white border border-[#24242D] hover:border-[#FF2DAA] backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Lightbox Controls Overlay: Photo Counter & Zoom */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#050505]/90 text-[#F5F5F7] border border-[#24242D] backdrop-blur-sm">
                  Photo {activeImageIdx + 1} of {totalImages}
                </span>

                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="pointer-events-auto p-1.5 rounded-md bg-[#050505]/90 hover:bg-[#0A0A0F] text-[#A1A1AA] hover:text-[#00AEEF] border border-[#24242D] backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                  aria-label={isZoomed ? 'Fit to frame' : 'Expand full image'}
                  title={isZoomed ? 'Fit to frame' : 'Expand full image'}
                >
                  {isZoomed ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Photo Caption Strip */}
            {currentPhoto.caption && (
              <div className="px-4 py-2.5 bg-[#0A0A0F] border-t border-[#24242D] text-xs text-[#A1A1AA] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span>{currentPhoto.caption}</span>
              </div>
            )}
          </div>

          {/* Thumbnail Gallery (when multiple images exist) */}
          {totalImages > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setActiveImageIdx(idx);
                    setIsZoomed(false);
                  }}
                  className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIdx === idx
                      ? 'border-[#00AEEF] ring-2 ring-[#00AEEF]/40 shadow-[0_0_12px_rgba(0,174,239,0.35)]'
                      : 'border-[#24242D] opacity-60 hover:opacity-100 hover:border-[#00AEEF]'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img
                    src={img.url}
                    alt={img.altText}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (img.url.includes('firefighting')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__3__d337ce08.jpeg';
                      else if (img.url.includes('control_panel')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__2__956e6554.jpeg';
                      else if (img.url.includes('sensor_robotic')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__1__b2ff7eac.jpeg';
                      else if (img.url.includes('smart_automation')) target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM_e6e2a6f2.jpeg';
                      else target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.26_PM_b475f903.jpeg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Section */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: `${project.accentColor}18`,
                    color: project.accentColor,
                    borderColor: `${project.accentColor}40`,
                  }}
                >
                  {project.categories.join(' · ')}
                </span>
                <span className="text-[#A1A1AA]/50">·</span>
                <span className="text-xs font-mono text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-2 py-0.5 rounded">
                  {project.prototypeStatus}
                </span>
              </div>

              <h2
                id="iot-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight"
              >
                {project.title}
              </h2>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Technology Tags */}
            <div>
              <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Technology Tags</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologyTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-[#050505] text-[#A1A1AA] border border-[#24242D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware Components Breakdown */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Hardware Components Visible in Photograph</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.hardwareComponents.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#050505] border border-[#24242D]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <span className="text-[#F5F5F7]">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Evaluation Note */}
            {project.notes && (
              <div className="p-3.5 rounded-xl bg-[#050505] border border-[#00AEEF]/30 text-xs text-[#A1A1AA]">
                <strong className="font-semibold text-[#00AEEF]">
                  Engineering Scope Note:
                </strong>{' '}
                {project.notes}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-4 border-t border-[#24242D] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-[#A1A1AA] font-mono">
            Keyboard: ← / → navigate · Esc close
          </span>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#050505] hover:bg-[#00AEEF] text-[#F5F5F7] hover:text-white border border-[#24242D] hover:border-[#FF2DAA] transition-all"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
