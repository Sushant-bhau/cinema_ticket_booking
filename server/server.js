import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
import authRoutes from "./src/routes/authRoutes.js";
import movieRoutes from "./src/routes/movieRoutes.js";
import bookingRoutes from "./src/routes/bookingRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/bookings", bookingRoutes);

// db connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error("DB connection error:", err));