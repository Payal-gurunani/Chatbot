import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";


dotenv.config(
    {
        path:'./.env'
    }
    ) // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
