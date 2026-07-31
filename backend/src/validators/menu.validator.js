import { body } from "express-validator";


export const menuValidation =[
    body("name")
    .trim()
    .notEmpty(),

    body("category")
        .notEmpty(),

    body("description")
        .trim()
        .notEmpty(),

    body("price")
        .isFloat({ min: 0 }),

    body("veg")
        .optional()
        .isBoolean(),

    body("isAvailable")
        .optional()
        .isBoolean(),
]