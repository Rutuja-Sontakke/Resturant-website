import jwt from "jsonwebtoken"
import Admin from "../models/admin.model.js"
import asyncHandler from "./asyncHandler.js"
import ApiError from "../utils/ApiError.js"

const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "").trim();

        if(!token) {
            throw new ApiError(401, "Unauthorized");
        }

        const decoded = jwt.verify(
            token, 
            process.env.ACCESS_TOKEN_SECRET
        );

        const admin = await Admin.findById(decoded._id).select("-password");
        
        if(!admin) {
            throw new ApiError(401, "Invalid Token");
        }

        req.admin = admin;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Token");
    }
});

export default verifyJWT;
