export type ScienceCategory =
  | 'Biochemistry'
  | 'Biotechnology'
  | 'Molecular Biology'
  | 'Genetics'
  | 'Microbiology'
  | 'Cell Biology'
  | 'Immunology'
  | 'Bioinformatics'
  | 'Nanobiotechnology';

export const ALL_CATEGORIES: ScienceCategory[] = [
  'Biochemistry',
  'Biotechnology',
  'Molecular Biology',
  'Genetics',
  'Microbiology',
  'Cell Biology',
  'Immunology',
  'Bioinformatics',
  'Nanobiotechnology',
];

export interface ExternalArticle {
  id: string;
  title: string;
  publisher: string;
  originalUrl: string;
  publicationDate: string;
  category: ScienceCategory;
  originalSummary: string;
  whyItMatters: string;
  isFeatured?: boolean;
  imageUrl?: string;
  doi?: string;
  readTime: string;
  isPublished: boolean;
}

export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface DailyEpisode {
  day: DayOfWeek;
  scheduleCategory: string; // e.g., 'Biochemistry in Daily Life', 'Biotechnology Around Us'
  title: string;
  summary: string;
  isPublished: boolean;
  postId?: string;
}

export interface EducationalPost {
  id: string;
  title: string;
  category: ScienceCategory;
  weeklyThemeId?: string;
  dayOfWeek?: DayOfWeek;
  scheduleCategory?: string;
  summary: string;
  content: string; // Markdown or rich structured text
  equations?: string[];
  keyTakeaways: string[];
  references: { citation: string; link?: string }[];
  imageUrl?: string;
  publicationDate: string;
  readTimeEstimate: string;
  isPublished: boolean;
}

export interface WeeklyTheme {
  id: string;
  title: string;
  weekNumber: number;
  year: number;
  startDate: string;
  endDate: string;
  introduction: string;
  episodes: DailyEpisode[];
  keyTakeaways: string[];
  relatedQuizId?: string;
  status: 'current' | 'archived' | 'upcoming';
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  category: ScienceCategory;
}

export interface Quiz {
  id: string;
  title: string;
  topic: ScienceCategory | 'Multi-disciplinary';
  quizType: 'daily' | 'grand_sunday' | 'topic_based';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: QuizQuestion[];
  weeklyThemeId?: string;
  publicationDate: string;
  isPublished: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  type: 'ongoing' | 'proposed_idea' | 'future_tech' | 'emerging_biotech';
  category: ScienceCategory;
  summary: string;
  background: string;
  researchQuestion?: string;
  hypothesis?: string;
  suggestedMethodology?: string;
  limitations?: string;
  references: string[];
  sourceUrl?: string;
  verifiedDiscovery: boolean;
  publicationDate: string;
  isPublished: boolean;
}

export interface WebsiteSettings {
  name: string;
  tagline: string;
  description: string;
  contactPhone1: string;
  phoneLink1: string;
  whatsAppLink1: string;
  contactPhone2: string;
  phoneLink2: string;
  whatsAppLink2: string;
  whatsAppChannel: string;
  whatsAppCommunity: string;
  showCommunityGroup: boolean;
  founderLinkedIn: string;
  founderName: string;
  officialEmail: string;
  instagram: string;
  tikTok: string;
  adminPasscode: string;
}

export interface TopicSubmission {
  id: string;
  name: string;
  email: string;
  topicTitle: string;
  category: ScienceCategory;
  description: string;
  sourceLink?: string;
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
}
