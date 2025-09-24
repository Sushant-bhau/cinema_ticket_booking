import express from "express";
import { addMovie, getMovies, getMovieById } from "../controllers/movieController.js";
import { authMiddleware , authorizeRole } from "../middlewares/authMiddlewares.js";

const router = express.Router();

// Admin routes
router.post("/", authMiddleware, authorizeRole("admin"), addMovie);

// Public routes
router.get("/", getMovies);
router.get("/:movieID", getMovieById);

export default router;