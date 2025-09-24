import express from "express";
import { bookTickets, getUserBookings } from "../controllers/bookingController.js";
import { verifyToken, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a booking (User only)
router.post("/book", verifyToken, authorizeRole("user"), bookTickets);

// Get all bookings of the logged-in user
router.get("/my-bookings", verifyToken, authorizeRole("user"), getUserBookings);

export default router;