import { z } from 'zod';

export const projectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    subTitle: z.string().min(1, "Subtitle is required"),
    image: z.string().url("Must be a valid image URL"),
    technology: z.array(z.string()).min(1, "Select at least one technology"),
    liveLink: z.string().url("Must be a valid URL"),
    frontend: z.string().url("Must be a valid URL"),
    backend: z.string().url("Must be a valid URL"),
    color: z.string().min(1, "Color is required"),
    serial: z.number().int().nonnegative("Serial must be a positive number"),
  })
});
