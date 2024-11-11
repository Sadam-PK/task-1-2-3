import express from "express";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookiesParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookiesParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend domain
    credentials: true, // Allows cookies to be sent with requests
  })
);
app.use("/api/auth/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
