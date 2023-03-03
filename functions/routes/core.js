import express from "express";
import path from "path";

const router = express.Router();
const filePath = process.cwd();

router.get("/", (req,res) => {  
  const uri = path.join(filePath, '/pages/index.html');
  res.sendFile(uri);
});

router.get("*", (req,res) => {
  const uri = path.join(filePath, '/pages/404.html');
  res.sendFile(uri);
});

export default router;