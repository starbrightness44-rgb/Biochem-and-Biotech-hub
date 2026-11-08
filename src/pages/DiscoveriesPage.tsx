import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_CATEGORIES, ScienceCategory, ExternalArticle } from '../types';
import { Search, ExternalLink, Sparkles, Filter, Compass, Calendar, Building2 } from 'lucide-react';

export const DiscoveriesPage: React.FC = () => {
  const {
    externalArticles,
    selectedCategory,
    setSelectedCategory,
    setSelectedArticle,
  } = useApp();

  const [search, setSearch] = useState('');
  const [publisherFilter, setPublisherFilter] = useState<string>('All');

  // Extract unique publishers
  const publishers = useMemo(() => {
    const set = new Set<string>();
    externalArticles.forEach((a) => set.add(a.publisher));
    return ['All', ...Array.from(set)];
  }, [externalArticles]);

  const filteredArticles = useMemo(() => {
    return externalArticles.filter((art) => {
      if (!art.isPublished) return false;
      if (selectedCategory !== 'All' && art.category !== selectedCategory) return false;
      if (publisherFilter !== 'All' && art.publisher !== publisherFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = art.title.toLowerCase().includes(q);
        const matchSummary = art.originalSummary.toLowerCase().includes(q);
        const matchWhy = art.whyItMatters.toLowerCase().includes(q);
        const matchPub = art.publisher.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchWhy && !matchPub) return false;
      }
      return true;
    });
  }, [externalArticles, selectedCategory, publisherFilter, search]);

  const featured = filteredArticles.filter((a) => a.isFeatured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
          <Compass className="w-4 h-4" />
          <span>Curated Scientific Literature</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#121B16] dark:text-[#F0F5F2]">
          Science Discoveries
        </h1>
        <p className="text-sm sm:text-base text-[#4A5A51] dark:text-[#9FB3A8] leading-relaxed">
          Explore peer-reviewed scientific breakthroughs from leading life-sciences publishers. We provide independent conceptual summaries and direct scholars to the original primary research papers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] shadow-sm space-y-4">
        
        {/* Search input + Publisher filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#768980]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search discoveries by title, keyword, enzyme, or mechanism..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-[#D5D9CE] dark:border-[#1E382E] bg-[#FAF9F5] dark:bg-[#0D1C16] text-[#121B16] dark:text-[#F0F5F2] placeholder-[#768980] focus:outline-none focus:ring-2 focus:ring-[#0A5C40]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5C6E64] whitespace-nowrap">Publisher:</span>
            <select
              value={publisherFilter}
              onChange={(e) => setPublisherFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-[#D5D9CE] dark:border-[#1E382E] bg-[#FAF9F5] dark:bg-[#0D1C16] text-[#121B16] dark:text-[#F0F5F2] focus:outline-none focus:ring-2 focus:ring-[#0A5C40]"
            >
              {publishers.map((pub) => (
                <option key={pub} value={pub}>
                  {pub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Buttons (Functional Segmented Control) */}
        <div>
          <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#73877D] block mb-2 font-medium">
            Filter by Scientific Domain
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-[#0A5C40] text-white shadow-sm dark:bg-[#107050]'
                  : 'bg-[#FAF9F5] dark:bg-[#0E1E18] text-[#4A5A51] dark:text-[#9FB3A8] hover:bg-[#EAEFE8] dark:hover:bg-[#152B21]'
              }`}
            >
              All Domains ({externalArticles.length})
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const count = externalArticles.filter((a) => a.category === cat && a.isPublished).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-[#0A5C40] text-white shadow-sm dark:bg-[#107050]'
                      : 'bg-[#FAF9F5] dark:bg-[#0E1E18] text-[#4A5A51] dark:text-[#9FB3A8] hover:bg-[#EAEFE8] dark:hover:bg-[#152B21]'
                  }`}
                >
                  {cat} {count > 0 && `(${count})`}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Discoveries Highlight (if any match) */}
      {featured.length > 0 && selectedCategory === 'All' && !search && publisherFilter === 'All' && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#0A5C40] dark:text-[#34D399]">
            <Sparkles className="w-4 h-4" />
            <span>Featured Scientific Breakthroughs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.slice(0, 2).map((article) => (
              <div
                key={article.id}
                className="rounded-xl border border-[#D5E3DB] dark:border-[#1E4D3B] bg-[#F4F8F5] dark:bg-[#0C1F18] p-6 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-teal-700 dark:text-teal-400">
                      {article.publisher}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publicationDate}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {article.originalSummary}
                  </p>

                  <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-teal-100 dark:border-teal-900/60 text-xs text-teal-950 dark:text-teal-200 leading-relaxed">
                    <strong>Why It Matters:</strong> {article.whyItMatters}
                  </div>
                </div>

                <div className="pt-3 border-t border-teal-100 dark:border-teal-900/60 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="font-semibold text-teal-700 dark:text-teal-300 hover:underline"
                  >
                    View Curated Summary
                  </button>
                  <a
                    href={article.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-semibold text-teal-700 dark:text-teal-400 hover:underline"
                  >
                    <span>Read on {article.publisher}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-xl border border-dashed border-slate-300 dark:border-slate-800 space-y-2">
            <Compass className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-medium text-slate-800 dark:text-slate-200 text-sm">
              No scientific articles match your criteria
            </h3>
            <p className="text-xs text-slate-500">
              Try adjusting your category filter, publisher, or search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm flex flex-col justify-between hover:border-teal-300 dark:hover:border-teal-700 transition-all group"
              >
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-teal-600 dark:text-teal-400">
                      {article.publisher}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publicationDate}</span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {article.originalSummary}
                  </p>

                  <div className="p-3 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/60 text-xs text-teal-900 dark:text-teal-200 leading-relaxed">
                    <strong className="block text-[11px] uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-0.5">
                      Why It Matters
                    </strong>
                    {article.whyItMatters}
                  </div>
                </div>

                <div className="px-5 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    View Details
                  </button>

                  <a
                    href={article.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    <span>Original Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
