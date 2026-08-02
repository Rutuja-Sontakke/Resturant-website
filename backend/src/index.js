import dotenv from "dotenv"
dotenv.config();

import connectDB from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  console.log("Starting server lifecycle...");
  try {
    console.log("Attempting database connection...");
    await connectDB();
    console.log("Database connection function finished execution.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Fatal error during server startup:", error);
  }
};

startServer();
