import { Router } from "express";
import upload from "../middleware/multer.middleware.js";

import {
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu
} from "../controllers/menu.controller.js"

import verifyJWT from "../middleware/auth.middleware.js"

const router = Router();

router.get("/", getMenu);
router.post("/", verifyJWT, upload.single("image"), createMenu);
router.put("/:id", verifyJWT, upload.single("image"), updateMenu );
router.delete("/:id", verifyJWT, deleteMenu);

export default router;