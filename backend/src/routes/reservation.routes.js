import { Router } from "express";
import {
    createReservation,
    getReservation,
    updateReservation
} from "../controllers/reservation.controller.js"

import verifyJWT  from "../middleware/auth.middleware.js";
import { reservation }  from "../validators/reservation.validator.js";
import validate from "../validators/validate.js";

const router = Router();

router.post("/", reservation , validate, createReservation);

router.get("/", verifyJWT, getReservation);

router.patch(
    "/:id",
    verifyJWT,
    updateReservation
);


export default router;