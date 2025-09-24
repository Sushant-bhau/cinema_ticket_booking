import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  language: { type: String, default: "English" },
  releaseDate: { type: Date, required: true },
  director: String,
  cast: [String], // array of actor names
  rating: { type: Number, min: 0, max: 10 }, // e.g., IMDB rating
  posterUrl: String, // movie poster
  description: String,
  shows: [
    {
      showTime: { type: Date, required: true },
      totalSeats: { type: Number, default: 100 },
      bookedSeats: { type: Number, default: 0 },
      availableSeats: { 
        type: Number, 
        default: function() { return this.totalSeats; } 
      }
    }
  ]
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema);