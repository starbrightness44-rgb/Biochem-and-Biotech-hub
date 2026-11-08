import React from 'react';
import { useApp, PageRoute } from '../context/AppContext';
import {
  Atom,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Instagram,
  Lock,
  ArrowUpRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, setActivePage } = useApp();

  const handleNav = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090C10] text-slate-400 border-t border-[#1E2736] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Identity & Official Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <img
                src="/logo.png"
                alt="Biochem & Biotech Hub Official Emblem"
                className="w-11 h-11 rounded-full object-cover shadow-md ring-1 ring-[#76A035]/60"
              />
              <div>
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-extrabold text-base tracking-wider text-white uppercase font-sans">
                    BIOCHEM
                  </span>
                  <span className="font-extrabold text-base tracking-wider text-[#8DC63F] uppercase font-sans">
                    & BIOTECH
                  </span>
                  <span className="font-bold text-xs tracking-widest text-slate-400 uppercase font-sans ml-0.5">
                    HUB
                  </span>
                </div>
                <span className="font-mono text-[9px] text-[#8DC63F] font-semibold tracking-[0.2em] uppercase block mt-1">
                  LEARN · EXPLORE · INNOVATE
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {settings.description}
            </p>

            <div className="p-3 rounded-lg bg-[#0E131A] border border-[#1E2736] text-[11px] text-slate-400">
              <span className="font-medium text-slate-200 block mb-1">
                Independent Disclosure
              </span>
              Biochem & Biotech Hub is an independent community initiative. It is not officially affiliated with or endorsed by any university, regulatory body, research institute, or academic publisher.
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('discoveries')}
                  className="hover:text-white transition-colors"
                >
                  Science Discoveries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learn')}
                  className="hover:text-white transition-colors"
                >
                  Learn with the Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('research')}
                  className="hover:text-white transition-colors"
                >
                  Research & Future Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('challenges')}
                  className="hover:text-white transition-colors"
                >
                  Science Challenges
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('weekly-archive')}
                  className="hover:text-white transition-colors"
                >
                  Weekly Learning Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Community & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F0F5F2]">
              Connect & Community
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={settings.whatsAppChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md bg-[#0F3526] border border-[#1B573F] text-[#86EFAC] hover:bg-[#144733] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <span className="font-medium">Follow WhatsApp Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-[#86EFAC]" />
              </a>

              {settings.showCommunityGroup && settings.whatsAppCommunity && (
                <a
                  href={settings.whatsAppCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-md bg-[#0E1E19] border border-[#19362B] hover:bg-[#132B24] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Community Group</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-[#7D9488]" />
                </a>
              )}

              {/* Founder's LinkedIn - Name removed as requested */}
              <a
                href={settings.founderLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md bg-[#0E1E19] border border-[#19362B] hover:bg-[#132B24] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="block font-medium text-[#E0EBE6]">Founder's LinkedIn</span>
                  <span className="text-[10px] text-[#7D9488]">
                    Personal Professional Profile
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-[#7D9488]" />
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href={settings.tikTok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Phone Numbers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Official Hub Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {/* Phone 1 */}
              <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 space-y-1">
                <span className="text-[11px] font-medium text-slate-300 block">
                  Public Contact 1
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={settings.phoneLink1}
                    className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-teal-400" />
                    <span>{settings.contactPhone1}</span>
                  </a>
                  <span className="text-slate-600">·</span>
                  <a
                    href={settings.whatsAppLink1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 space-y-1">
                <span className="text-[11px] font-medium text-slate-300 block">
                  Public Contact 2
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={settings.phoneLink2}
                    className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-teal-400" />
                    <span>{settings.contactPhone2}</span>
                  </a>
                  <span className="text-slate-600">·</span>
                  <a
                    href={settings.whatsAppLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-1">
                <a
                  href={`mailto:${settings.officialEmail}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{settings.officialEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Policies, Copyright, Admin CMS access */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {settings.name}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('editorial-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Editorial Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('copyright-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Copyright & Attribution
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('admin')}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
              title="Admin CMS Dashboard"
            >
              <Lock className="w-3 h-3" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
