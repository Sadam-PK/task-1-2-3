import express from "express";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookiesParser from "cookie-parser";
// import  connectDB  from './db/connectDb.js'; // Correct named import

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookiesParser());

app.use(cors());
app.use("/api/auth/", authRoutes);

// Start the server
app.listen(PORT, () => {
  // connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
