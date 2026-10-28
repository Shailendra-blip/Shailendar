import { useState } from 'react';
import {
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Camera,
  Eye,
  SlidersHorizontal,
  Bot
} from 'lucide-react';
import { iotProjectsData } from '../data/iotProjects';
import { IoTRoboticsFilter, IoTRoboticsProject } from '../types';
import { IoTRoboticsModal } from './IoTRoboticsModal';

export function IoTRoboticsSection() {
  const [activeFilter, setActiveFilter] = useState<IoTRoboticsFilter>('All Projects');
  const [selectedProject, setSelectedProject] = useState<IoTRoboticsProject | null>(null);

  const filterTabs: IoTRoboticsFilter[] = [
    'All Projects',
    'IoT',
    'Robotics',
    'Automation',
    'Embedded Systems',
  ];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? iotProjectsData
      : iotProjectsData.filter((proj) =>
          proj.categories.includes(
            activeFilter as 'IoT' | 'Robotics' | 'Automation' | 'Embedded Systems'
          )
        );

  return (
    <section
      id="iot-robotics"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-xs font-semibold text-[#00AEEF] mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>PHYSICAL COMPUTING & ROBOTICS LAB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight [text-wrap:balance]">
              From Ideas to Intelligent Systems
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed [text-wrap:balance]">
              Exploring the world of IoT, embedded systems, automation, and robotics through hands-on engineering projects.
            </p>
          </div>

          {/* Interactive Technology Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A0A0F] border border-[#24242D] overflow-x-auto max-w-full shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab
                    ? 'bg-[#00AEEF] text-white shadow-[0_0_15px_rgba(0,174,239,0.4)]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#050505]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Real Hardware Banner */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0A0A0F] border border-[#24242D] text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] shadow-[0_0_8px_#00AEEF] shrink-0" />
            <span>
              <strong className="text-[#F5F5F7]">Real Laboratory Photographs:</strong> Highlighting physical breadboards, motor drivers, ESP32 microcontrollers, and robotic chassis engineered by campus developers.
            </span>
          </div>

          <span className="font-mono text-[11px] text-[#A1A1AA] shrink-0">
            Showing {filteredProjects.length} of {iotProjectsData.length} Hardware Prototypes
          </span>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0A0A0F] border border-[#24242D] hover:border-[#00AEEF] hover:shadow-[0_0_25px_rgba(0,174,239,0.22)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div>
                {/* Large Project Photograph Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505] cursor-pointer"
                >
                  <img
                    src={project.primaryImage}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (project.id === 'iot-proj-01') target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM_e6e2a6f2.jpeg';
                      else if (project.id === 'iot-proj-02') target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__1__b2ff7eac.jpeg';
                      else if (project.id === 'iot-proj-03') target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__2__956e6554.jpeg';
                      else if (project.id === 'iot-proj-04') target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.25_PM__3__d337ce08.jpeg';
                      else target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_7.57.26_PM_b475f903.jpeg';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#050505]/90 text-[#F5F5F7] border backdrop-blur-sm"
                      style={{ borderColor: project.accentColor }}
                    >
                      {project.categories[0]}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-[#050505]/90 text-[#A1A1AA] border border-[#24242D] backdrop-blur-sm">
                      <Camera className="w-3 h-3 text-[#00AEEF]" />
                      <span>{project.galleryImages.length} {project.galleryImages.length === 1 ? 'Photo' : 'Photos'}</span>
                    </span>
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#050505]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00AEEF] text-white font-medium text-xs shadow-[0_0_20px_rgba(0,174,239,0.5)] backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Photograph</span>
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#A1A1AA] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
                    <span>{project.prototypeStatus}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-[#F5F5F7] tracking-tight cursor-pointer hover:text-[#00AEEF] transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologyTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#050505] text-[#A1A1AA] border border-[#24242D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#050505] hover:bg-[#00AEEF] text-[#F5F5F7] hover:text-white font-semibold text-xs transition-all border border-[#24242D] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox / Modal */}
      <IoTRoboticsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
