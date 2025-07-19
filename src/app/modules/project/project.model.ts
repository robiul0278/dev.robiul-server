import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technology: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  frontend: {
    type: String,
    required: true,
  },
  backend: {
    type: String,
    required: true,
  },
  serial: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const projectModel = model<IProject>("Project", ProjectSchema);