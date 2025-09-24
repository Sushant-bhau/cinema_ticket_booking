import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  duration: Number, // in minutes
  language: String,
  releaseDate: Date,
  seatsAvailable: { type: Number, default: 100 } // default total seats
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema);