import { Link } from "react-router-dom";
import logo from "../assets/image.png";

export const Header = () => {
  return (
    <nav className='border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4'>
        {/* Logo + Title */}
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img src={logo} className='h-8' alt='Online Cinema Ticketing Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Online Cinema Ticketing
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle='navbar-solid-bg'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-solid-bg'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        {/* Nav Links + Auth Buttons */}
        <div
          className='hidden w-full md:flex md:items-center md:space-x-6 md:w-auto'
          id='navbar-solid-bg'
        >
          <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
            <li>
              <Link
                to='/'
                className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/movie'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to='/theaters'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Theaters
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className='flex items-center space-x-3 ml-4'>
            <Link
              to='/login'
              className='px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition'
            >
              Login
            </Link>
            <Link
              to='/AdminLogin'
              className='px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition'
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
