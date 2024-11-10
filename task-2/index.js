import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./db/connectDb.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth/", authRoutes);

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
