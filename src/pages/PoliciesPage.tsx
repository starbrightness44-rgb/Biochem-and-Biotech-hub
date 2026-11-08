import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, FileText, Lock, RefreshCw, Mail, Phone } from 'lucide-react';

interface Props {
  initialSection?: 'editorial' | 'copyright' | 'privacy';
}

export const PoliciesPage: React.FC<Props> = ({ initialSection = 'editorial' }) => {
  const { settings } = useApp();
  const [activeTab, setActiveTab] = useState<'editorial' | 'copyright' | 'privacy'>(initialSection);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Governance & Integrity</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Editorial & Compliance Policies
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Biochem & Biotech Hub adheres to strict standards of scientific accuracy, copyright compliance, fair attribution, and visitor privacy.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs">
        <button
          onClick={() => setActiveTab('editorial')}
          className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
            activeTab === 'editorial'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Editorial & Correction Policy
        </button>

        <button
          onClick={() => setActiveTab('copyright')}
          className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
            activeTab === 'copyright'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Copyright & Fair Attribution
        </button>

        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 font-semibold rounded-lg transition-colors ${
            activeTab === 'privacy'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Privacy & Data Policy
        </button>
      </div>

      {/* Editorial Policy */}
      {activeTab === 'editorial' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Editorial Standards & Scientific Credibility
          </h2>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              1. Literature Verification & Primary Sources
            </h3>
            <p>
              We curate articles and breakthroughs solely from recognized, peer-reviewed journals (such as <em>Nature</em>, <em>Science</em>, <em>Cell</em>, <em>PNAS</em>, <em>Nature Biotechnology</em>, and <em>ACS</em>). We never invent citations, fabricated statistics, imaginary clinical trials, or non-existent discoveries.
            </p>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              2. Strict Demarcation of Proposed Research
            </h3>
            <p>
              Any theoretical hypothesis or investigative topic published under our Thursday "Research Ideas & Opportunities" stream is prominently labeled with an explicit <strong>Proposed Research Idea</strong> banner. We strictly prohibit presenting speculative hypotheses as experimentally confirmed discoveries.
            </p>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              3. Independent Educational Voice
            </h3>
            <p>
              Biochem & Biotech Hub is an independent learning community. Content published on this website reflects independent educational commentary and does not represent official institutional policy of any academic university or regulatory authority.
            </p>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              4. Corrections and Inquiries
            </h3>
            <p>
              If a researcher, author, or student identifies a scientific nuance requiring revision or mathematical correction, please contact our editorial desk at <a href={`mailto:${settings.officialEmail}`} className="text-teal-600 font-mono underline">{settings.officialEmail}</a>. Verified corrections will be updated promptly with an editorial note.
            </p>
          </div>
        </div>
      )}

      {/* Copyright Policy */}
      {activeTab === 'copyright' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Copyright, Fair Use & Attribution Policy
          </h2>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              1. Directing Scholars to Original Publishers
            </h3>
            <p>
              Biochem & Biotech Hub does not reproduce full copyrighted journal articles, proprietary paywalled figures, or complete publisher manuscripts without permission or a suitable open-access licence (e.g., CC-BY 4.0).
            </p>
            <p>
              Every external discovery card on our platform displays:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>The original publisher's recognized name.</li>
              <li>The official article title.</li>
              <li>The publication date.</li>
              <li>An independently authored educational summary.</li>
              <li>A direct outbound hyperlink to the primary publication on the original publisher's website.</li>
            </ul>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              2. Hub Educational Content
            </h3>
            <p>
              Original educational explanations, reaction mechanism breakdowns, and quizzes authored by the Hub are protected by copyright. Educators and students are permitted to cite or use excerpts for non-commercial educational purposes with attribution to <strong>Biochem & Biotech Hub</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            Privacy & Non-Intrusive Learning Policy
          </h2>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              1. Open Access Without Mandatory Accounts
            </h3>
            <p>
              We believe scientific learning should be barrier-free. Visitors are not forced to register accounts, sign in, or provide phone numbers to read articles, browse weekly themes, or participate in interactive science quizzes.
            </p>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              2. Data Collection
            </h3>
            <p>
              We only receive personal details (such as your name or email) when you voluntarily submit a topic suggestion or send a message via our contact form. This information is used strictly to respond to your academic inquiry and is never sold or shared with commercial marketers.
            </p>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              3. Local Progress Storage
            </h3>
            <p>
              Your dark/light theme preferences and local reading progress are stored locally on your device in your browser's standard localStorage.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
