import { Router } from "express";
import { getDashboard } from "../controllers/dashboard.controller.js"
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", verifyJWT, getDashboard)



export default router;
