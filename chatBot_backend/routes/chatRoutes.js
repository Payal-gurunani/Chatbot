import express from "express";
import { chatWithAI } from "../controllers/chatControlller.js";
const router = express.Router();

// Route for handling chat interactions
router.post("/chat", chatWithAI);

export default router;
