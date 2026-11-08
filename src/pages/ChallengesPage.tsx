import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Quiz, ScienceCategory } from '../types';
import { DailyChallengeWidget } from '../components/DailyChallengeWidget';
import { QuizRunner } from '../components/QuizRunner';
import { HelpCircle, Award, BookOpen, Clock, Play, RotateCcw, CheckCircle2 } from 'lucide-react';

export const ChallengesPage: React.FC = () => {
  const { quizzes, weeklyThemes } = useApp();

  const [activeRunningQuiz, setActiveRunningQuiz] = useState<Quiz | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'grand_sunday' | 'topic_based'>('all');

  const grandSundayQuizzes = quizzes.filter((q) => q.quizType === 'grand_sunday' && q.isPublished);
  const topicQuizzes = quizzes.filter((q) => q.quizType === 'topic_based' && q.isPublished);

  const displayedQuizzes = quizzes.filter((q) => {
    if (!q.isPublished) return false;
    if (q.quizType === 'daily') return false; // Handled by Daily widget
    if (filterType !== 'all' && q.quizType !== filterType) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <HelpCircle className="w-4 h-4" />
          <span>Interactive Life Sciences Assessment</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Science Challenges & Quizzes
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Test your comprehension, clinical reasoning, and biochemical intuition. All challenges include comprehensive mechanistic explanations, instant scoring, and unlimited retries—no accounts or registrations required.
        </p>
      </div>

      {/* If a quiz is actively being attempted, render QuizRunner prominently */}
      {activeRunningQuiz ? (
        <div className="scroll-mt-20" id="quiz-runner-container">
          <QuizRunner quiz={activeRunningQuiz} onExit={() => setActiveRunningQuiz(null)} />
        </div>
      ) : (
        <>
          {/* Section 1: Daily Science Challenge Widget */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Today's Knowledge Probe
            </h2>
            <div className="max-w-3xl">
              <DailyChallengeWidget />
            </div>
          </div>

          {/* Section 2: Weekly Grand Sunday & Topic Quizzes */}
          <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Multi-Question Quizzes & Assessments
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Comprehensive mastery reviews covering full weekly themes and domain topics.
                </p>
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filterType === 'all'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  All Quizzes ({quizzes.filter((q) => q.quizType !== 'daily').length})
                </button>
                <button
                  onClick={() => setFilterType('grand_sunday')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filterType === 'grand_sunday'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Grand Sunday Quizzes
                </button>
                <button
                  onClick={() => setFilterType('topic_based')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filterType === 'topic_based'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Topic-Based
                </button>
              </div>
            </div>

            {/* Quiz Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {quiz.topic}
                      </span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {quiz.difficulty}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {quiz.title}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono-numbers">
                      <span>{quiz.questions.length} Questions</span>
                      <span aria-hidden="true">·</span>
                      <span>Instant Scoring & Feedback</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveRunningQuiz(quiz);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg shadow-sm transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Start Quiz</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};
