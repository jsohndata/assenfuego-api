import express from "express"
import path from "path";

const router = express.Router();
const filePath = process.cwd();

router.get("/garden", (req,res) => {  
  const uri = path.join(filePath, '/data/garden.json');
  res.sendFile(uri);
  
  console.log(uri);
});

export default router;