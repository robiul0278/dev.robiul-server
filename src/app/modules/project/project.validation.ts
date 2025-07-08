import { z } from 'zod';

export const projectValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    subTitle: z.string().max(150, "Subtitle is required"),
    image: z.string().url("Must be a valid image URL"),
    technology: z.array(z.string()).max(6, "Limit max 6 technology").min(3,"Select at least 3 technology"),
    liveLink: z.string().url("Must be a valid URL"),
    frontend: z.string().url("Must be a valid URL"),
    backend: z.string().url("Must be a valid URL"),
    serial: z.string().min(1,"Serial must be a positive number"),
  })
});
