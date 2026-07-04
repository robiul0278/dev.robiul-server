import { Schema, model } from 'mongoose';
import { ISiteContent } from './content.interface';

const SocialLinkSchema = new Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, required: true },
}, { _id: false });

const HeroContentSchema = new Schema({
  greeting: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  roles: { type: [String], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  availabilityText: { type: String, required: true },
  experienceBadge: { type: String, required: true },
  profileImage: { type: String },
  stats: { type: [{ value: String, label: String }], required: true },
  socialLinks: { type: [SocialLinkSchema], required: true },
}, { _id: false });


const SkillCategorySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  skills: { type: [String], required: true },
}, { _id: false });

const CoreSkillSchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
}, { _id: false });

const SkillsContentSchema = new Schema({
  subtitle: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: [SkillCategorySchema], required: true },
  coreSkills: { type: [CoreSkillSchema], required: true },
}, { _id: false });

const ExperienceSchema = new Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  period: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: [String], required: true },
  technologies: { type: [String], required: true },
}, { _id: false });

const ExperienceContentSchema = new Schema({
  subtitle: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  stats: { type: [{ value: String, label: String }], required: true },
  experiences: { type: [ExperienceSchema], required: true },
}, { _id: false });

const ServiceSchema = new Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  color: { type: String, required: true },
}, { _id: false });

const ProcessStepSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false });

const ServicesContentSchema = new Schema({
  subtitle: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  services: { type: [ServiceSchema], required: true },
  process: { type: [ProcessStepSchema], required: true },
}, { _id: false });

const ContactContentSchema = new Schema({
  subtitle: { type: String, required: true },
  titleHighlight: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: String, required: true },
  email: { type: String, required: true },
  socialLinks: { type: [SocialLinkSchema], required: true },
}, { _id: false });

const FooterContentSchema = new Schema({
  brandName: { type: String, required: true },
  brandTagline: { type: String, required: true },
  navLinks: { type: [{ href: String, label: String }], required: true },
  socialLinks: { type: [SocialLinkSchema], required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  availabilityText: { type: String, required: true },
  copyrightName: { type: String, required: true },
  bottomTagline: { type: String, required: true },
}, { _id: false });

const SiteContentSchema = new Schema<ISiteContent>(
  {
    hero: { type: HeroContentSchema, required: true },

    skills: { type: SkillsContentSchema, required: true },
    experience: { type: ExperienceContentSchema, required: true },
    services: { type: ServicesContentSchema, required: true },
    contact: { type: ContactContentSchema, required: true },
    footer: { type: FooterContentSchema, required: true },
  },
  { timestamps: true }
);

export const siteContentModel = model<ISiteContent>('SiteContent', SiteContentSchema);
