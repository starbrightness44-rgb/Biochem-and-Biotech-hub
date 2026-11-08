import React, { useState } from 'react';
import { useApp, PageRoute } from '../context/AppContext';
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Share2,
  Atom,
  Users,
  ShieldAlert,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    settings,
    activePage,
    setActivePage,
    setIsSearchOpen,
    isDark,
    toggleDarkMode,
    isAdminLoggedIn,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Discoveries', page: 'discoveries' },
    { label: 'Learn', page: 'learn' },
    { label: 'Research', page: 'research' },
    { label: 'Challenges', page: 'challenges' },
    { label: 'Weekly Archive', page: 'weekly-archive' },
    { label: 'About', page: 'about' },
  ];

  const handleNavClick = (page: PageRoute) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#090C10]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1E2736] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: 
            [Brand title, one line] — [4–5 nav links, 1–2 word labels, single-line] — [1 primary action] */}
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Official Brand Emblem & Wordmark from uploaded logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#76A035] rounded"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Biochem & Biotech Hub Official Emblem"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-[#76A035]/60 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="font-extrabold text-base tracking-wider text-slate-900 dark:text-white uppercase font-sans">
                  BIOCHEM
                </span>
                <span className="font-extrabold text-base tracking-wider text-[#689F38] dark:text-[#8DC63F] uppercase font-sans">
                  & BIOTECH
                </span>
                <span className="font-bold text-xs tracking-widest text-slate-400 dark:text-slate-400 uppercase font-sans ml-0.5">
                  HUB
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase block mt-1">
                LEARN · EXPLORE · INNOVATE
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                    isActive
                      ? 'text-[#689F38] dark:text-[#8DC63F] font-semibold border-b-2 border-[#689F38] dark:border-[#8DC63F]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#689F38] dark:hover:text-[#8DC63F]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick Utilities */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#151D28] transition-colors focus-visible:ring-2 focus-visible:ring-[#76A035]"
              title="Search articles, themes, and quizzes (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#151D28] transition-colors focus-visible:ring-2 focus-visible:ring-[#76A035]"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Primary Action Button: Join WhatsApp Channel */}
            <a
              href={settings.whatsAppChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#5E8826] to-[#79A832] hover:from-[#517620] hover:to-[#6C962B] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#76A035]"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join Community</span>
            </a>

            {/* Admin indicator if logged in */}
            {isAdminLoggedIn && (
              <button
                onClick={() => handleNavClick('admin')}
                className="px-2 py-1 text-[11px] font-mono text-[#5E8826] bg-[#F2F8EA] dark:bg-[#152312] dark:text-[#8DC63F] rounded border border-[#76A035]/30 dark:border-[#8DC63F]/30"
              >
                CMS Active
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#151D28] rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === item.page
                    ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 px-3 flex flex-col gap-2">
              <a
                href={settings.whatsAppChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
              >
                <Users className="w-4 h-4" />
                <span>Follow Our WhatsApp Channel</span>
              </a>
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full text-center py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Admin CMS Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
