import { Schema, model } from 'mongoose';
import { IWorkExperience } from './workExperience.interface';

const WorkExperienceSchema = new Schema<IWorkExperience>({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  period: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: [String], required: true },
  technologies: { type: [String], required: true },
}, { timestamps: true });

export const workExperienceModel = model<IWorkExperience>('WorkExperience', WorkExperienceSchema);
