import Admin  from "../models/admin.model.js"
import asyncHandler from "../middleware/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const loginAdmin = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        throw new ApiError(400, "Email and Password is are required");

    }

    const admin = await Admin.findOne({email});
    
    if(!admin) {
        throw new ApiError(401, "Invalid Credentials");
    }

    const isPasswordValid = await admin.isPasswordCorrect(password);

    if(!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials");

    }

    const accessToken = admin.generateAccessToken();

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                admin: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                },
                accessToken,
            },
            "Login Successful"
        )
    );
});

export {loginAdmin};