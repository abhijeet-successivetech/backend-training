import { Router } from "express";
import authRoutes from "./auths";
import mockRoutes from "./mocks";
import infoRoutes from "./info-routes";

const router = Router();

router.use(authRoutes);
router.use(mockRoutes);
router.use(infoRoutes);

export default router;
