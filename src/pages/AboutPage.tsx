import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CATEGORIES } from '../types';
import {
  Atom,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, submitContactMessage } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    submitContactMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim() || 'General Inquiry',
      message: message.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <Atom className="w-4 h-4" />
          <span>Independent Science & Education Initiative</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
          About Biochem & Biotech Hub
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {settings.description}
        </p>
      </div>

      {/* Official Brand Emblem & Biological Symbolism */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#111620] via-[#0E1218] to-[#0A0D12] text-white border border-[#1E2736] shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative shrink-0">
            <img
              src="/logo.png"
              alt="Biochem & Biotech Hub Official 3D Emblem"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-2xl ring-2 ring-[#76A035]/60"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
          </div>

          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182312] border border-[#76A035]/50 text-[#8DC63F] text-[11px] font-mono font-semibold">
              <span>OUR VISUAL IDENTITY & PHILOSOPHY</span>
            </div>
            <h2 className="font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide font-sans">
              The Hub Emblem: Learn · Explore · Innovate
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Our emblem was designed to visually unify the core branches of living systems—from genetic blueprints to chemical catalysts, sustainable agriculture, and analytical discovery.
            </p>
          </div>
        </div>

        {/* The 4 Emblem Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-[#141A24] border border-[#1E2633] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧬</span>
              <h4 className="font-bold text-sm text-[#8DC63F]">Double-Helix Spine</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Represents genomic engineering, CRISPR gene editing, and the molecular instructions of all cellular life.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141A24] border border-[#1E2633] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧪</span>
              <h4 className="font-bold text-sm text-white">Erlenmeyer Flask</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Symbolizes experimental biochemistry, enzymatic catalysis, kinetics, and evidence-based laboratory rigor.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141A24] border border-[#1E2633] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <h4 className="font-bold text-sm text-[#8DC63F]">Sprouting Foliage</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Captures plant physiology, sustainable bio-manufacturing, synthetic biology, and ecological biotechnology.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141A24] border border-[#1E2633] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔬</span>
              <h4 className="font-bold text-sm text-white">Molecular Ring Lattice</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Denotes organic chemical structures, pharmacology, metabolite pathways, and cellular microbiology.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Independence Disclosure */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300">
          <ShieldCheck className="w-4 h-4 text-[#689F38] dark:text-[#8DC63F]" />
          <span>Official Identity & Transparency Declaration</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Biochem & Biotech Hub is an <strong>independent community and educational platform</strong>. We do not claim official affiliation, sponsorship, or institutional representation with any university, clinical entity, scientific journal, professional institute, or government regulatory authority.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          We pride ourselves on transparent, honest science education. We do not manufacture fake employee registries, arbitrary credentials, or fictitious awards. All scientific literature references link directly to peer-reviewed sources.
        </p>
      </div>

      {/* Target Audience & Life Sciences Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Audience */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>Who We Serve</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Our content and weekly curricula are structured specifically for scholars across academic stages:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>BS & Undergraduate Life-Sciences Students</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>Master's & MPhil Researchers</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>PhD Scholars & Postdoctoral Fellows</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>Biotechnology Industry Professionals</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>Curious Science Enthusiasts & Educators</span>
            </li>
          </ul>
        </div>

        {/* Disciplines */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Main Scientific Fields</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Curation and lessons span fundamental and applied biological sciences:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {ALL_CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Founder Profile Section - Founder name removed as requested */}
      <div className="p-8 rounded-2xl bg-[#091511] text-[#E8F0EC] border border-[#162D24] shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#34D399]">
            Leadership & Stewardship
          </span>
          <h2 className="font-serif font-bold text-2xl text-[#F0F5F2]">
            Founder & Community Stewardship
          </h2>
          <p className="text-xs sm:text-sm text-[#9FB3A8] leading-relaxed">
            Biochem & Biotech Hub was initiated as an independent, non-commercial science initiative to cultivate accessible inquiry and help scholars bridge the gap between textbook theory and contemporary laboratory breakthroughs.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#0E1E19] border border-[#19382C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-base text-white">Founder's LinkedIn</h3>
            <p className="text-xs text-[#7D9488]">
              Personal Professional Profile · Academic & Scientific Collaboration
            </p>
          </div>

          <a
            href={settings.founderLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <Linkedin className="w-4 h-4 text-blue-200" />
            <span>Founder's LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Public Contact Channels & Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Official Hub Contact Details
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Have questions regarding our weekly educational schedule or want to suggest a scientific topic? Contact our public communication desks:
            </p>
          </div>

          <div className="space-y-3">
            {/* Phone 1 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Public Contact Desk 1
              </span>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-mono">
                <a
                  href={settings.phoneLink1}
                  className="flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-semibold"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{settings.contactPhone1}</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={settings.whatsAppLink1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Public Contact Desk 2
              </span>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-mono">
                <a
                  href={settings.phoneLink2}
                  className="flex items-center gap-2 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-semibold"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{settings.contactPhone2}</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={settings.whatsAppLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Official Electronic Mail
              </span>
              <a
                href={`mailto:${settings.officialEmail}`}
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400"
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{settings.officialEmail}</span>
              </a>
            </div>

            {/* WhatsApp Channel */}
            <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 space-y-2">
              <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 block">
                Official WhatsApp Channel
              </span>
              <a
                href={settings.whatsAppChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Our WhatsApp Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Send an Academic or General Message
            </h3>

            {submitted ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out to Biochem & Biotech Hub. We will review your correspondence promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Ayesha Ahmed"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ayesha@university.edu"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Inquiring about Bioinformatics Curriculum"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your question, comment, or suggestion..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
