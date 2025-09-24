import mongoose from "mongoose";

// Movie schema as per project requirements
const movieSchema = new mongoose.Schema({
  movieID: { type: Number, required: true, unique: true }, // MovieID
  movieName: { type: String, required: true, trim: true }, // MovieName
  language: { type: String, required: true, default: "English" }, // Language
  duration: { type: Number, required: true }, // Duration in minutes
  genre: { type: String },               // Optional: Genre
  releaseDate: { type: Date },           // Optional: Release Date
  director: { type: String },            // Optional: Director name
  cast: [String],                        // Optional: Array of actor names
  rating: { type: Number, min: 0, max: 10 }, // Optional: IMDB rating
  posterUrl: { type: String },           // Optional: Poster URL
  description: { type: String },         // Optional: Movie description
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