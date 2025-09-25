import { Link } from "react-router-dom";

export const MovieCard = ({
  title,
  year,
  released,
  genre,
  language,
  poster,
}) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <Link to='#'>
        <img
          className='rounded-t-lg w-full h-80 object-cover'
          src={poster}
          alt={title}
        />
      </Link>
      <div className='p-5'>
        <Link to='#'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title} ({year})
          </h5>
        </Link>
        <p className='mb-3 text-sm font-normal text-gray-700 dark:text-gray-400'>
          <span className='block'>Releasing Date: {released}</span>
          <span className='block'>Genre: {genre}</span>
          <span className='block'>Language: {language}</span>
        </p>

        {/* Buttons for Edit and Delete */}
        <div className='flex gap-2'>
          <button className='flex-1 px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition'>
            Edit
          </button>
          <button className='flex-1 px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
