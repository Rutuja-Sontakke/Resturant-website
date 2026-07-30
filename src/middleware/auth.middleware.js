import jwt from "jsonwebtoken"
import Admin from "../models/admin.model.js"
import asyncHandler from "./asyncHandler.js"
import ApiError from "../utils/ApiError.js"

const verifyJWT = asyncHandler(async(req, res)=> {
    const token = req.header.authorization?.replace("Bearer", "");

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
});

export default verifyJWT;