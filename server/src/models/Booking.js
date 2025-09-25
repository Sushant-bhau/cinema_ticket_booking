import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  //user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  showTime: { type: Date, required: true },
  seatsBooked: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);