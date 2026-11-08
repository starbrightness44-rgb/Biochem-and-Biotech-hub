import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ExternalArticle,
  EducationalPost,
  WeeklyTheme,
  Quiz,
  ResearchItem,
  WebsiteSettings,
  TopicSubmission,
  ContactMessage,
  ScienceCategory,
} from '../types';
import {
  INITIAL_SETTINGS,
  INITIAL_EXTERNAL_ARTICLES,
  INITIAL_EDUCATIONAL_POSTS,
  INITIAL_WEEKLY_THEMES,
  INITIAL_QUIZZES,
  INITIAL_RESEARCH_ITEMS,
} from '../data/seedData';

export type PageRoute =
  | 'home'
  | 'discoveries'
  | 'learn'
  | 'research'
  | 'challenges'
  | 'weekly-archive'
  | 'about'
  | 'admin'
  | 'editorial-policy'
  | 'copyright-policy'
  | 'privacy-policy';

interface AppContextType {
  // Settings
  settings: WebsiteSettings;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;

  // External Articles
  externalArticles: ExternalArticle[];
  addExternalArticle: (article: Omit<ExternalArticle, 'id'>) => void;
  updateExternalArticle: (id: string, article: Partial<ExternalArticle>) => void;
  deleteExternalArticle: (id: string) => void;

  // Educational Posts
  educationalPosts: EducationalPost[];
  addEducationalPost: (post: Omit<EducationalPost, 'id'>) => void;
  updateEducationalPost: (id: string, post: Partial<EducationalPost>) => void;
  deleteEducationalPost: (id: string) => void;

  // Weekly Themes
  weeklyThemes: WeeklyTheme[];
  addWeeklyTheme: (theme: Omit<WeeklyTheme, 'id'>) => void;
  updateWeeklyTheme: (id: string, theme: Partial<WeeklyTheme>) => void;
  deleteWeeklyTheme: (id: string) => void;

  // Quizzes
  quizzes: Quiz[];
  addQuiz: (quiz: Omit<Quiz, 'id'>) => void;
  updateQuiz: (id: string, quiz: Partial<Quiz>) => void;
  deleteQuiz: (id: string) => void;

  // Research Items
  researchItems: ResearchItem[];
  addResearchItem: (item: Omit<ResearchItem, 'id'>) => void;
  updateResearchItem: (id: string, item: Partial<ResearchItem>) => void;
  deleteResearchItem: (id: string) => void;

  // Submissions & Inquiries
  topicSubmissions: TopicSubmission[];
  submitTopic: (submission: Omit<TopicSubmission, 'id' | 'submittedAt'>) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'sentAt'>) => void;

  // Navigation & View States
  activePage: PageRoute;
  setActivePage: (page: PageRoute) => void;
  selectedCategory: ScienceCategory | 'All';
  setSelectedCategory: (cat: ScienceCategory | 'All') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Reading / Inspection Modals
  selectedArticle: ExternalArticle | null;
  setSelectedArticle: (art: ExternalArticle | null) => void;
  selectedPost: EducationalPost | null;
  setSelectedPost: (post: EducationalPost | null) => void;
  selectedWeeklyTheme: WeeklyTheme | null;
  setSelectedWeeklyTheme: (theme: WeeklyTheme | null) => void;
  selectedResearchItem: ResearchItem | null;
  setSelectedResearchItem: (item: ResearchItem | null) => void;

  // Admin Auth
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (logged: boolean) => void;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // Dark Theme
  isDark: boolean;
  toggleDarkMode: () => void;

  // Reset
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SETTINGS: 'bbh_settings_v1',
  EXTERNAL_ARTICLES: 'bbh_external_articles_v1',
  EDUCATIONAL_POSTS: 'bbh_educational_posts_v1',
  WEEKLY_THEMES: 'bbh_weekly_themes_v1',
  QUIZZES: 'bbh_quizzes_v1',
  RESEARCH_ITEMS: 'bbh_research_items_v1',
  SUBMISSIONS: 'bbh_topic_submissions_v1',
  MESSAGES: 'bbh_contact_messages_v1',
  THEME: 'bbh_theme_v1',
  ADMIN_AUTH: 'bbh_admin_auth_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Settings
  const [settings, setSettings] = useState<WebsiteSettings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return stored ? JSON.parse(stored) : INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  // External Articles
  const [externalArticles, setExternalArticles] = useState<ExternalArticle[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXTERNAL_ARTICLES);
      return stored ? JSON.parse(stored) : INITIAL_EXTERNAL_ARTICLES;
    } catch {
      return INITIAL_EXTERNAL_ARTICLES;
    }
  });

  // Educational Posts
  const [educationalPosts, setEducationalPosts] = useState<EducationalPost[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EDUCATIONAL_POSTS);
      return stored ? JSON.parse(stored) : INITIAL_EDUCATIONAL_POSTS;
    } catch {
      return INITIAL_EDUCATIONAL_POSTS;
    }
  });

  // Weekly Themes
  const [weeklyThemes, setWeeklyThemes] = useState<WeeklyTheme[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.WEEKLY_THEMES);
      return stored ? JSON.parse(stored) : INITIAL_WEEKLY_THEMES;
    } catch {
      return INITIAL_WEEKLY_THEMES;
    }
  });

  // Quizzes
  const [quizzes, setQuizzes] = useState<Quiz[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUIZZES);
      return stored ? JSON.parse(stored) : INITIAL_QUIZZES;
    } catch {
      return INITIAL_QUIZZES;
    }
  });

  // Research Items
  const [researchItems, setResearchItems] = useState<ResearchItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RESEARCH_ITEMS);
      return stored ? JSON.parse(stored) : INITIAL_RESEARCH_ITEMS;
    } catch {
      return INITIAL_RESEARCH_ITEMS;
    }
  });

  // Submissions
  const [topicSubmissions, setTopicSubmissions] = useState<TopicSubmission[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Active page & view states
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [selectedCategory, setSelectedCategory] = useState<ScienceCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Modals & inspections
  const [selectedArticle, setSelectedArticle] = useState<ExternalArticle | null>(null);
  const [selectedPost, setSelectedPost] = useState<EducationalPost | null>(null);
  const [selectedWeeklyTheme, setSelectedWeeklyTheme] = useState<WeeklyTheme | null>(null);
  const [selectedResearchItem, setSelectedResearchItem] = useState<ResearchItem | null>(null);

  // Admin login
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Dark mode
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.THEME);
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Sync dark class on html tag
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EXTERNAL_ARTICLES, JSON.stringify(externalArticles));
  }, [externalArticles]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EDUCATIONAL_POSTS, JSON.stringify(educationalPosts));
  }, [educationalPosts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WEEKLY_THEMES, JSON.stringify(weeklyThemes));
  }, [weeklyThemes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(quizzes));
  }, [quizzes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RESEARCH_ITEMS, JSON.stringify(researchItems));
  }, [researchItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(topicSubmissions));
  }, [topicSubmissions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(contactMessages));
  }, [contactMessages]);

  // Operations
  const updateSettings = (newSettings: Partial<WebsiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addExternalArticle = (article: Omit<ExternalArticle, 'id'>) => {
    const newArt: ExternalArticle = {
      ...article,
      id: `ext-${Date.now()}`,
    };
    setExternalArticles((prev) => [newArt, ...prev]);
  };

  const updateExternalArticle = (id: string, updated: Partial<ExternalArticle>) => {
    setExternalArticles((prev) =>
      prev.map((art) => (art.id === id ? { ...art, ...updated } : art))
    );
  };

  const deleteExternalArticle = (id: string) => {
    setExternalArticles((prev) => prev.filter((art) => art.id !== id));
  };

  const addEducationalPost = (post: Omit<EducationalPost, 'id'>) => {
    const newPost: EducationalPost = {
      ...post,
      id: `edu-${Date.now()}`,
    };
    setEducationalPosts((prev) => [newPost, ...prev]);
  };

  const updateEducationalPost = (id: string, updated: Partial<EducationalPost>) => {
    setEducationalPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updated } : post))
    );
  };

  const deleteEducationalPost = (id: string) => {
    setEducationalPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const addWeeklyTheme = (theme: Omit<WeeklyTheme, 'id'>) => {
    const newTheme: WeeklyTheme = {
      ...theme,
      id: `theme-${Date.now()}`,
    };
    setWeeklyThemes((prev) => [newTheme, ...prev]);
  };

  const updateWeeklyTheme = (id: string, updated: Partial<WeeklyTheme>) => {
    setWeeklyThemes((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  const deleteWeeklyTheme = (id: string) => {
    setWeeklyThemes((prev) => prev.filter((t) => t.id !== id));
  };

  const addQuiz = (quiz: Omit<Quiz, 'id'>) => {
    const newQuiz: Quiz = {
      ...quiz,
      id: `quiz-${Date.now()}`,
    };
    setQuizzes((prev) => [newQuiz, ...prev]);
  };

  const updateQuiz = (id: string, updated: Partial<Quiz>) => {
    setQuizzes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updated } : q))
    );
  };

  const deleteQuiz = (id: string) => {
    setQuizzes((prev) => prev.filter((q) => q.id !== id));
  };

  const addResearchItem = (item: Omit<ResearchItem, 'id'>) => {
    const newItem: ResearchItem = {
      ...item,
      id: `res-${Date.now()}`,
    };
    setResearchItems((prev) => [newItem, ...prev]);
  };

  const updateResearchItem = (id: string, updated: Partial<ResearchItem>) => {
    setResearchItems((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updated } : r))
    );
  };

  const deleteResearchItem = (id: string) => {
    setResearchItems((prev) => prev.filter((r) => r.id !== id));
  };

  const submitTopic = (sub: Omit<TopicSubmission, 'id' | 'submittedAt'>) => {
    const newSub: TopicSubmission = {
      ...sub,
      id: `sub-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };
    setTopicSubmissions((prev) => [newSub, ...prev]);
  };

  const submitContactMessage = (msg: Omit<ContactMessage, 'id' | 'sentAt'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      sentAt: new Date().toISOString(),
    };
    setContactMessages((prev) => [newMsg, ...prev]);
  };

  const loginAdmin = (passcode: string): boolean => {
    if (passcode.trim() === settings.adminPasscode.trim()) {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  const resetToDefaults = () => {
    setSettings(INITIAL_SETTINGS);
    setExternalArticles(INITIAL_EXTERNAL_ARTICLES);
    setEducationalPosts(INITIAL_EDUCATIONAL_POSTS);
    setWeeklyThemes(INITIAL_WEEKLY_THEMES);
    setQuizzes(INITIAL_QUIZZES);
    setResearchItems(INITIAL_RESEARCH_ITEMS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.EXTERNAL_ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.EDUCATIONAL_POSTS);
    localStorage.removeItem(STORAGE_KEYS.WEEKLY_THEMES);
    localStorage.removeItem(STORAGE_KEYS.QUIZZES);
    localStorage.removeItem(STORAGE_KEYS.RESEARCH_ITEMS);
  };

  return (
    <AppContext.Provider
      value={{
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
        submitTopic,
        contactMessages,
        submitContactMessage,
        activePage,
        setActivePage,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        selectedArticle,
        setSelectedArticle,
        selectedPost,
        setSelectedPost,
        selectedWeeklyTheme,
        setSelectedWeeklyTheme,
        selectedResearchItem,
        setSelectedResearchItem,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        isDark,
        toggleDarkMode,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
