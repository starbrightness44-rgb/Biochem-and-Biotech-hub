import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { QuizQuestion } from '../types';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, Sparkles } from 'lucide-react';

interface Props {
  question?: QuizQuestion;
  onCompleted?: (isCorrect: boolean) => void;
}

export const DailyChallengeWidget: React.FC<Props> = ({ question: propQuestion, onCompleted }) => {
  const { quizzes } = useApp();

  // Find daily quiz or use first question
  const dailyQuiz = quizzes.find((q) => q.quizType === 'daily') || quizzes[0];
  const question = propQuestion || (dailyQuiz ? dailyQuiz.questions[0] : null);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!question) {
    return (
      <div className="p-6 text-center text-xs text-slate-400">
        No active challenge question available.
      </div>
    );
  }

  const isCorrect = selectedOption === question.correctOptionIndex;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (onCompleted) onCompleted(isCorrect);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="rounded-xl border border-[#E3E6DC] dark:border-[#193226] bg-white dark:bg-[#0B1713] shadow-sm p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#E8F3EE] dark:bg-[#133527] text-[#0A5C40] dark:text-[#34D399] flex items-center justify-center font-bold">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#121B16] dark:text-[#F0F5F2]">
              Daily Science Challenge
            </h3>
            <span className="font-mono text-[10.5px] text-[#0A5C40] dark:text-[#34D399] font-medium">
              Category: {question.category}
            </span>
          </div>
        </div>

        {isSubmitted && (
          <button
            onClick={handleRetry}
            className="flex items-center gap-1 text-xs text-[#5C6E64] hover:text-[#0A5C40] dark:hover:text-[#34D399] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry</span>
          </button>
        )}
      </div>

      {/* Question Text */}
      <p className="font-serif text-sm sm:text-base font-semibold text-[#121B16] dark:text-[#F0F5F2] leading-snug">
        {question.questionText}
      </p>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          let optionStyles = 'border-[#E3E6DC] dark:border-[#193226] hover:bg-[#FAF9F5] dark:hover:bg-[#0E1E18] text-[#3E4D45] dark:text-[#A1B3A9]';

          if (isSubmitted) {
            if (idx === question.correctOptionIndex) {
              optionStyles = 'border-[#0A5C40] bg-[#E8F3EE] dark:bg-[#112F24] text-[#0A5C40] dark:text-[#34D399] font-medium';
            } else if (idx === selectedOption) {
              optionStyles = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
            } else {
              optionStyles = 'border-[#E3E6DC] dark:border-[#193226] opacity-40';
            }
          } else if (selectedOption === idx) {
            optionStyles = 'border-[#0A5C40] bg-[#E8F3EE] dark:bg-[#112F24] text-[#0A5C40] dark:text-[#34D399] ring-1 ring-[#0A5C40]';
          }

          return (
            <button
              key={idx}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(idx)}
              className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-all ${optionStyles}`}
            >
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 font-mono font-bold mt-0.5">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{option}</span>
              {isSubmitted && idx === question.correctOptionIndex && (
                <CheckCircle className="w-4 h-4 text-[#0A5C40] dark:text-[#34D399] shrink-0 self-center" />
              )}
              {isSubmitted && idx === selectedOption && idx !== question.correctOptionIndex && (
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 self-center" />
              )}
            </button>
          );
        })}
      </div>

      {/* Submit Button (if not submitted) */}
      {!isSubmitted && (
        <button
          disabled={selectedOption === null}
          onClick={handleSubmit}
          className={`w-full py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-all ${
            selectedOption === null
              ? 'bg-[#E5E8DF] dark:bg-[#14261F] text-[#86968E] cursor-not-allowed'
              : 'bg-[#0A5C40] hover:bg-[#074731] dark:bg-[#107050] dark:hover:bg-[#0E5E43] text-white'
          }`}
        >
          Submit Answer
        </button>
      )}

      {/* Answer Feedback & Scientific Explanation */}
      {isSubmitted && (
        <div
          className={`p-4 rounded-lg border text-xs sm:text-sm space-y-2 animate-in fade-in duration-200 ${
            isCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
          }`}
        >
          <div className="flex items-center gap-2 font-bold">
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Correct Answer!</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Incorrect Selection</span>
              </>
            )}
          </div>
          <div className="pt-1 text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
            <strong className="block text-slate-900 dark:text-white mb-0.5">Scientific Explanation:</strong>
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  );
};
