import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movieID: "",
    movieName: "",
    Year: "",
    releaseDate: "",
    genre: "",
    language: "",
    Runtime: "",
    posterUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRaw = localStorage.getItem("user");
    const user = userRaw ? JSON.parse(userRaw) : null;
    if (!token || !user || user.role !== "admin") {
      setError("You must be logged in as an admin to add movies.");
      navigate("/adminLogin");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic required checks aligned to backend
    if (!formData.movieID || !formData.movieName || !formData.language || !formData.Runtime) {
      setError("movieID, movieName, language, and Runtime are required");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieID: Number(formData.movieID),
          movieName: formData.movieName,
          Year: formData.Year,
          releaseDate: formData.releaseDate || undefined,
          genre: formData.genre || undefined,
          language: formData.language,
          Runtime: Number(formData.Runtime),
          posterUrl: formData.posterUrl || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) throw new Error("Not authenticated. Please login.");
        if (res.status === 403) throw new Error("Access denied. Admins only.");
        throw new Error(data.message || "Failed to add movie");
      }

      setSuccess("Movie added successfully");
      setTimeout(() => navigate("/admin"), 800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4'>
      <form
        onSubmit={handleSubmit}
        className='relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md space-y-5'
      >
        {/* Close Icon */}
        <button
          type='button'
          onClick={() => navigate("/admin")}
          className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white'
        >
          ✕
        </button>

        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
          Add New Movie
        </h2>

        {/* Movie Name */}
        <div className='relative z-0 w-full group'>
          <input
            type='text'
            name='movieName'
            value={formData.movieName}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Movie Name
          </label>
        </div>

        {/* MovieID */}
        <div className='relative z-0 w-full group'>
          <input
            type='number'
            name='movieID'
            value={formData.movieID}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Movie ID
          </label>
        </div>

        {/* Year */}
        <div className='relative z-0 w-full group'>
          <input
            type='number'
            name='Year'
            value={formData.Year}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Year
          </label>
        </div>

        {/* Release Date */}
        <div className='relative z-0 w-full group'>
          <input
            type='date'
            name='releaseDate'
            value={formData.releaseDate}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Release Date
          </label>
        </div>

        {/* Genre */}
        <div className='relative z-0 w-full group'>
          <input
            type='text'
            name='genre'
            value={formData.genre}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Genre
          </label>
        </div>

        {/* Language */}
        <div className='relative z-0 w-full group'>
          <input
            type='text'
            name='language'
            value={formData.language}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Language
          </label>
        </div>

        {/* Runtime (minutes) */}
        <div className='relative z-0 w-full group'>
          <input
            type='number'
            name='Runtime'
            value={formData.Runtime}
            onChange={handleChange}
            placeholder=' '
            required
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Runtime (minutes)
          </label>
        </div>

        {/* Poster URL */}
        <div className='relative z-0 w-full group'>
          <input
            type='url'
            name='posterUrl'
            value={formData.posterUrl}
            onChange={handleChange}
            placeholder=' '
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          />
          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Poster URL
          </label>
        </div>

        {error && (
          <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
        )}
        {success && (
          <p className='text-sm text-green-600 dark:text-green-400'>{success}</p>
        )}

        <button
          type='submit'
          disabled={loading}
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-60'
        >
          {loading ? "Adding..." : "Add Movie"}
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
