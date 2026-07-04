import { z } from 'zod';

export const workExperienceValidationSchema = z.object({
  body: z.object({
    role: z.string().min(1, "Role is required"),
    company: z.string().min(1, "Company is required"),
    location: z.string().min(1, "Location is required"),
    period: z.string().min(1, "Period is required"),
    type: z.string().min(1, "Type is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    achievements: z.array(z.string()).min(1, "At least one achievement required"),
    technologies: z.array(z.string()).min(1, "At least one technology required"),
  }),
});
