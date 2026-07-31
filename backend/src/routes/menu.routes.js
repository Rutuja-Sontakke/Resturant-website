import { Router } from "express";
import upload from "../middleware/multer.middleware.js";
import { menuValidation } from "../validators/menu.validator.js";
import validate from "../validators/validate.js";
import {
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu
} from "../controllers/menu.controller.js"

import verifyJWT from "../middleware/auth.middleware.js"

const router = Router();

router.get("/", getMenu);
router.post("/", verifyJWT, upload.single("image"), menuValidation, validate, createMenu);
router.put("/:id", verifyJWT, upload.single("image"), menuValidation, validate, updateMenu );
router.delete("/:id", verifyJWT, deleteMenu);

export default router;