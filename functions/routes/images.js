import express from "express";

const router = express.Router();

router.use("/", express.static("images/icons"));

export default router;