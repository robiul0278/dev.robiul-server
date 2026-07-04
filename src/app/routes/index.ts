import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { projectRoutes } from "../modules/project/project.route";
import { contentRoutes } from "../modules/content/content.route";
import { adminAuthRoutes } from "../modules/auth/adminAuth.route";
import { workExperienceRoutes } from "../modules/work-experience/workExperience.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/admin-auth',
    route: adminAuthRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/content',
    route: contentRoutes,
  },
  {
    path: '/work-experience',
    route: workExperienceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;