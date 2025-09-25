import { useEffect, useState } from "react";
import  Movie  from "../components/movie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/movies");
        console.log(res);
        if (!res.ok) throw new Error("Failed to load movies");
        const data = await res.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main className='max-w-screen-xl mx-auto px-6 py-6'>
      <h1 className='text-3xl font-bold mb-6'>All Movies</h1>

      {loading && <p>Loading movies...</p>}
      {error && !loading && <p className='text-red-600'>{error}</p>}

      {!loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {console.log("Movies:", movies)}
          {movies.map((movie) => {
            const posterCandidate =
              movie.posterUrl ||
              movie.Poster ||
              (Array.isArray(movie.imageUrl) && movie.imageUrl.length > 0
                ? movie.imageUrl[0]
                : undefined);
            return (
              <Movie
                key={movie._id || movie.movieID}
               data = {movie}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};
export default Home;