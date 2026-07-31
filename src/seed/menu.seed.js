import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import Menu from "../models/menu.model.js";
import menuData from "./menuData.js";

const seedMenu = async () => {
    try {
        await connectDB();

        await Menu.deleteMany();

        await Menu.insertMany(menuData);

        console.log(" Menu seeded successfully");

        process.exit();
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
};

seedMenu();