import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { projectRoutes } from "../modules/project/project.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;