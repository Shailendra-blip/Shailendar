import { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0A0A0F] border border-[#24242D] shadow-2xl z-10 my-8">
        {/* Top colored accent line */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full font-medium border"
                  style={{
                    backgroundColor: `${project.accentColor}18`,
                    color: project.accentColor,
                    borderColor: `${project.accentColor}40`,
                  }}
                >
                  {project.categoryLabel}
                </span>
                <span className="text-[#A1A1AA]/50">·</span>
                <span className="text-[11px] text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-2 py-0.5 rounded font-mono">
                  Demo Project Showcase
                </span>
              </div>

              <h2
                id="project-modal-title"
                className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight"
              >
                {project.title}
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

          {/* Metrics strip if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#050505] border border-[#24242D] text-center">
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-base sm:text-lg font-bold font-mono text-[#F5F5F7]">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem Solved */}
          <div className="mt-6">
            <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>Problem Addressed</span>
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed bg-[#050505] p-3 rounded-lg border border-[#24242D]">
              {project.problemSolved}
            </p>
          </div>

          {/* Full Description */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-1.5">
              System Architecture & Overview
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-5">
            <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2">
              Key Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span className="text-[#F5F5F7]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="mt-6">
            <h3 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#050505] text-[#A1A1AA] border border-[#24242D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contributors */}
          {project.contributors && project.contributors.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[#24242D]">
              <h4 className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2">
                Project Mentors & Roles
              </h4>
              <div className="flex flex-wrap gap-4 text-xs text-[#A1A1AA]">
                {project.contributors.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
                    <span className="font-medium text-[#F5F5F7]">
                      {c.name}
                    </span>
                    <span className="text-[#A1A1AA]/60">({c.role})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-8 pt-5 border-t border-[#24242D] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-[#A1A1AA] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
              <span>Demo project crafted for GDG Campus technical showcase.</span>
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-[#050505] hover:bg-[#0A0A0F] text-[#A1A1AA] hover:text-[#F5F5F7] border border-[#24242D] transition-colors"
              >
                Close
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#00AEEF] hover:bg-[#00AEEF] text-white border border-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] transition-all whitespace-nowrap"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
