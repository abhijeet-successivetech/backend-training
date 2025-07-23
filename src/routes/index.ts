import { Router } from "express";
import authRoutes from "./authRoute";
import mockRoutes from "./mockRoute";
import infoRoutes from "./infoRoute";

const router = Router();

router.use( authRoutes);     
router.use(mockRoutes);    
router.use(infoRoutes);           

export default router;
