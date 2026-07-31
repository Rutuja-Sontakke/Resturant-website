import { Router } from "express";

import {
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu
} from "../controllers/menu.controller.js"

import verifyJWT from "../middleware/auth.middleware.js"

const router = Router();

router.get("/", getMenu);
router.post("/", verifyJWT, createMenu);
router.put("/:id", verifyJWT, updateMenu );
router.delete("/:id", verifyJWT, deleteMenu);

export default router;