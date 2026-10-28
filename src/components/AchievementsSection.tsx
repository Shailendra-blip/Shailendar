import { useState, useRef } from 'react';
import {
  Award,
  Sparkles,
  Trophy,
  Maximize2,
  Calendar,
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { featuredAchievement, prayogamPhotos } from '../data/achievements';
import { AchievementLightbox } from './AchievementLightbox';

export function AchievementsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  const mainPhoto = prayogamPhotos[0];
  const gridPhotos = prayogamPhotos.slice(1, 5);

  return (
    <section id="achievements" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background radial gradients for futuristic ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#00AEEF]/10 via-[#FF2DAA]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF2DAA]/10 text-[#FF2DAA] border border-[#FF2DAA]/30 mb-4 shadow-[0_0_15px_rgba(255,45,170,0.15)]">
            <Trophy className="w-3.5 h-3.5" />
            <span>CELEBRATING EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F7] tracking-tight mb-4">
            Ideas That Earn{' '}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#FF2DAA] to-[#00AEEF] bg-clip-text text-transparent">
              Recognition.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Celebrating the passion, creativity, and achievements of our student innovators at Poornima
            University. From building innovative projects to earning recognition at university events, our
            students are turning ideas into impact.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <div className="bg-[#0A0A0F] border border-[#24242D] rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl relative overflow-hidden group hover:border-[#00AEEF]/40 transition-all duration-300">
          {/* Accent glow line at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00AEEF] to-[#FF2DAA]" />

          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#24242D]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00AEEF]/15 text-[#00AEEF] border border-[#00AEEF]/30">
                  Featured Milestone
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#A1A1AA]">
                  <Calendar className="w-3.5 h-3.5 text-[#00AEEF]" />
                  Annual Exhibition
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#A1A1AA]">
                  <MapPin className="w-3.5 h-3.5 text-[#FF2DAA]" />
                  Poornima University, Jaipur
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
                {featuredAchievement.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#00AEEF] mt-1">
                {featuredAchievement.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
              {featuredAchievement.description}
            </p>
          </div>

          {/* Photo Gallery Grid: 1 Large + 4 Balanced smaller photos */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1 Large Featured Photo (Auditorium stage with robot & dignitaries) */}
            <div
              onClick={() => openLightbox(0)}
              className="lg:col-span-7 relative group/main rounded-2xl overflow-hidden border border-[#24242D] bg-[#050505] cursor-pointer hover:border-[#00AEEF]/60 transition-all duration-300 shadow-xl min-h-[320px] sm:min-h-[400px] flex flex-col justify-end"
            >
              <img
                src={mainPhoto.url}
                alt={mainPhoto.altText}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              {/* Overlay Content */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF2DAA]/90 text-white backdrop-blur-md shadow-[0_0_15px_rgba(255,45,170,0.4)]">
                    <Award className="w-3.5 h-3.5" />
                    {mainPhoto.caption}
                  </span>
                  <span className="p-2 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10 group-hover/main:bg-[#00AEEF] group-hover/main:text-black transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover/main:text-[#00AEEF] transition-colors">
                  {mainPhoto.title}
                </h4>
                <p className="text-xs text-[#A1A1AA] line-clamp-2 mt-1">
                  {mainPhoto.altText}
                </p>
              </div>
            </div>

            {/* 4 Smaller Photos in 2x2 Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {gridPhotos.map((photo, idx) => {
                const actualIndex = idx + 1;
                return (
                  <div
                    key={photo.id}
                    onClick={() => openLightbox(actualIndex)}
                    className="relative group/thumb rounded-2xl overflow-hidden border border-[#24242D] bg-[#050505] cursor-pointer hover:border-[#FF2DAA]/60 transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
                  >
                    <img
                      src={photo.url}
                      alt={photo.altText}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

                    <div className="relative z-10 p-3 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 backdrop-blur-sm text-[#FF2DAA] border border-[#FF2DAA]/30">
                          {photo.caption}
                        </span>
                        <Maximize2 className="w-3.5 h-3.5 text-white/70 group-hover/thumb:text-[#00AEEF] transition-colors" />
                      </div>
                      <p className="text-[11px] font-medium text-white truncate mt-1">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row & Gallery Toggle */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#24242D]">
            <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span>
                Displaying genuine student prize distribution & felicitation photographs from Prayogam 2026.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAllModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A0A0F] text-[#F5F5F7] border border-[#24242D] hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all shadow-md active:scale-95"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View All 7 Photographs</span>
              </button>

              <button
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#00AEEF] to-[#007BA7] text-white hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all active:scale-95"
              >
                <span>Launch Interactive Gallery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Highlight Card */}
        {featuredAchievement.videoUrl && (
          <div className="bg-[#0A0A0F] border border-[#24242D] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl hover:border-[#FF2DAA]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Info */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/30 mb-3">
                  <Play className="w-3 h-3 fill-[#00AEEF]" />
                  <span>Ceremony Highlight Video</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight mb-2">
                  GDG Felicitation 2026 Moment
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  "Started with curiosity… ended with recognition. Grateful for this GDG Felicitation 2026
                  moment." An exciting real video capturing the milestone student felicitation at Poornima
                  University.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                    <span>Real video capture from the felicitation ceremony</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2DAA]" />
                    <span>Interactive controls with audio toggle & pause</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={toggleVideoPlay}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#FF2DAA] text-white hover:bg-[#FF2DAA]/90 hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] transition-all active:scale-95"
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    <span>{isVideoPlaying ? 'Pause Video' : 'Play Highlight Video'}</span>
                  </button>

                  <button
                    onClick={toggleVideoMute}
                    className="p-2.5 rounded-xl bg-[#24242D]/60 text-[#A1A1AA] hover:text-[#00AEEF] hover:bg-[#24242D] transition-colors"
                    title={isVideoMuted ? 'Unmute' : 'Mute'}
                    aria-label={isVideoMuted ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-[#24242D] bg-black shadow-2xl group/player aspect-video">
                  <video
                    ref={videoRef}
                    src={featuredAchievement.videoUrl}
                    className="w-full h-full object-contain bg-black cursor-pointer"
                    playsInline
                    loop
                    muted={isVideoMuted}
                    onClick={toggleVideoPlay}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />

                  {/* Play overlay button if paused */}
                  {!isVideoPlaying && (
                    <div
                      onClick={toggleVideoPlay}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00AEEF]/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,174,239,0.6)] group-hover/player:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-black ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Corner indicator */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#F5F5F7] border border-white/10 pointer-events-none">
                    Felicitation Highlight • 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Component */}
      <AchievementLightbox
        photos={prayogamPhotos}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />

      {/* View All Photos Full Modal */}
      {showAllModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-fade-in"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0F] border border-[#24242D] rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#24242D]">
              <div>
                <span className="text-xs font-semibold text-[#FF2DAA] uppercase tracking-wider">
                  Prayogam 2026 Archive
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mt-1">
                  All Ceremony & Felicitation Photographs
                </h3>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-2 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-[#24242D] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Photo Grid */}
            <div className="flex-1 overflow-y-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pr-1 scrollbar-thin">
              {prayogamPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => {
                    setShowAllModal(false);
                    openLightbox(idx);
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-[#24242D] bg-[#050505] cursor-pointer hover:border-[#00AEEF] transition-all aspect-[4/3] flex flex-col justify-end"
                >
                  <img
                    src={photo.url}
                    alt={photo.altText}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  <div className="relative z-10 p-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 text-[#00AEEF] border border-[#00AEEF]/30">
                      {photo.caption}
                    </span>
                    <h5 className="text-xs font-semibold text-white truncate mt-1">
                      {photo.title}
                    </h5>
                    <p className="text-[10px] text-[#A1A1AA] truncate">
                      Click to view in high resolution
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#24242D] flex items-center justify-between text-xs text-[#A1A1AA]">
              <span>7 Original Photographs • Prayogam 2026</span>
              <button
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 rounded-xl bg-[#24242D] text-white hover:bg-[#24242D]/80 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
