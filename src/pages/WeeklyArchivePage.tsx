import React from 'react';
import { useApp } from '../context/AppContext';
import { WeeklyTheme } from '../types';
import { Calendar, BookOpen, HelpCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const WeeklyArchivePage: React.FC = () => {
  const { weeklyThemes, setSelectedWeeklyTheme, setActivePage } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <Calendar className="w-4 h-4" />
          <span>Curriculum History</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Weekly Learning Archive
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore previous weekly scientific themes and their structured 7-day episodes. The Hub operates on a coherent weekly sequence—from Monday's everyday life context to Sunday's grand recap and mastery quiz.
        </p>
      </div>

      {/* The 7-Day Cycle Explanation Strip */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
          Our Standard Weekly Sequence
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Monday</span>
            <span className="text-slate-600 dark:text-slate-300">Biochemistry in Daily Life</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Tuesday</span>
            <span className="text-slate-600 dark:text-slate-300">Biotechnology Around Us</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Wednesday</span>
            <span className="text-slate-600 dark:text-slate-300">New & Ongoing Research</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Thursday</span>
            <span className="text-slate-600 dark:text-slate-300">Research Ideas & Opportunities</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Friday</span>
            <span className="text-slate-600 dark:text-slate-300">Future Technologies</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-0.5">Saturday</span>
            <span className="text-slate-600 dark:text-slate-300">Research & Data Skills</span>
          </div>
          <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/70">
            <span className="font-bold text-teal-700 dark:text-teal-300 block mb-0.5">Sunday</span>
            <span className="text-teal-900 dark:text-teal-200">Grand Recap & Quiz</span>
          </div>
        </div>
      </div>

      {/* Themes List */}
      <div className="space-y-6">
        <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
          All Weekly Themes
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {weeklyThemes.map((theme) => {
            const isCurrent = theme.status === 'current';
            return (
              <div
                key={theme.id}
                className={`rounded-2xl border p-6 sm:p-8 space-y-6 transition-all ${
                  isCurrent
                    ? 'border-teal-300 dark:border-teal-700 bg-teal-50/20 dark:bg-teal-950/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-teal-600 dark:text-teal-400">
                        WEEK {theme.weekNumber} ({theme.year})
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{theme.startDate} – {theme.endDate}</span>
                      {isCurrent && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-300">
                            Current Active Week
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {theme.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                      {theme.introduction}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setSelectedWeeklyTheme(theme)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                    >
                      View 7-Day Curriculum
                    </button>
                  </div>
                </div>

                {/* Daily Episodes Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                  {theme.episodes.slice(0, 4).map((ep, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1"
                    >
                      <span className="font-bold text-teal-600 dark:text-teal-400 block text-[11px]">
                        {ep.day}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-slate-200 block line-clamp-1">
                        {ep.title}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                        {ep.summary}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200/50 dark:border-slate-700/50 text-xs space-y-2">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-400 block">
                    Curriculum Highlights
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                    {theme.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-500 font-bold">·</span>
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
