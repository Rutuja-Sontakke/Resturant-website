import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Admin from "../models/admin.model.js";

const seedAdmin = async () => {
    try {
        await connectDB();

        const exists = await Admin.findOne({
            email: "admin@babaaurhum.com",
        });

        if (exists) {
            console.log("Admin already exists");
            process.exit();
        }

        await Admin.create({
            name: "Admin",
            email: "admin@babaaurhum.com",
            password: "Admin@123",
        });

        console.log("Admin created successfully");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

seedAdmin();