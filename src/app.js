import express from "express";
import cors from "cors"
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv"

const app = express();

app.use(helmet());

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true,

    })
);

app.use(compression());   //compression
app.use((morgan("dev")));   //logger


const limiter = rateLimit({
    windowMs: 15 *60*1000,
    max: 100,
});                      //rate limit

app.use(limiter);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Baba Au Rhum API is running!"
    })
});

import adminRoutes from "./routes/admin.routes.js";
import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";
app.use(notFound);

app.use(errorHandler);


export default app;

