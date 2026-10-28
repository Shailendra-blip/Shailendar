import { Github, Linkedin, Twitter, Info, Users, Sparkles } from 'lucide-react';
import { teamData } from '../data/team';

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] mb-2">
            Student Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
            Meet the People Behind the Ideas.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] leading-relaxed">
            A peer-led team of student developers, organizers, and designers coordinating workshops, study jams, and community hackathons at Poornima University.
          </p>
        </div>

        {/* Honest Sample Data Banner */}
        <div className="mt-8 p-3.5 rounded-xl bg-[#0A0A0F] border border-[#24242D] flex items-start gap-3 text-xs text-[#A1A1AA]">
          <Info className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#F5F5F7]">Evaluation Disclaimer:</strong> Profile cards below display representative sample student roles and neutral placeholders. Official student lead appointments for the upcoming term are finalized following formal chapter review and faculty onboarding.
          </span>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-[#0A0A0F] border border-[#24242D] hover:border-[#FF2DAA] hover:shadow-[0_0_25px_rgba(255,45,170,0.22)] transition-all duration-300 hover:-translate-y-1.5 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Avatar and Track Header */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Initials Avatar with futuristic cerulean / rose gradient */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-[#00AEEF] to-[#0A0A0F] text-white shadow-[0_0_15px_rgba(0,174,239,0.3)]'
                        : 'bg-gradient-to-br from-[#FF2DAA] to-[#0A0A0F] text-white shadow-[0_0_15px_rgba(255,45,170,0.3)]'
                    } border border-[#24242D] flex items-center justify-center font-bold text-lg shrink-0`}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#F5F5F7] group-hover:text-[#00AEEF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#00AEEF]">
                      {member.role}
                    </p>
                    <span className="text-[11px] text-[#A1A1AA] font-mono">
                      {member.domainTrack}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social profile links & Demo tag */}
              <div className="mt-6 pt-4 border-t border-[#24242D] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#A1A1AA]/60 uppercase tracking-wider">
                  Sample Profile
                </span>

                <div className="flex items-center gap-2">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-[#A1A1AA] hover:text-[#00AEEF] transition-colors"
                      aria-label={`${member.name} GitHub profile`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-[#A1A1AA] hover:text-[#00AEEF] transition-colors"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-[#A1A1AA] hover:text-[#FF2DAA] transition-colors"
                      aria-label={`${member.name} Twitter profile`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
