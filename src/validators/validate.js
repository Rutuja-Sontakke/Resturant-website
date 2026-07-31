import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js"

const validate = (req, res, nex) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return next (
            new ApiError(
                400, "validation failed",
                errors.array()
                
            )
        )
    }

    next();
    
}

export default validate;



