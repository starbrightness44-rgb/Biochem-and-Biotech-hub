import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Share2, Check, BookOpen, Clock, Calendar, CheckCircle2, Bookmark, ArrowLeft } from 'lucide-react';

export const PostReaderModal: React.FC = () => {
  const { selectedPost, setSelectedPost, weeklyThemes, setSelectedWeeklyTheme } = useApp();
  const [copied, setCopied] = useState(false);

  if (!selectedPost) return null;

  const relatedTheme = weeklyThemes.find((t) => t.id === selectedPost.weeklyThemeId);

  const handleShare = async () => {
    const shareData = {
      title: selectedPost.title,
      text: selectedPost.summary,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              {selectedPost.category}
            </span>
            {selectedPost.scheduleCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  {selectedPost.dayOfWeek}: {selectedPost.scheduleCategory}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share Article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedPost(null)}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Header */}
          <div className="space-y-3">
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              {selectedPost.title}
            </h1>

            {/* Zero-pill metadata line */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Biochem & Biotech Hub Educational Series</span>
              <span aria-hidden="true">·</span>
              <span>Published {selectedPost.publicationDate}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono-numbers">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTimeEstimate}
              </span>
            </div>

            {relatedTheme && (
              <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 text-xs text-teal-800 dark:text-teal-200 flex items-center justify-between">
                <span>Part of Weekly Theme: <strong>{relatedTheme.title}</strong></span>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    setSelectedWeeklyTheme(relatedTheme);
                  }}
                  className="text-teal-700 dark:text-teal-300 font-medium hover:underline text-[11px]"
                >
                  View Full Week
                </button>
              </div>
            )}
          </div>

          {/* Optional visual diagram or illustration */}
          {selectedPost.imageUrl && (
            <div className="w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 max-h-80">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Summary Callout */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">
            {selectedPost.summary}
          </div>

          {/* Key Equations / Scientific Notation if present */}
          {selectedPost.equations && selectedPost.equations.length > 0 && (
            <div className="p-4 rounded-lg bg-slate-900 text-slate-100 dark:bg-black border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-teal-400">
                Key Biochemical Equations & Reaction Coordinates
              </div>
              <div className="space-y-2 font-mono text-xs sm:text-sm text-teal-200 overflow-x-auto py-1">
                {selectedPost.equations.map((eq, idx) => (
                  <div key={idx} className="p-2 rounded bg-slate-800/80 border border-slate-700/50">
                    {eq}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Article Content */}
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            {selectedPost.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3
                    key={idx}
                    className="font-display font-semibold text-lg sm:text-xl text-slate-900 dark:text-white pt-2 border-b border-slate-200 dark:border-slate-800 pb-1"
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1.5 text-sm">
                    {paragraph.split('\n').map((line, liIdx) => (
                      <li key={liIdx}>
                        {line.replace(/^[-*]|\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Key Takeaways */}
          {selectedPost.keyTakeaways && selectedPost.keyTakeaways.length > 0 && (
            <div className="p-5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Core Educational Takeaways</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-teal-900 dark:text-teal-100">
                {selectedPost.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold shrink-0">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* References */}
          {selectedPost.references && selectedPost.references.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Academic & Literature References
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                {selectedPost.references.map((ref, idx) => (
                  <li key={idx} className="font-mono text-[11px]">
                    [{idx + 1}] {ref.citation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Bottom Action */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 shrink-0">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Hub</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share This Lesson</span>
          </button>
        </div>
      </div>
    </div>
  );
};
