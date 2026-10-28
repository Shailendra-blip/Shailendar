export type EventCategory = 'all' | 'workshops' | 'hackathons' | 'tech_talks' | 'community';

export type EventStatus = 'Registrations Open' | 'Upcoming' | 'Demo / Tentative' | 'Completed';

export interface EventSpeaker {
  name: string;
  role: string;
  organization: string;
  avatarUrl?: string;
  topic: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'workshops' | 'hackathons' | 'tech_talks' | 'community';
  categoryLabel: string;
  date: string;
  time: string;
  duration: string;
  venue: string;
  mode: 'In-Person' | 'Virtual' | 'Hybrid';
  status: EventStatus;
  shortDescription: string;
  fullDescription: string;
  agenda: { time: string; activity: string }[];
  prerequisites: string[];
  keyTakeaways: string[];
  speakers: EventSpeaker[];
  registrationUrl?: string;
  isDemo: boolean;
  accentColor: string;
}

export type ProjectCategory = 'all' | 'ai_ml' | 'web_cloud' | 'mobile_iot' | 'sustainability';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ai_ml' | 'web_cloud' | 'mobile_iot' | 'sustainability';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  contributors: { name: string; role: string }[];
  isDemo: boolean;
  accentColor: string;
  metrics?: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  domainTrack: string;
  bio: string;
  initials: string;
  avatarColor: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  isSample: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type IoTRoboticsFilter = 'All Projects' | 'IoT' | 'Robotics' | 'Automation' | 'Embedded Systems';

export interface HardwarePhoto {
  url: string;
  caption: string;
  altText: string;
}

export interface IoTRoboticsProject {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  categories: ('IoT' | 'Robotics' | 'Automation' | 'Embedded Systems')[];
  technologyTags: string[];
  primaryImage: string;
  galleryImages: HardwarePhoto[];
  hardwareComponents: string[];
  prototypeStatus: string;
  notes?: string;
  accentColor: string;
}
export interface AchievementPhoto {
  id: string;
  url: string;
  title: string;
  caption: 'Award Ceremony' | 'Student Recognition' | 'Celebrating Innovation' | 'Moments of Achievement';
  altText: string;
  aspectRatio?: string;
}

export interface FeaturedAchievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  edition: string;
  institution: string;
  location: string;
  keyStats: { label: string; value: string }[];
  photos: AchievementPhoto[];
  videoUrl?: string;
  videoTitle?: string;
}
