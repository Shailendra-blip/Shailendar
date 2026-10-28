import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    topic: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous client-side receipt creation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] border-t border-[#24242D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Campus Details & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF] mb-2">
                Connect With Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
                Get in Touch with Chapter Organizers
              </h2>
              <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
                Have an idea for a workshop? Want to present your project at our next demo day, or collaborate with our study tracks? Drop us a note.
              </p>

              {/* Campus Address Box */}
              <div className="mt-8 p-5 rounded-2xl bg-[#0A0A0F] border border-[#24242D] space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF2DAA] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#F5F5F7]">
                      Campus Headquarters
                    </h3>
                    <p className="text-[#A1A1AA] mt-0.5 leading-relaxed">
                      {siteConfig.institution.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#24242D]">
                  <Mail className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#F5F5F7]">
                      Official Contact Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.communityLinks.contactEmail}`}
                      className="text-[#00AEEF] hover:text-[#FF2DAA] mt-0.5 block font-mono transition-colors"
                    >
                      {siteConfig.communityLinks.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-[#A1A1AA]">
              <p>
                <strong className="text-[#F5F5F7]">Office Hours:</strong> Saturdays 03:00 PM – 05:00 PM IST in the Computer Science Lab or on campus Discord.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success Receipt */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0A0A0F] border border-[#24242D] p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in-50 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(0,174,239,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F7]">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-[#A1A1AA] max-w-md mx-auto">
                    Thank you, <strong className="text-[#F5F5F7]">{formData.name}</strong>. A chapter mentor or track lead will reply to <span className="font-mono text-[#00AEEF]">{formData.email}</span> shortly.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          role: 'Student',
                          topic: 'General Inquiry',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#050505] hover:bg-[#00AEEF] text-[#F5F5F7] hover:text-white border border-[#24242D] hover:border-[#FF2DAA] hover:shadow-[0_0_15px_rgba(255,45,170,0.4)] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#F5F5F7]">
                      Community Inquiry & Topic Proposals
                    </h3>
                    <span className="text-[11px] font-mono text-[#A1A1AA]">* Required</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-[#050505] border border-[#FF2DAA] text-xs text-[#FF2DAA]">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sahil Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#24242D] text-xs text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sahil.student@poornima.edu.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#24242D] text-xs text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Your Background
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#24242D] text-xs text-[#F5F5F7] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                      >
                        <option value="Student (B.Tech / BCA)">Student (B.Tech / BCA)</option>
                        <option value="Student (Postgraduate)">Student (Postgraduate)</option>
                        <option value="Faculty / Educator">Faculty / Educator</option>
                        <option value="Alumni Developer">Alumni Developer</option>
                        <option value="External Visitor">External Visitor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Topic of Interest
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#24242D] text-xs text-[#F5F5F7] focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                      >
                        <option value="Workshop Inquiry">Workshop Registration / Inquiry</option>
                        <option value="Project Showcase Proposal">Project Showcase Proposal</option>
                        <option value="Solution Challenge Collaboration">Solution Challenge Collaboration</option>
                        <option value="Hackathon Mentorship">Hackathon Mentorship</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      Message / Proposal Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your question, project idea, or workshop topic suggestion..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border border-[#24242D] text-xs text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#00AEEF] text-white font-semibold text-xs transition-all border border-[#00AEEF] hover:border-[#FF2DAA] hover:shadow-[0_0_20px_rgba(255,45,170,0.5)] active:scale-[0.98] disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Team'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
