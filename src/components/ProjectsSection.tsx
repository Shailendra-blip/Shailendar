import { useState } from 'react';
import { ArrowRight, Layers, Github, ExternalLink, Code2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectItem, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai_ml', label: 'AI & ML' },
    { id: 'web_cloud', label: 'Web & Cloud' },
    { id: 'mobile_iot', label: 'Mobile & IoT' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] mb-2">
              Community Engineering
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
              Innovations Start Here.
            </h2>
            <p className="mt-3 text-base text-[#A1A1AA]">
              Student-built software prototypes addressing campus challenges, environmental sustainability, and developer tooling.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A0A0F] border border-[#24242D] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#00AEEF] text-white shadow-[0_0_15px_rgba(0,174,239,0.4)]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#050505]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0A0A0F] border border-[#24242D] hover:border-[#00AEEF] hover:shadow-[0_0_25px_rgba(0,174,239,0.22)] transition-all duration-300 hover:-translate-y-1.5 p-6"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${project.accentColor}18`,
                      color: project.accentColor,
                      borderColor: `${project.accentColor}40`,
                    }}
                  >
                    {project.categoryLabel}
                  </span>

                  <span className="text-[10px] text-[#A1A1AA] font-mono">
                    Demo Project
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight group-hover:text-[#00AEEF] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#050505] text-[#A1A1AA] border border-[#24242D]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono text-[#A1A1AA]/60 self-center">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-[#24242D] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00AEEF] hover:text-[#FF2DAA] transition-colors focus:outline-none focus-visible:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FF2DAA] hover:bg-[#050505] transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
