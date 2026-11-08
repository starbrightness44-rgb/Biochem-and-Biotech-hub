import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CATEGORIES, ScienceCategory, ExternalArticle, EducationalPost } from '../types';
import { DailyChallengeWidget } from '../components/DailyChallengeWidget';
import {
  Compass,
  BookOpen,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Users,
  MessageCircle,
  Linkedin,
  Clock,
  Calendar,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Atom,
} from 'lucide-react';

interface Props {
  onOpenTopicModal: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenTopicModal }) => {
  const {
    settings,
    externalArticles,
    educationalPosts,
    weeklyThemes,
    researchItems,
    setSelectedArticle,
    setSelectedPost,
    setSelectedWeeklyTheme,
    setSelectedResearchItem,
    setActivePage,
    setSelectedCategory,
  } = useApp();

  const currentTheme = weeklyThemes.find((t) => t.status === 'current') || weeklyThemes[0];
  const featuredDiscoveries = externalArticles.filter((a) => a.isPublished).slice(0, 3);
  const latestEducational = educationalPosts.filter((p) => p.isPublished).slice(0, 3);
  const highlightedResearch = researchItems.filter((r) => r.isPublished).slice(0, 2);

  const handleCategoryClick = (cat: ScienceCategory) => {
    setSelectedCategory(cat);
    setActivePage('discoveries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* =========================================================================
          SECTION 1: HERO
          Original Brand Identity Showcase with Official 3D Emblem & 4 Pillars
      ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200 dark:border-[#1E2736]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Proposition & 4 Scientific Pillars */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed Metadata Kicker */}
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#689F38] dark:text-[#8DC63F] tracking-wider uppercase">
                <span>Official Life Sciences Hub</span>
                <span aria-hidden="true">·</span>
                <span>Peer-Reviewed Curation</span>
              </div>

              {/* Main Headline matching custom brand */}
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[46px] tracking-tight text-slate-900 dark:text-white leading-[1.14]">
                Advancing Biochemistry.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#638A2B] to-[#8DC63F]">
                  Pioneering Biotechnology.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                The independent educational, science-curation, and community platform dedicated to making life sciences accessible, engaging, and connected to real-world applications.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    setActivePage('discoveries');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#5B8820] to-[#76A830] hover:from-[#4E751B] hover:to-[#679428] rounded-lg shadow-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#76A035]"
                >
                  Explore Science Discoveries
                </button>

                <a
                  href={settings.whatsAppChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-[#10151E] hover:bg-slate-100 dark:hover:bg-[#161D28] border border-slate-300 dark:border-[#222C3D] rounded-lg shadow-sm transition-all whitespace-nowrap"
                >
                  <Users className="w-4 h-4 text-[#689F38] dark:text-[#8DC63F]" />
                  <span>Join Our Community</span>
                </a>

                <button
                  onClick={onOpenTopicModal}
                  className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Suggest a Topic
                </button>
              </div>

              {/* 4 Pillars from the Official Emblem: DNA · Flask · Foliage · Microscope */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#1E2736] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 block font-medium">
                  The Four Hub Discovery Pillars
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => handleCategoryClick('Genetics')}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#10151E] border border-slate-200/90 dark:border-[#1E2736] hover:border-[#76A035]/60 transition-colors text-left flex items-center gap-2.5 group"
                  >
                    <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">🧬</span>
                    <div>
                      <span className="text-xs font-bold block text-slate-900 dark:text-slate-100 leading-tight">Genetics</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">CRISPR & DNA</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleCategoryClick('Biochemistry')}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#10151E] border border-slate-200/90 dark:border-[#1E2736] hover:border-[#76A035]/60 transition-colors text-left flex items-center gap-2.5 group"
                  >
                    <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">🧪</span>
                    <div>
                      <span className="text-xs font-bold block text-slate-900 dark:text-slate-100 leading-tight">Biochem</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Enzymes & ATP</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleCategoryClick('Biotechnology')}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#10151E] border border-slate-200/90 dark:border-[#1E2736] hover:border-[#76A035]/60 transition-colors text-left flex items-center gap-2.5 group"
                  >
                    <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">🌿</span>
                    <div>
                      <span className="text-xs font-bold block text-slate-900 dark:text-slate-100 leading-tight">Bio-Tech</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Agri & Synthetic</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleCategoryClick('Microbiology')}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#10151E] border border-slate-200/90 dark:border-[#1E2736] hover:border-[#76A035]/60 transition-colors text-left flex items-center gap-2.5 group"
                  >
                    <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">🔬</span>
                    <div>
                      <span className="text-xs font-bold block text-slate-900 dark:text-slate-100 leading-tight">Microbiology</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Cellular Systems</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Official Emblem Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1E2736] bg-gradient-to-b from-[#111620] via-[#0E1218] to-[#0A0D12] shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
                
                {/* Ambient backlighting matching logo chartreuse */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#76A035]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#8DC63F]/15 rounded-full blur-3xl pointer-events-none" />

                {/* 3D Circular Brand Emblem */}
                <div className="relative group">
                  <img
                    src="/logo.png"
                    alt="Biochem & Biotech Hub Official 3D Emblem"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-2xl ring-2 ring-[#76A035]/60 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
                </div>

                {/* Emblem Title & Philosophy */}
                <div className="space-y-2 max-w-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182312] border border-[#76A035]/50 text-[#8DC63F] text-[11px] font-mono font-semibold">
                    <span>OFFICIAL EMBLEM</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-white tracking-wide uppercase font-sans">
                    Learn · Explore · Innovate
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Uniting molecular genetics, catalytic biochemistry, and sustainable bio-industrial technologies.
                  </p>
                </div>

                {/* Bottom Verification Footer Strip */}
                <div className="w-full pt-4 border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
                    <span>INDEPENDENT REPOSITORY</span>
                  </span>
                  <span className="text-[#8DC63F]">VERIFIED CURATION</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT IS BIOCHEM & BIOTECH HUB?
          Concise introduction + The 3 Core Activities
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0B1713] border border-[#E3E6DC] dark:border-[#193226] shadow-sm space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
              Identity & Mission
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#121B16] dark:text-[#F0F5F2]">
              What Is Biochem & Biotech Hub?
            </h2>
            <p className="text-sm sm:text-base text-[#3E4D45] dark:text-[#A1B3A9] leading-relaxed">
              Biochem & Biotech Hub is an <strong>independent educational, science-curation, and community platform</strong> dedicated to making life sciences accessible, engaging, and connected to real-world applications and scientific developments.
            </p>
            <p className="text-xs sm:text-sm text-[#5C6E64] dark:text-[#7D9488] leading-relaxed">
              Designed for BS, Master's, MPhil, and PhD scholars, laboratory researchers, science graduates, and enthusiasts who want to master complex biological concepts without commercial fluff or sensationalism.
            </p>
          </div>

          {/* The 3 Core Streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Stream 1 */}
            <div className="p-5 rounded-xl bg-[#FAF9F5] dark:bg-[#0E1E18] border border-[#E4E7DE] dark:border-[#1A3327] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3EE] dark:bg-[#133527] text-[#0A5C40] dark:text-[#34D399] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#121B16] dark:text-[#F0F5F2]">
                1. Discover Science
              </h3>
              <p className="text-xs text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
                Curating high-impact discoveries from Nature, Science, Cell, and leading peer-reviewed journals with independent summaries and real-world significance.
              </p>
              <button
                onClick={() => {
                  setActivePage('discoveries');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0A5C40] dark:text-[#34D399] flex items-center gap-1 hover:underline pt-1"
              >
                <span>Browse Discoveries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stream 2 */}
            <div className="p-5 rounded-xl bg-[#FAF9F5] dark:bg-[#0E1E18] border border-[#E4E7DE] dark:border-[#1A3327] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] dark:bg-[#122A3B] text-[#1D4ED8] dark:text-[#60A5FA] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#121B16] dark:text-[#F0F5F2]">
                2. Learn with the Hub
              </h3>
              <p className="text-xs text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
                Publishing original educational explanations following our weekly 7-day curriculum: mechanisms, formulas, reaction steps, and experimental methods.
              </p>
              <button
                onClick={() => {
                  setActivePage('learn');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA] flex items-center gap-1 hover:underline pt-1"
              >
                <span>Explore Learning Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stream 3 */}
            <div className="p-5 rounded-xl bg-[#FAF9F5] dark:bg-[#0E1E18] border border-[#E4E7DE] dark:border-[#1A3327] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] dark:bg-[#33220A] text-[#B45309] dark:text-[#FBBF24] flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#121B16] dark:text-[#F0F5F2]">
                3. Interactive Challenges
              </h3>
              <p className="text-xs text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
                Daily knowledge questions, weekly Grand Sunday mastery quizzes, and topic-based self-assessments with instant feedback and mechanism explanations.
              </p>
              <button
                onClick={() => {
                  setActivePage('challenges');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#B45309] dark:text-[#FBBF24] flex items-center gap-1 hover:underline pt-1"
              >
                <span>Take a Challenge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: LATEST SCIENCE DISCOVERIES
          External peer-reviewed discoveries with publisher attribution
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
              Curated Peer-Reviewed Literature
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#121B16] dark:text-[#F0F5F2] mt-1">
              Latest Science Discoveries
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6E64] dark:text-[#7D9488] mt-1">
              Directing scholars to original publisher papers with independent educational summaries.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('discoveries');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5C40] dark:text-[#34D399] hover:underline"
          >
            <span>View All Discoveries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Discoveries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDiscoveries.map((article) => (
            <div
              key={article.id}
              className="rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#0A5C40]/50 dark:hover:border-[#34D399]/50 transition-all group"
            >
              <div className="p-5 sm:p-6 space-y-3.5">
                {/* Unboxed Metadata (Anti-slop rule) */}
                <div className="flex items-center gap-2 text-xs text-[#5C6E64] dark:text-[#7D9488]">
                  <span className="font-semibold text-[#0A5C40] dark:text-[#34D399]">
                    {article.publisher}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[11px]">{article.publicationDate}</span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-[#121B16] dark:text-[#F0F5F2] leading-snug group-hover:text-[#0A5C40] dark:group-hover:text-[#34D399] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed line-clamp-3">
                  {article.originalSummary}
                </p>

                {/* Why It Matters */}
                <div className="p-3 rounded-lg bg-[#F4F8F5] dark:bg-[#0E261D] border border-[#D5E3DB] dark:border-[#1E4D3B] text-xs text-[#133A2B] dark:text-[#A7F3D0] leading-relaxed">
                  <span className="font-mono font-semibold block text-[10px] uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399] mb-0.5">
                    Why It Matters
                  </span>
                  {article.whyItMatters}
                </div>
              </div>

              {/* Action Strip */}
              <div className="px-5 py-3.5 border-t border-[#EAEFE8] dark:border-[#152B21] bg-[#FAFBF9] dark:bg-[#0D1C16] flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="font-semibold text-[#0A5C40] dark:text-[#34D399] hover:underline"
                >
                  Read Summary
                </button>

                <a
                  href={article.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#5C6E64] hover:text-[#121B16] dark:hover:text-white"
                >
                  <span>Original Paper</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: LEARN WITH THE HUB
          Hub-created educational content with reading time and mechanisms
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1D4ED8] dark:text-[#60A5FA]">
              Original Hub Curriculum
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#121B16] dark:text-[#F0F5F2] mt-1">
              Learn with the Hub
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6E64] dark:text-[#7D9488] mt-1">
              Deep-dive scientific explanations, catalytic steps, formulas, and connections to daily life.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('learn');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
          >
            <span>Explore All Lessons</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestEducational.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] p-6 shadow-sm hover:border-[#1D4ED8]/40 dark:hover:border-[#60A5FA]/40 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5C6E64] dark:text-[#7D9488]">
                  <span className="font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTimeEstimate}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-[#121B16] dark:text-[#F0F5F2] leading-snug group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAEFE8] dark:border-[#152B21] flex items-center justify-between text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                <span>Read Full Lesson</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THIS WEEK AT THE HUB
          Current weekly scientific theme & 7-day episode breakdown
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#091511] text-[#E8F0EC] border border-[#162D24] shadow-xl space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#162D24]">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#34D399]">
                <span>WEEK {currentTheme.weekNumber} THEME</span>
                <span aria-hidden="true">·</span>
                <span>{currentTheme.startDate} – {currentTheme.endDate}</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                This Week at the Hub: {currentTheme.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#9FB3A8] leading-relaxed">
                {currentTheme.introduction}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setSelectedWeeklyTheme(currentTheme)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0A5C40] hover:bg-[#074731] rounded-lg transition-colors"
              >
                Full Week Curriculum
              </button>
              <button
                onClick={() => {
                  setActivePage('weekly-archive');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold text-[#9FB3A8] hover:text-white bg-[#0E1E19] hover:bg-[#132A23] rounded-lg transition-colors border border-[#19382C]"
              >
                Browse Theme Archive
              </button>
            </div>
          </div>

          {/* 7-Day Episode Sequence Matrix */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#34D399] font-medium">
              Established 7-Day Publishing Sequence
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentTheme.episodes.slice(0, 4).map((ep, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#0E1E19] border border-[#19382C] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono font-bold text-[#34D399]">{ep.day}</span>
                    <span className="text-[#7D9488] text-[10px]">{ep.scheduleCategory}</span>
                  </div>
                  <h4 className="font-serif text-xs font-semibold text-white line-clamp-2">
                    {ep.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {currentTheme.episodes.slice(4).map((ep, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#0E1E19] border border-[#19382C] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono font-bold text-[#34D399]">{ep.day}</span>
                    <span className="text-[#7D9488] text-[10px]">{ep.scheduleCategory}</span>
                  </div>
                  <h4 className="font-serif text-xs font-semibold text-white line-clamp-2">
                    {ep.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaways banner */}
          <div className="p-4 rounded-xl bg-[#0E261D] border border-[#1E4D3B] space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86EFAC] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Weekly Key Takeaways</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C8DCD2]">
              {currentTheme.keyTakeaways.slice(0, 4).map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#34D399] font-bold">·</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: RESEARCH & FUTURE SCIENCE
          Verified research vs Proposed research ideas (Strict Distinction)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
              Frontier Inquiry & Innovation
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#121B16] dark:text-[#F0F5F2] mt-1">
              Research & Future Science
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6E64] dark:text-[#7D9488] mt-1">
              Distinguishing experimentally confirmed breakthroughs from academic proposed hypotheses.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('research');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5C40] dark:text-[#34D399] hover:underline"
          >
            <span>Explore All Research</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlightedResearch.map((item) => {
            const isProposed = item.type === 'proposed_idea';
            return (
              <div
                key={item.id}
                onClick={() => setSelectedResearchItem(item)}
                className="p-6 rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] hover:border-[#0A5C40]/50 dark:hover:border-[#34D399]/50 transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#5C6E64] dark:text-[#7D9488]">
                      {item.category}
                    </span>
                    {isProposed ? (
                      <span className="text-[11px] font-mono font-semibold text-[#B45309] dark:text-[#FBBF24] flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Proposed Hypothesis
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono font-semibold text-[#0A5C40] dark:text-[#34D399] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Discovery
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#121B16] dark:text-[#F0F5F2] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEFE8] dark:border-[#152B21] text-xs font-semibold text-[#0A5C40] dark:text-[#34D399] flex items-center justify-between">
                  <span>{isProposed ? 'Inspect Hypothesis & Limitations' : 'Inspect Verified Discovery'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SCIENCE CHALLENGE
          Interactive challenge question with 4 options and feedback
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
              Interactive Knowledge Gym
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#121B16] dark:text-[#F0F5F2]">
              Daily Science Challenge
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
              Sharpen your analytical reasoning with daily questions formulated by life-sciences educators. Test your grasp of enzymatic cofactors, kinetic models, and genetic editing.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('challenges');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0A5C40] dark:text-[#34D399] bg-[#E8F3EE] dark:bg-[#112F24] hover:bg-[#D5EADB] dark:hover:bg-[#153C2D] border border-[#0A5C40]/20 dark:border-[#34D399]/30 rounded-lg transition-colors"
              >
                <span>View Grand Sunday & Topic Quizzes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <DailyChallengeWidget />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: JOIN OUR COMMUNITY
          Official WhatsApp channel, WhatsApp group, Founder LinkedIn, Socials
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111620] via-[#0E1218] to-[#0A0D12] text-white border border-[#1E2736] shadow-xl space-y-8">
          
          <div className="max-w-2xl space-y-2.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#8DC63F]">
              Direct Life-Sciences Network
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
              Join Our Community
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Stay connected with daily science updates, weekly curriculum drops, research opportunities, and interactive quizzes across our verified channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Channel Card */}
            <div className="p-6 rounded-xl bg-[#141D15] border border-[#76A035]/50 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#5B8820] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-white">
                  Official WhatsApp Channel
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Receive instant announcements for new external discoveries, daily episodes, and weekly quiz notifications.
                </p>
              </div>
              <a
                href={settings.whatsAppChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#5B8820] to-[#76A830] hover:from-[#4E751B] hover:to-[#679428] rounded-lg shadow-sm transition-colors"
              >
                <span>Follow Our WhatsApp Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Founder Profile Card - Name removed as requested */}
            <div className="p-6 rounded-xl bg-[#10151E] border border-[#1E2736] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-700/80 flex items-center justify-center text-white">
                <Linkedin className="w-5 h-5 text-blue-200" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-white">
                  Founder Professional Network
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with the hub founder on LinkedIn for academic dialogue, science collaboration, and research feedback.
                </p>
              </div>
              <a
                href={settings.founderLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] rounded-lg shadow-sm transition-colors"
              >
                <span>Founder's LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Optional Community Group section (configured from settings) */}
          {settings.showCommunityGroup && settings.whatsAppCommunity && (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-semibold text-slate-200 block">
                  Interactive Scholar Discussion Group
                </span>
                <span className="text-slate-400">
                  Participate in open scientific Q&A, research discussions, and quiz reviews with fellow scholars.
                </span>
              </div>
              <a
                href={settings.whatsAppCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/70 rounded-lg transition-colors whitespace-nowrap text-center"
              >
                Join WhatsApp Group
              </a>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
