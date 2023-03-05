import functions from "firebase-functions";
import express from "express";
import rateLimit from 'express-rate-limit'
import cors from "cors";

import coreRouter from "./routes/core.js";
import imagesRouter from "./routes/images.js"
import jsonRouter from "./routes/json.js"

const app = express();
app.use(express.json());
app.use(cors());

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/images", imagesRouter);
app.use("/api", jsonRouter, apiLimiter);
app.use("/", coreRouter);

// For GCP
export const api = functions.https.onRequest(app);
