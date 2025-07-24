import { Router } from "express";
import authRoutes from "./authRoute.js";
import mockRoutes from "./mockRoute.js";
import infoRoutes from "./infoRoute.js";
import errorRoutes from "./errorRoute.js"
import asyncRoute from "./asyncRoute.js"

const router = Router();

router.use( authRoutes);     
router.use(mockRoutes);    
router.use(infoRoutes);       
router.use(errorRoutes);
router.use(asyncRoute);

export default router;
