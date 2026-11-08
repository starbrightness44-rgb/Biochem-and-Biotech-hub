import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CATEGORIES, ScienceCategory, EducationalPost } from '../types';
import { BookOpen, Search, Clock, Calendar, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const LearnPage: React.FC = () => {
  const {
    educationalPosts,
    weeklyThemes,
    setSelectedPost,
    selectedCategory,
    setSelectedCategory,
  } = useApp();

  const [search, setSearch] = useState('');
  const [selectedThemeId, setSelectedThemeId] = useState<string>('All');

  const filteredPosts = useMemo(() => {
    return educationalPosts.filter((post) => {
      if (!post.isPublished) return false;
      if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
      if (selectedThemeId !== 'All' && post.weeklyThemeId !== selectedThemeId) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchSummary = post.summary.toLowerCase().includes(q);
        const matchContent = post.content.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchContent) return false;
      }
      return true;
    });
  }, [educationalPosts, selectedCategory, selectedThemeId, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1D4ED8] dark:text-[#60A5FA]">
          <BookOpen className="w-4 h-4" />
          <span>Hub Educational Library</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#121B16] dark:text-[#F0F5F2]">
          Learn with the Hub
        </h1>
        <p className="text-sm sm:text-base text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
          Comprehensive, peer-reviewed educational posts organized by weekly scientific themes and daily sequences. Designed to make deep biochemical pathways, molecular mechanisms, and analytical methods clear and accessible.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#768980]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search lessons by topic, mechanism, enzyme, or keyword..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-[#D5D9CE] dark:border-[#1E382E] bg-[#FAF9F5] dark:bg-[#0D1C16] text-[#121B16] dark:text-[#F0F5F2] placeholder-[#768980] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5C6E64] whitespace-nowrap">Theme:</span>
            <select
              value={selectedThemeId}
              onChange={(e) => setSelectedThemeId(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-[#D5D9CE] dark:border-[#1E382E] bg-[#FAF9F5] dark:bg-[#0D1C16] text-[#121B16] dark:text-[#F0F5F2] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <option value="All">All Weekly Themes</option>
              {weeklyThemes.map((t) => (
                <option key={t.id} value={t.id}>
                  Week {t.weekNumber}: {t.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#73877D] block mb-2 font-medium">
            Scientific Categories
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-[#1D4ED8] text-white shadow-sm'
                  : 'bg-[#FAF9F5] dark:bg-[#0E1E18] text-[#4A5A51] dark:text-[#9FB3A8] hover:bg-[#EAEFE8] dark:hover:bg-[#152B21]'
              }`}
            >
              All Categories
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'bg-[#FAF9F5] dark:bg-[#0E1E18] text-[#4A5A51] dark:text-[#9FB3A8] hover:bg-[#EAEFE8] dark:hover:bg-[#152B21]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Educational Posts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#5C6E64] dark:text-[#7D9488]">
          <span>
            Showing {filteredPosts.length} educational {filteredPosts.length === 1 ? 'lesson' : 'lessons'}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-dashed border-[#D5D9CE] dark:border-[#1E382E] space-y-2">
            <BookOpen className="w-8 h-8 text-[#768980] mx-auto" />
            <h3 className="font-medium text-[#121B16] dark:text-[#F0F5F2] text-sm">
              No educational posts match your query
            </h3>
            <p className="text-xs text-[#5C6E64]">
              Try selecting another category or clearing search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] p-6 shadow-sm hover:border-[#1D4ED8]/40 dark:hover:border-[#60A5FA]/40 transition-all cursor-pointer flex flex-col justify-between space-y-5 group"
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

                  {post.scheduleCategory && (
                    <span className="text-[11px] font-mono text-[#5C6E64] dark:text-[#7D9488] block">
                      {post.dayOfWeek}: {post.scheduleCategory}
                    </span>
                  )}

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#121B16] dark:text-[#F0F5F2] leading-snug group-hover:text-[#1D4ED8] dark:group-hover:text-[#60A5FA] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Preview of key takeaways */}
                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="pt-2 text-xs text-[#5C6E64] dark:text-[#7D9488] space-y-1">
                      <span className="font-mono font-semibold text-[10px] uppercase tracking-wider text-[#73877D] block">
                        Core Takeaway
                      </span>
                      <p className="italic line-clamp-2">
                        "{post.keyTakeaways[0]}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#EAEFE8] dark:border-[#152B21] flex items-center justify-between text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">
                  <span>Open Full Lesson</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
