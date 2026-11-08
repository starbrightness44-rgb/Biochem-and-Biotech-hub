/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DiscoveriesPage } from './pages/DiscoveriesPage';
import { LearnPage } from './pages/LearnPage';
import { ResearchPage } from './pages/ResearchPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { WeeklyArchivePage } from './pages/WeeklyArchivePage';
import { AboutPage } from './pages/AboutPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { PoliciesPage } from './pages/PoliciesPage';

// Modals
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { PostReaderModal } from './components/PostReaderModal';
import { ResearchDetailModal } from './components/ResearchDetailModal';
import { WeeklyThemeDetailModal } from './components/WeeklyThemeDetailModal';
import { TopicSubmissionModal } from './components/TopicSubmissionModal';

const AppContent: React.FC = () => {
  const { activePage, setIsSearchOpen } = useApp();
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);

  // Keyboard shortcut: Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] dark:bg-[#090C10] dark:text-[#F1F5F9] transition-colors duration-200">
      {/* Top Bar */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage onOpenTopicModal={() => setIsTopicModalOpen(true)} />
        )}
        {activePage === 'discoveries' && <DiscoveriesPage />}
        {activePage === 'learn' && <LearnPage />}
        {activePage === 'research' && (
          <ResearchPage onOpenTopicModal={() => setIsTopicModalOpen(true)} />
        )}
        {activePage === 'challenges' && <ChallengesPage />}
        {activePage === 'weekly-archive' && <WeeklyArchivePage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'admin' && <AdminDashboardPage />}
        {activePage === 'editorial-policy' && <PoliciesPage initialSection="editorial" />}
        {activePage === 'copyright-policy' && <PoliciesPage initialSection="copyright" />}
        {activePage === 'privacy-policy' && <PoliciesPage initialSection="privacy" />}
      </main>

      {/* Modals & Overlays */}
      <GlobalSearchModal />
      <ArticleDetailModal />
      <PostReaderModal />
      <ResearchDetailModal />
      <WeeklyThemeDetailModal />
      <TopicSubmissionModal
        isOpen={isTopicModalOpen}
        onClose={() => setIsTopicModalOpen(false)}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
