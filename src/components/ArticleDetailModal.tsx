import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink, Share2, Check, Bookmark, Calendar, Building, Sparkles } from 'lucide-react';

export const ArticleDetailModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle } = useApp();
  const [copied, setCopied] = useState(false);

  if (!selectedArticle) return null;

  const handleShare = async () => {
    const shareData = {
      title: selectedArticle.title,
      text: selectedArticle.originalSummary,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedArticle.originalUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>External Science Discovery</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share or Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedArticle(null)}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Optional visual banner */}
          {selectedArticle.imageUrl && (
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Title */}
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
              {selectedArticle.title}
            </h2>

            {/* Unboxed metadata line with typographic separators (anti-slop rule) */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Publisher: {selectedArticle.publisher}
              </span>
              <span aria-hidden="true">·</span>
              <span>Published: {selectedArticle.publicationDate}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>
          </div>

          {/* Independently written summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Curated Science Summary
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {selectedArticle.originalSummary}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="p-4 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/80 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why This Discovery Matters</span>
            </div>
            <p className="text-xs sm:text-sm text-teal-900 dark:text-teal-200/90 leading-relaxed">
              {selectedArticle.whyItMatters}
            </p>
          </div>

          {/* Attribution Notice */}
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <span className="font-medium text-slate-700 dark:text-slate-300 block">
              Original Publisher Attribution
            </span>
            <p>
              In accordance with copyright and fair reporting principles, Biochem & Biotech Hub provides independent educational commentary and directs readers to the original published study on {selectedArticle.publisher}.
            </p>
          </div>
        </div>

        {/* Modal Footer with Direct Outbound Link */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60">
          <button
            onClick={() => setSelectedArticle(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>

          <a
            href={selectedArticle.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <span>Read Original Article on {selectedArticle.publisher}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
