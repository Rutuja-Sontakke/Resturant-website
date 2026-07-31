import { body } from "express-validator";

export const reservation = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

    body("email")
    .isEmail()
    .withMessage("Invalid email"),

    body("phone")
    .isLength({min: 10, max: 10})
    .withMessage("Phone number must be 10 digits"),

    body("guests")
    .isInt({ min: 1, max: 20})
    .withMessage("Guests must be between 1 to 20"),

    body("reservationDate")
    .isISO8601()
    .withMessage("Invalid reservation date")
    .custom((value) => {
        if(new Date(value) < new Date()){
            throw new Error("Reservation date cannot be in past");
        }
        return true;
    })
]