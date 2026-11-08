import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ResearchItem, ALL_CATEGORIES, ScienceCategory } from '../types';
import {
  Lightbulb,
  Search,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';

interface Props {
  onOpenTopicModal: () => void;
}

export const ResearchPage: React.FC<Props> = ({ onOpenTopicModal }) => {
  const { researchItems, setSelectedResearchItem } = useApp();

  const [activeTab, setActiveTab] = useState<
    'all' | 'ongoing' | 'proposed_idea' | 'future_tech' | 'emerging_biotech'
  >('all');
  const [selectedCategory, setSelectedCategory] = useState<ScienceCategory | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return researchItems.filter((item) => {
      if (!item.isPublished) return false;
      if (activeTab !== 'all' && item.type !== activeTab) return false;
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchBackground = item.background.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchBackground) return false;
      }
      return true;
    });
  }, [researchItems, activeTab, selectedCategory, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Lightbulb className="w-4 h-4" />
            <span>Frontier Inquiry & Investigation</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Research & Future Science
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Exploring ongoing experimental investigations, future biotechnologies, and theoretical research ideas. We maintain strict scientific transparency: unverified proposals are distinctly labeled as hypotheses.
          </p>
        </div>

        <button
          onClick={onOpenTopicModal}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Submit a Research Idea</span>
        </button>
      </div>

      {/* Filter Tabs (Functional segmented controls) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            All Areas ({researchItems.length})
          </button>
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'ongoing'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            New & Ongoing Research
          </button>
          <button
            onClick={() => setActiveTab('proposed_idea')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'proposed_idea'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Proposed Research Ideas
          </button>
          <button
            onClick={() => setActiveTab('future_tech')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'future_tech'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Future Technologies
          </button>
        </div>

        {/* Search input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search research questions, hypotheses, or technologies..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Grid of Research Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => {
          const isProposed = item.type === 'proposed_idea';
          return (
            <div
              key={item.id}
              onClick={() => setSelectedResearchItem(item)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>

                  {isProposed ? (
                    <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-300 dark:border-amber-700 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Proposed Research Idea
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Literature
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {isProposed && item.researchQuestion && (
                  <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <span className="font-semibold uppercase tracking-wider text-[10px] text-amber-800 dark:text-amber-300 block">
                      Core Research Question
                    </span>
                    <p className="italic line-clamp-2">"{item.researchQuestion}"</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>{isProposed ? 'Examine Hypothesis & Methods' : 'View Research Breakdown'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
