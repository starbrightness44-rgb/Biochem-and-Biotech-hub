import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ExternalArticle,
  EducationalPost,
  WeeklyTheme,
  Quiz,
  ResearchItem,
  WebsiteSettings,
  ScienceCategory,
  ALL_CATEGORIES,
  DayOfWeek,
} from '../types';
import {
  Lock,
  LogOut,
  Save,
  Plus,
  Trash2,
  Edit2,
  Check,
  RotateCcw,
  Download,
  Upload,
  Globe,
  BookOpen,
  HelpCircle,
  Calendar,
  Lightbulb,
  Mail,
  Shield,
  Eye,
  EyeOff,
  Settings,
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const {
    settings,
    updateSettings,
    externalArticles,
    addExternalArticle,
    updateExternalArticle,
    deleteExternalArticle,
    educationalPosts,
    addEducationalPost,
    updateEducationalPost,
    deleteEducationalPost,
    weeklyThemes,
    addWeeklyTheme,
    updateWeeklyTheme,
    deleteWeeklyTheme,
    quizzes,
    addQuiz,
    updateQuiz,
    deleteQuiz,
    researchItems,
    addResearchItem,
    updateResearchItem,
    deleteResearchItem,
    topicSubmissions,
    contactMessages,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    resetToDefaults,
  } = useApp();

  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'settings' | 'external' | 'educational' | 'quizzes' | 'themes' | 'research' | 'submissions'
  >('settings');

  const [saveToast, setSaveToast] = useState('');

  const triggerToast = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(''), 2500);
  };

  // Local state for Central Settings editing
  const [localSettings, setLocalSettings] = useState<WebsiteSettings>(settings);

  // If not logged in, render authentication challenge
  if (!isAdminLoggedIn) {
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      const success = loginAdmin(passcode);
      if (!success) {
        setLoginError(true);
      } else {
        setLoginError(false);
        setPasscode('');
      }
    };

    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-6">
          <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div className="text-center space-y-1">
            <h1 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Admin CMS Authentication
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter the administrator passcode to access content publishing and central settings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode (default: biotech2026)"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {loginError && (
                <p className="text-xs text-rose-600 mt-1">
                  Incorrect passcode. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-colors"
            >
              Authenticate & Unlock CMS
            </button>
          </form>

          <div className="pt-2 text-center text-[11px] text-slate-400">
            Default initial passcode: <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">biotech2026</code>
          </div>
        </div>
      </div>
    );
  }

  // --- Admin CMS Portal ---

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(localSettings);
    triggerToast('Central Website Settings updated successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner & Logout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-teal-900 text-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-500/30 flex items-center justify-center text-teal-300">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-white">
              Biochem & Biotech Hub CMS
            </h1>
            <span className="text-xs text-teal-200">
              Authenticated Session · Full Publishing Privileges
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveToast && (
            <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-700">
              {saveToast}
            </span>
          )}
          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-teal-800 hover:bg-teal-700 rounded-lg text-white transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock & Exit CMS</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'settings'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Central Website Settings</span>
        </button>

        <button
          onClick={() => setActiveTab('external')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'external'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>External Discoveries ({externalArticles.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('educational')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'educational'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Educational Posts ({educationalPosts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quizzes')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'quizzes'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Quizzes & Challenges ({quizzes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('themes')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'themes'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Weekly Themes ({weeklyThemes.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('research')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'research'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Research Items ({researchItems.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('submissions')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'submissions'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Inquiries & Topics ({topicSubmissions.length + contactMessages.length})</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: CENTRAL WEBSITE SETTINGS (Section 14)
          One central settings area to manage name, tagline, phones, WhatsApp, etc.
      ========================================================================= */}
      {activeTab === 'settings' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Central Website Configuration
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Changes saved here update immediately across the homepage, navigation, about page, and footer without code duplication.
            </p>
          </div>

          <form onSubmit={handleSaveSettings} className="space-y-6">
            
            {/* Branding & Identity */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Hub Identity & Descriptions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Hub Official Name
                  </label>
                  <input
                    type="text"
                    value={localSettings.name}
                    onChange={(e) => setLocalSettings({ ...localSettings, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Official Tagline
                  </label>
                  <input
                    type="text"
                    value={localSettings.tagline}
                    onChange={(e) => setLocalSettings({ ...localSettings, tagline: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Official Description
                </label>
                <textarea
                  rows={3}
                  value={localSettings.description}
                  onChange={(e) => setLocalSettings({ ...localSettings, description: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Official Contact Numbers (Section 13) */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Official Public Contact Numbers & Telephony Links
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Public Phone 1
                  </label>
                  <input
                    type="text"
                    value={localSettings.contactPhone1}
                    onChange={(e) => setLocalSettings({ ...localSettings, contactPhone1: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Telephone Link 1
                  </label>
                  <input
                    type="text"
                    value={localSettings.phoneLink1}
                    onChange={(e) => setLocalSettings({ ...localSettings, phoneLink1: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp Link 1
                  </label>
                  <input
                    type="text"
                    value={localSettings.whatsAppLink1}
                    onChange={(e) => setLocalSettings({ ...localSettings, whatsAppLink1: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Public Phone 2
                  </label>
                  <input
                    type="text"
                    value={localSettings.contactPhone2}
                    onChange={(e) => setLocalSettings({ ...localSettings, contactPhone2: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Telephone Link 2
                  </label>
                  <input
                    type="text"
                    value={localSettings.phoneLink2}
                    onChange={(e) => setLocalSettings({ ...localSettings, phoneLink2: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp Link 2
                  </label>
                  <input
                    type="text"
                    value={localSettings.whatsAppLink2}
                    onChange={(e) => setLocalSettings({ ...localSettings, whatsAppLink2: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={localSettings.officialEmail}
                  onChange={(e) => setLocalSettings({ ...localSettings, officialEmail: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                />
              </div>
            </div>

            {/* Channels & Social Links */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Community, Founder LinkedIn & Social Handles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Official WhatsApp Channel Link
                  </label>
                  <input
                    type="url"
                    value={localSettings.whatsAppChannel}
                    onChange={(e) => setLocalSettings({ ...localSettings, whatsAppChannel: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp Community Group Link
                  </label>
                  <input
                    type="url"
                    value={localSettings.whatsAppCommunity}
                    onChange={(e) => setLocalSettings({ ...localSettings, whatsAppCommunity: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="showCommunity"
                      checked={localSettings.showCommunityGroup}
                      onChange={(e) => setLocalSettings({ ...localSettings, showCommunityGroup: e.target.checked })}
                      className="rounded text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="showCommunity" className="text-[11px] text-slate-500">
                      Display community group link publicly on website
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Founder LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={localSettings.founderLinkedIn}
                  onChange={(e) => setLocalSettings({ ...localSettings, founderLinkedIn: e.target.value })}
                  placeholder="https://www.linkedin.com/in/..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Displayed in public community cards and footer as "Founder's LinkedIn" without exposing personal names.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Instagram Profile Link
                  </label>
                  <input
                    type="url"
                    value={localSettings.instagram}
                    onChange={(e) => setLocalSettings({ ...localSettings, instagram: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    TikTok Profile Link
                  </label>
                  <input
                    type="url"
                    value={localSettings.tikTok}
                    onChange={(e) => setLocalSettings({ ...localSettings, tikTok: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Admin Passcode */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Admin CMS Passcode
              </label>
              <input
                type="text"
                value={localSettings.adminPasscode}
                onChange={(e) => setLocalSettings({ ...localSettings, adminPasscode: e.target.value })}
                className="max-w-xs px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
              <span className="block text-[11px] text-slate-400 mt-1">
                Used to unlock this administrative dashboard on any device.
              </span>
            </div>

            {/* Save Buttons & Factory Reset */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Reset all content and settings back to original initial state?')) {
                    resetToDefaults();
                    triggerToast('System reset to verified initial state.');
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors border border-rose-200 dark:border-rose-900"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Seed Defaults</span>
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save All Central Settings</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* =========================================================================
          TAB 2: EXTERNAL DISCOVERIES MANAGEMENT
      ========================================================================= */}
      {activeTab === 'external' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Manage External Science Discoveries
              </h2>
              <p className="text-xs text-slate-500">
                Publish curated papers with publisher attribution, original URL, and independent summaries.
              </p>
            </div>

            <button
              onClick={() => {
                const title = prompt('Enter Article Title:');
                if (!title) return;
                const publisher = prompt('Enter Publisher Name (e.g. Nature, Science):') || 'Nature';
                const originalUrl = prompt('Enter Original Article URL:') || 'https://nature.com';
                const summary = prompt('Enter Independent Summary:') || '';
                const whyItMatters = prompt('Enter Why It Matters:') || '';

                addExternalArticle({
                  title,
                  publisher,
                  originalUrl,
                  publicationDate: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }),
                  category: 'Biotechnology',
                  originalSummary: summary,
                  whyItMatters,
                  isFeatured: false,
                  readTime: '4 min read',
                  isPublished: true,
                });
                triggerToast('New discovery published successfully.');
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Discovery</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {externalArticles.map((art) => (
              <div key={art.id} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-teal-600 dark:text-teal-400">{art.publisher}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{art.category}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-400">{art.publicationDate}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{art.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{art.originalSummary}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      updateExternalArticle(art.id, { isPublished: !art.isPublished });
                      triggerToast(`Article ${art.isPublished ? 'Unpublished' : 'Published'}`);
                    }}
                    className={`p-1.5 rounded text-xs ${
                      art.isPublished
                        ? 'text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={art.isPublished ? 'Published (Click to unpublish)' : 'Draft (Click to publish)'}
                  >
                    {art.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => {
                      updateExternalArticle(art.id, { isFeatured: !art.isFeatured });
                      triggerToast(`Featured status toggled.`);
                    }}
                    className={`p-1.5 rounded text-xs ${
                      art.isFeatured ? 'text-amber-500 font-bold' : 'text-slate-400'
                    }`}
                    title="Toggle Featured on Homepage"
                  >
                    ★
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Delete "${art.title}"?`)) {
                        deleteExternalArticle(art.id);
                        triggerToast('Article deleted.');
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: EDUCATIONAL POSTS MANAGEMENT
      ========================================================================= */}
      {activeTab === 'educational' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Manage Hub Educational Posts
              </h2>
              <p className="text-xs text-slate-500">
                Author original explanations with equations, references, and takeaways.
              </p>
            </div>

            <button
              onClick={() => {
                const title = prompt('Enter Post Title:');
                if (!title) return;
                const summary = prompt('Enter Summary:') || '';
                const content = prompt('Enter Markdown Content:') || '';

                addEducationalPost({
                  title,
                  category: 'Biochemistry',
                  summary,
                  content: content || '### 1. Introduction\nDetailed explanation...',
                  keyTakeaways: ['Key fundamental principle.'],
                  references: [{ citation: 'Standard biochemistry literature reference.' }],
                  publicationDate: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }),
                  readTimeEstimate: '5 min read',
                  isPublished: true,
                });
                triggerToast('Educational lesson created.');
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Educational Post</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {educationalPosts.map((post) => (
              <div key={post.id} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-blue-600 dark:text-blue-400">{post.category}</span>
                    {post.scheduleCategory && (
                      <>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">{post.dayOfWeek}: {post.scheduleCategory}</span>
                      </>
                    )}
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-400">{post.readTimeEstimate}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{post.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{post.summary}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      updateEducationalPost(post.id, { isPublished: !post.isPublished });
                      triggerToast(`Post status updated.`);
                    }}
                    className="p-1.5 text-slate-400 hover:text-teal-600 rounded"
                  >
                    {post.isPublished ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => {
                      if (confirm(`Delete post "${post.title}"?`)) {
                        deleteEducationalPost(post.id);
                        triggerToast('Educational post removed.');
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: QUIZZES MANAGEMENT
      ========================================================================= */}
      {activeTab === 'quizzes' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Manage Interactive Quizzes
              </h2>
              <p className="text-xs text-slate-500">
                Create Daily Science Challenges, Grand Sunday Quizzes, and Topic Assessments.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{quiz.quizType}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{quiz.topic}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-400">{quiz.questions.length} questions</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{quiz.title}</h4>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      updateQuiz(quiz.id, { isPublished: !quiz.isPublished });
                      triggerToast('Quiz publication updated.');
                    }}
                    className="p-1.5 text-slate-400 hover:text-teal-600 rounded"
                  >
                    {quiz.isPublished ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete quiz "${quiz.title}"?`)) {
                        deleteQuiz(quiz.id);
                        triggerToast('Quiz deleted.');
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: WEEKLY THEMES MANAGEMENT
      ========================================================================= */}
      {activeTab === 'themes' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Manage Weekly Learning Themes
              </h2>
              <p className="text-xs text-slate-500">
                Organize weekly 7-day curricula, daily episodes, and key takeaways.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {weeklyThemes.map((theme) => (
              <div key={theme.id} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-teal-600">Week {theme.weekNumber} ({theme.year})</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-mono text-xs">{theme.status.toUpperCase()}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{theme.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{theme.introduction}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      updateWeeklyTheme(theme.id, {
                        status: theme.status === 'current' ? 'archived' : 'current',
                      });
                      triggerToast('Theme status switched.');
                    }}
                    className="px-2.5 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                  >
                    Toggle Active
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 6: RESEARCH MANAGEMENT
      ========================================================================= */}
      {activeTab === 'research' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Manage Research & Proposals
              </h2>
              <p className="text-xs text-slate-500">
                Maintain verified literature discoveries vs clearly designated Proposed Research Ideas.
              </p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {researchItems.map((item) => (
              <div key={item.id} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-indigo-600">{item.type}</span>
                    <span className="text-slate-400">·</span>
                    <span>{item.category}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                </div>

                <button
                  onClick={() => {
                    if (confirm(`Delete "${item.title}"?`)) {
                      deleteResearchItem(item.id);
                      triggerToast('Research item removed.');
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 7: SUBMISSIONS & INQUIRIES
      ========================================================================= */}
      {activeTab === 'submissions' && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Topic Submissions */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              User Submitted Science Topics ({topicSubmissions.length})
            </h3>
            {topicSubmissions.length === 0 ? (
              <p className="text-xs text-slate-400">No topic suggestions submitted yet.</p>
            ) : (
              <div className="space-y-3">
                {topicSubmissions.map((sub) => (
                  <div key={sub.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">{sub.category}</span>
                      <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                    </div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">{sub.topicTitle}</h5>
                    <p className="text-slate-700 dark:text-slate-300">{sub.description}</p>
                    <div className="text-[11px] text-slate-500 pt-1">
                      Submitted by: {sub.name} ({sub.email || 'No email provided'})
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Inquiries */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Contact Desk Messages ({contactMessages.length})
            </h3>
            {contactMessages.length === 0 ? (
              <p className="text-xs text-slate-400">No contact messages received yet.</p>
            ) : (
              <div className="space-y-3">
                {contactMessages.map((msg) => (
                  <div key={msg.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{msg.subject}</span>
                      <span>{new Date(msg.sentAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{msg.message}</p>
                    <div className="text-[11px] text-slate-500 pt-1">
                      From: {msg.name} · <a href={`mailto:${msg.email}`} className="text-teal-600 hover:underline">{msg.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
