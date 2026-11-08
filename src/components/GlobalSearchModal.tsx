import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, BookOpen, Compass, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    externalArticles,
    educationalPosts,
    weeklyThemes,
    quizzes,
    researchItems,
    setSelectedArticle,
    setSelectedPost,
    setSelectedWeeklyTheme,
    setSelectedResearchItem,
    setActivePage,
  } = useApp();

  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const items: {
      id: string;
      title: string;
      subtitle: string;
      type: 'discovery' | 'post' | 'theme' | 'quiz' | 'research';
      category?: string;
      raw: any;
    }[] = [];

    // Search external discoveries
    externalArticles.forEach((art) => {
      if (
        art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.originalSummary.toLowerCase().includes(q) ||
        art.publisher.toLowerCase().includes(q)
      ) {
        items.push({
          id: art.id,
          title: art.title,
          subtitle: `${art.publisher} · ${art.category}`,
          type: 'discovery',
          category: art.category,
          raw: art,
        });
      }
    });

    // Search educational posts
    educationalPosts.forEach((post) => {
      if (
        post.title.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q)
      ) {
        items.push({
          id: post.id,
          title: post.title,
          subtitle: `Educational Hub Library · ${post.category}`,
          type: 'post',
          category: post.category,
          raw: post,
        });
      }
    });

    // Search research items
    researchItems.forEach((res) => {
      if (
        res.title.toLowerCase().includes(q) ||
        res.category.toLowerCase().includes(q) ||
        res.summary.toLowerCase().includes(q)
      ) {
        items.push({
          id: res.id,
          title: res.title,
          subtitle: res.type === 'proposed_idea' ? 'Proposed Research Idea' : 'Research Development',
          type: 'research',
          category: res.category,
          raw: res,
        });
      }
    });

    // Search weekly themes
    weeklyThemes.forEach((theme) => {
      if (
        theme.title.toLowerCase().includes(q) ||
        theme.introduction.toLowerCase().includes(q)
      ) {
        items.push({
          id: theme.id,
          title: `Weekly Theme: ${theme.title}`,
          subtitle: `Week ${theme.weekNumber} · 7-Day Curriculum`,
          type: 'theme',
          raw: theme,
        });
      }
    });

    // Search quizzes
    quizzes.forEach((quiz) => {
      if (
        quiz.title.toLowerCase().includes(q) ||
        quiz.topic.toLowerCase().includes(q)
      ) {
        items.push({
          id: quiz.id,
          title: quiz.title,
          subtitle: `Science Challenge · ${quiz.difficulty}`,
          type: 'quiz',
          raw: quiz,
        });
      }
    });

    return items.slice(0, 10);
  }, [query, externalArticles, educationalPosts, weeklyThemes, quizzes, researchItems]);

  if (!isSearchOpen) return null;

  const handleSelect = (item: any) => {
    setIsSearchOpen(false);
    setQuery('');
    if (item.type === 'discovery') {
      setSelectedArticle(item.raw);
    } else if (item.type === 'post') {
      setSelectedPost(item.raw);
    } else if (item.type === 'theme') {
      setSelectedWeeklyTheme(item.raw);
    } else if (item.type === 'research') {
      setSelectedResearchItem(item.raw);
    } else if (item.type === 'quiz') {
      setActivePage('challenges');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search life-science discoveries, enzymes, CRISPR, quizzes..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="py-8 px-4 text-center text-xs text-slate-400">
              <p className="font-medium text-slate-500 dark:text-slate-400 mb-1">
                Explore the Life Sciences Knowledge Base
              </p>
              <p>Try searching for "Bioluminescence", "CRISPR", "Luciferase", "Enzymes", or "Antibiotics"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 px-4 text-center text-xs text-slate-400">
              No matching life-science articles or quizzes found for "{query}".
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/70 rounded-lg transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  {item.type === 'discovery' && <Compass className="w-4 h-4" />}
                  {item.type === 'post' && <BookOpen className="w-4 h-4" />}
                  {item.type === 'theme' && <Lightbulb className="w-4 h-4" />}
                  {item.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                  {item.type === 'research' && <Lightbulb className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {item.subtitle}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-teal-500 transition-colors shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Biochem & Biotech Hub Search</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
