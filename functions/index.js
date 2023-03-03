import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import coreRouter from "./routes/core.js"
import imagesRouter from "./routes/images.js"

const app = express();
app.use(express.json());
app.use (cors());

app.use("/", coreRouter);
app.use("/images", imagesRouter);


/* For Localhost
PORT = 3030;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`)) */

// For GCP
export const api = functions.https.onRequest(app);
