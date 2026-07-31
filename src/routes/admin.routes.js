import {Router} from "express";
import { loginAdmin, getProfile, changePassword, } from "../controllers/admin.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";
import {
    loginValidation,
    changePasswordValidation,
} from "../validators/admin.validator.js";
import validate from "../validators/validate.js";

const router = Router();

router.post("/login", loginValidation, validate, loginAdmin);

router.get("/profile", verifyJWT, getProfile);

router.patch("/change-password", verifyJWT, changePasswordValidation, validate, changePassword );

export default router;