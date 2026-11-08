import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink, AlertTriangle, Lightbulb, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export const ResearchDetailModal: React.FC = () => {
  const { selectedResearchItem, setSelectedResearchItem } = useApp();

  if (!selectedResearchItem) return null;

  const isProposedIdea = selectedResearchItem.type === 'proposed_idea';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              {selectedResearchItem.category}
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">
              {isProposedIdea ? 'Research Opportunity' : 'Verified Research Highlight'}
            </span>
          </div>

          <button
            onClick={() => setSelectedResearchItem(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Strict Proposed Research Idea Banner */}
          {isProposedIdea && (
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/70 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Proposed Research Idea (Academic Hypothesis)</span>
              </div>
              <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                This is a theoretical research proposal and investigative hypothesis formulated for student thesis inspiration, academic critique, and experimental conception. It has <strong>not</strong> been experimentally confirmed or clinically validated.
              </p>
            </div>
          )}

          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
              {selectedResearchItem.title}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
              <span>Published: {selectedResearchItem.publicationDate}</span>
              <span aria-hidden="true">·</span>
              <span>{isProposedIdea ? 'Conceptual Design' : 'Peer-Reviewed Literature Basis'}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Executive Overview
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedResearchItem.summary}
            </p>
          </div>

          {/* Background */}
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Scientific Background
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedResearchItem.background}
            </p>
          </div>

          {/* If Proposed Idea: Research Question, Hypothesis, Methodology, Limitations */}
          {isProposedIdea && (
            <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              {selectedResearchItem.researchQuestion && (
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                    Core Research Question:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                    "{selectedResearchItem.researchQuestion}"
                  </p>
                </div>
              )}

              {selectedResearchItem.hypothesis && (
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Working Hypothesis
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedResearchItem.hypothesis}
                  </p>
                </div>
              )}

              {selectedResearchItem.suggestedMethodology && (
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Suggested Experimental Methodology
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-200 dark:border-slate-700/60 font-mono text-[12px]">
                    {selectedResearchItem.suggestedMethodology}
                  </div>
                </div>
              )}

              {selectedResearchItem.limitations && (
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                    Known Limitations & Technical Confounders
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedResearchItem.limitations}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* References */}
          {selectedResearchItem.references && selectedResearchItem.references.length > 0 && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                References & Attribution
              </h4>
              <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                {selectedResearchItem.references.map((ref, idx) => (
                  <li key={idx} className="font-mono text-[11px]">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
          <button
            onClick={() => setSelectedResearchItem(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>

          {selectedResearchItem.sourceUrl && (
            <a
              href={selectedResearchItem.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-colors"
            >
              <span>View Verified Literature</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
