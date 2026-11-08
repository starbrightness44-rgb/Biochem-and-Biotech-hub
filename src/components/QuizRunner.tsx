import React, { useState } from 'react';
import { Quiz } from '../types';
import { CheckCircle2, XCircle, RefreshCw, Award, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  quiz: Quiz;
  onExit?: () => void;
}

export const QuizRunner: React.FC<Props> = ({ quiz, onExit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quiz.questions[currentIdx];
  const selectedAnswer = answers[currentIdx] ?? null;

  const handleSelectOption = (optIdx: number) => {
    if (isCompleted) return;
    setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleNext = () => {
    if (currentIdx < quiz.questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Score Calculations
  const score = quiz.questions.reduce((acc, q, idx) => {
    return answers[idx] === q.correctOptionIndex ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((score / quiz.questions.length) * 100);

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider block">
            {quiz.quizType === 'grand_sunday' ? 'Grand Sunday Assessment' : 'Topic Challenge'} · {quiz.topic}
          </span>
          <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-1">
            {quiz.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
            {quiz.difficulty}
          </span>
          {onExit && (
            <button
              onClick={onExit}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Exit Quiz
            </button>
          )}
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          {/* Progress Ribbon */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-numbers">
              <span>
                Question {currentIdx + 1} of {quiz.questions.length}
              </span>
              <span>
                Progress: {Math.round(((currentIdx + 1) / quiz.questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
              {currentQ.questionText}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-lg border text-xs sm:text-sm flex items-start gap-3 transition-all ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 ring-1 ring-teal-500 font-medium'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 font-mono font-bold mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              disabled={currentIdx === 0}
              onClick={handlePrev}
              className={`flex items-center gap-1 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                currentIdx === 0
                  ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              disabled={selectedAnswer === null}
              onClick={handleNext}
              className={`flex items-center gap-1 px-5 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all ${
                selectedAnswer === null
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white'
              }`}
            >
              <span>{currentIdx === quiz.questions.length - 1 ? 'Finish Assessment' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Final Result Screen */
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <h4 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
              Assessment Completed!
            </h4>

            {/* Score Metrics */}
            <div className="flex items-center justify-center gap-6 py-2">
              <div>
                <span className="text-3xl font-bold font-mono text-teal-600 dark:text-teal-400">
                  {score}/{quiz.questions.length}
                </span>
                <span className="block text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">
                  Raw Score
                </span>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
              <div>
                <span className="text-3xl font-bold font-mono text-slate-900 dark:text-white">
                  {percentage}%
                </span>
                <span className="block text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">
                  Accuracy
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {percentage >= 80
                ? 'Outstanding mastery of this week’s scientific principles! You have a rigorous understanding of the biochemical mechanisms.'
                : percentage >= 50
                ? 'Good effort! Review the detailed scientific explanations below to reinforce key concepts.'
                : 'Scientific concepts require iterative learning. Check the explanations and attempt again whenever ready.'}
            </p>

            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Assessment</span>
            </button>
          </div>

          {/* Detailed Question Review & Explanations */}
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Detailed Question Review & Scientific Explanations
            </h5>

            <div className="space-y-4">
              {quiz.questions.map((q, idx) => {
                const userChoice = answers[idx];
                const isUserCorrect = userChoice === q.correctOptionIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border text-xs sm:text-sm space-y-2 ${
                      isUserCorrect
                        ? 'border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-rose-200 dark:border-rose-800/60 bg-rose-50/40 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {isUserCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1.5 flex-1">
                        <span className="font-semibold text-slate-900 dark:text-white block">
                          Q{idx + 1}: {q.questionText}
                        </span>
                        
                        <div className="text-xs space-y-1">
                          <p className="text-slate-600 dark:text-slate-400">
                            Your Answer: <strong>{q.options[userChoice] || 'Not answered'}</strong>
                          </p>
                          {!isUserCorrect && (
                            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                              Correct Answer: <strong>{q.options[q.correctOptionIndex]}</strong>
                            </p>
                          )}
                        </div>

                        <div className="p-3 rounded bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
                          <strong className="block text-slate-900 dark:text-white text-[11px] uppercase tracking-wider mb-1">
                            Mechanism Explanation:
                          </strong>
                          {q.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
