export interface ISocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface IHeroContent {
  greeting: string;
  firstName: string;
  lastName: string;
  roles: string[];
  description: string;
  location: string;
  resumeUrl: string;
  availabilityText: string;
  experienceBadge: string;
  stats: { value: string; label: string }[];
  socialLinks: ISocialLink[];
}

export interface IAboutContent {
  subtitle: string;
  titleHighlight: string;
  paragraphs: string[];
  highlights: { icon: string; title: string; description: string }[];
  timeline: { year: string; title: string; description: string }[];
  stats: { value: number; suffix: string; label: string }[];
  cvUrl: string;
}

export interface ISkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface ICoreSkill {
  name: string;
  icon: string;
  color: string;
}

export interface ISkillsContent {
  subtitle: string;
  titleHighlight: string;
  description: string;
  categories: ISkillCategory[];
  coreSkills: ICoreSkill[];
}

export interface IExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface IExperienceContent {
  subtitle: string;
  titleHighlight: string;
  description: string;
  stats: { value: string; label: string }[];
  experiences: IExperience[];
}

export interface IService {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface IProcessStep {
  title: string;
  description: string;
}

export interface IServicesContent {
  subtitle: string;
  titleHighlight: string;
  description: string;
  services: IService[];
  process: IProcessStep[];
}

export interface ITestimonial {
  name: string;
  role: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ITestimonialsContent {
  subtitle: string;
  titleHighlight: string;
  testimonials: ITestimonial[];
}

export interface IContactContent {
  subtitle: string;
  titleHighlight: string;
  description: string;
  location: string;
  availability: string;
  email: string;
  socialLinks: ISocialLink[];
}

export interface IFooterContent {
  brandName: string;
  brandTagline: string;
  navLinks: { href: string; label: string }[];
  socialLinks: ISocialLink[];
  email: string;
  location: string;
  availabilityText: string;
  copyrightName: string;
  bottomTagline: string;
}

export interface ISiteContent {
  hero: IHeroContent;
  about: IAboutContent;
  skills: ISkillsContent;
  experience: IExperienceContent;
  services: IServicesContent;
  testimonials: ITestimonialsContent;
  contact: IContactContent;
  footer: IFooterContent;
}
