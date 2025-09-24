import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const getMovieById = async (req, res) => {
  const movie = await Movie.findOne({ movieID: req.params.movieID });
  if (!movie) return res.status(404).json({ msg: "Movie not found" });
  res.json(movie);
};