import { Router } from "express";
import authRoutes from "./auths";
import mockRoutes from "./mocks";
import infoRoutes from "./info-routes";
import studentRoutes from "./students"
import userRoutes from "./users"

const router = Router();

router.use(authRoutes);
router.use(mockRoutes);
router.use(infoRoutes);
router.use(studentRoutes);
router.use(userRoutes);

export default router;
