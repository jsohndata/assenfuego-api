import functions from "firebase-functions";
import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use (cors());


const filePath = process.cwd();

app.get("/", (req,res) => {  
  const uri = path.join(filePath, '/pages/index.html');
  res.sendFile(uri);
});

app.get("*", (req,res) => {
  const uri = path.join(filePath, '/pages/404.html');
  res.sendFile(uri);
});


/* For Localhost
PORT = 3030;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`)) */

// For GCP
export const api = functions.https.onRequest(app);
