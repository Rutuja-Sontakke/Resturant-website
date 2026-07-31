import { body } from "express-validator";

export const loginValidation = [
    body("email")
        .isEmail(),

    body("password")
        .notEmpty(),
];

export const changePasswordValidation = [
    body("oldPassword")
        .notEmpty(),

    body("newPassword")
        .isLength({ min: 8 }),
];