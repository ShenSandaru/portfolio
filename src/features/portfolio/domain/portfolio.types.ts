export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  titleName: string;
  titleRole: string;
  intro: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  stats: HeroStat[];
  badges: string[];
}

export interface AboutDetail {
  iconClass: string;
  text: string;
}

export interface AboutCard {
  iconClass: string;
  iconToneClass: string;
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  details: AboutDetail[];
  cards: AboutCard[];
}

export interface ProficiencyItem {
  label: string;
  percent: number;
}

export interface Project {
  iconClass: string;
  tags: string[];
  title: string;
  description: string;
  sourceUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  authorInitial: string;
  authorName: string;
  authorRole: string;
}

export interface ContactMethod {
  iconClass: string;
  label: string;
  value: string;
}

export interface SocialLink {
  iconClass: string;
  label: string;
  href: string;
}

export interface ContactContent {
  introTitle: string;
  introDescription: string;
  methods: ContactMethod[];
  socials: SocialLink[];
}
