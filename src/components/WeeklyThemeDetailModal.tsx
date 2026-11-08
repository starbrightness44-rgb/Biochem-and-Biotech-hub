import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, CheckCircle, BookOpen, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const WeeklyThemeDetailModal: React.FC = () => {
  const {
    selectedWeeklyTheme,
    setSelectedWeeklyTheme,
    educationalPosts,
    setSelectedPost,
    setActivePage,
  } = useApp();

  if (!selectedWeeklyTheme) return null;

  const handleOpenEpisode = (postId?: string) => {
    if (!postId) return;
    const post = educationalPosts.find((p) => p.id === postId);
    if (post) {
      setSelectedWeeklyTheme(null);
      setSelectedPost(post);
    }
  };

  const handleOpenQuiz = () => {
    setSelectedWeeklyTheme(null);
    setActivePage('challenges');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Week {selectedWeeklyTheme.weekNumber} · {selectedWeeklyTheme.year}
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">
              {selectedWeeklyTheme.startDate} – {selectedWeeklyTheme.endDate}
            </span>
          </div>

          <button
            onClick={() => setSelectedWeeklyTheme(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              {selectedWeeklyTheme.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedWeeklyTheme.introduction}
            </p>
          </div>

          {/* 7-Day Curriculum Timeline */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Weekly Publishing Sequence (Monday – Sunday)
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {selectedWeeklyTheme.episodes.map((ep, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-start justify-between gap-3 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-teal-700 dark:text-teal-300">
                        {ep.day}
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {ep.scheduleCategory}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {ep.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ep.summary}
                    </p>
                  </div>

                  {ep.postId && (
                    <button
                      onClick={() => handleOpenEpisode(ep.postId)}
                      className="px-2.5 py-1 text-xs font-medium text-teal-700 bg-teal-100 hover:bg-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:hover:bg-teal-900 rounded shrink-0 self-center flex items-center gap-1 transition-colors"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Read</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Weekly Key Takeaways</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-teal-900 dark:text-teal-100">
              {selectedWeeklyTheme.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold shrink-0">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
          <button
            onClick={() => setSelectedWeeklyTheme(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>

          <button
            onClick={handleOpenQuiz}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Take Grand Sunday Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};
