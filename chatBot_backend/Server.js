import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js"

dotenv.config(
  {
    path: './.env'
  }
) // Load environment variables
const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON requests

connectDB(); // Connect to MongoDB


app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

app.use("/api", chatRoutes);

const PORT = process.env.PORT || 5000; // Default to 5000 if .env is missing
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
