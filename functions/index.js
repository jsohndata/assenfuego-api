import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import coreRouter from "./routes/core.js";
import imagesRouter from "./routes/images.js"
import jsonRouter from "./routes/json.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/images", imagesRouter);
app.use("/api", jsonRouter);
app.use("/", coreRouter);

// For GCP
export const api = functions.https.onRequest(app);
