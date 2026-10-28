import { BookOpen, Hammer, Users, Code, Cloud, Cpu, Smartphone, Globe } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      id: 'learn',
      title: 'LEARN',
      motto: 'Knowledge Acquisition',
      description:
        'Explore modern technologies through workshops, technical sessions, and hands-on learning.',
      icon: BookOpen,
      iconColor: 'text-[#00AEEF]',
      accentBg: 'bg-[#00AEEF]/10 border border-[#00AEEF]/30 shadow-[0_0_15px_rgba(0,174,239,0.2)]',
      hoverBorder: 'hover:border-[#00AEEF] hover:shadow-[0_0_30px_rgba(0,174,239,0.25)]',
      accentLine: 'bg-[#00AEEF]',
      highlights: ['Practical Code-Alongs', 'Beginner to Advanced Tracks', 'Industry Best Practices'],
    },
    {
      id: 'build',
      title: 'BUILD',
      motto: 'Hands-On Execution',
      description:
        'Turn ideas into practical projects, experiment with new tools, and develop real-world skills.',
      icon: Hammer,
      iconColor: 'text-[#FF2DAA]',
      accentBg: 'bg-[#FF2DAA]/10 border border-[#FF2DAA]/30 shadow-[0_0_15px_rgba(255,45,170,0.2)]',
      hoverBorder: 'hover:border-[#FF2DAA] hover:shadow-[0_0_30px_rgba(255,45,170,0.25)]',
      accentLine: 'bg-[#FF2DAA]',
      highlights: ['Solution Challenge Sprints', 'Open Source Contributions', 'Prototype to Production'],
    },
    {
      id: 'connect',
      title: 'CONNECT',
      motto: 'Peer Collaboration',
      description:
        'Collaborate with students, exchange knowledge, and grow alongside a community of developers.',
      icon: Users,
      iconColor: 'text-[#00AEEF]',
      accentBg: 'bg-[#00AEEF]/10 border border-[#00AEEF]/30 shadow-[0_0_15px_rgba(0,174,239,0.2)]',
      hoverBorder: 'hover:border-[#00AEEF] hover:shadow-[0_0_30px_rgba(0,174,239,0.25)]',
      accentLine: 'bg-[#00AEEF]',
      highlights: ['Hackathon Teammates', 'Study Jams & Peer Reviews', 'Alumni Fireside Talks'],
    },
  ];

  const tracks = [
    {
      icon: Globe,
      name: 'Modern Web & Cloud',
      description: 'TypeScript, React 19, Google Cloud Run, Firebase, and distributed backend services.',
      color: 'text-[#00AEEF]',
    },
    {
      icon: Cpu,
      name: 'AI & Machine Learning',
      description: 'TensorFlow, Edge AI with WebGPU, Python pipelines, and Gemini API integration.',
      color: 'text-[#FF2DAA]',
    },
    {
      icon: Smartphone,
      name: 'Mobile & Multi-Platform',
      description: 'Flutter SDK, modern Android Kotlin development, and responsive cross-platform UIs.',
      color: 'text-[#00AEEF]',
    },
    {
      icon: Code,
      name: 'Open Source & Tooling',
      description: 'Git workflows, containerization with Docker, CI/CD automation, and clean architecture.',
      color: 'text-[#FF2DAA]',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF] mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shadow-[0_0_6px_#00AEEF]" />
            <span>Community Purpose & Values</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight [text-wrap:balance]">
            More Than a Tech Community.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed [text-wrap:balance]">
            A place to learn, experiment, share knowledge, and collaborate with fellow technology enthusiasts.
          </p>
        </div>

        {/* Three Core Feature Cards: LEARN, BUILD, CONNECT */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-2xl p-7 bg-[#0A0A0F] border border-[#24242D] transition-all duration-300 hover:-translate-y-1.5 ${pillar.hoverBorder}`}
              >
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${pillar.accentBg} flex items-center justify-center transition-transform group-hover:scale-105`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#A1A1AA] uppercase tracking-wider">
                    {pillar.motto}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F7] tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Unboxed Highlights */}
                <ul className="space-y-2 border-t border-[#24242D] pt-4 text-xs text-[#A1A1AA]">
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.accentLine} shadow-[0_0_6px_currentColor]`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tech Tracks Overview */}
        <div className="mt-16 pt-12 border-t border-[#24242D]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-bold text-[#F5F5F7]">
                Core Technology Tracks
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Curated learning paths aligned with developer ecosystems and student project building.
              </p>
            </div>
            <span className="text-xs text-[#A1A1AA] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              <span>Poornima University • Jaipur</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((track) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={track.name}
                  className="p-5 rounded-xl bg-[#0A0A0F] border border-[#24242D] hover:border-[#00AEEF]/60 hover:shadow-[0_0_20px_rgba(0,174,239,0.15)] transition-all"
                >
                  <TrackIcon className={`w-5 h-5 ${track.color} mb-3`} />
                  <h4 className="text-sm font-semibold text-[#F5F5F7]">
                    {track.name}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
