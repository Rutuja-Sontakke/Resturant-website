import { Router } from "express";
import {
    createReservation,
    getReservation,
    updateReservation
} from "../controllers/reservation.controller.js"

import verifyJWT  from "../middleware/auth.middleware.js";


const router = Router();

router.post("/", createReservation);

router.get("/", getReservation);

router.route("/:id").put(verifyJWT, updateReservation);


export default router;