import { Link } from "react-router-dom"

const Movie = ({ data }) => {
  const { title, year, released, genre, language, poster } = data;
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <Link to='#'>
        <img
          className='rounded-t-lg w-full h-80 object-cover'
          src={poster || "/placeholder.png"}
          onError={(e) => {
            if (e.currentTarget.src.endsWith("/placeholder.png")) return;
            e.currentTarget.src = "/placeholder.png";
          }}
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
        <Link
          to='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'
        >
          Book Ticket
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default Movie;
