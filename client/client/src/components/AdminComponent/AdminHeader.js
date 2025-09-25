import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export const AdminHeader = ()=>{
    return (
      <header>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
            <Link
              to='https://flowbite.com'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <img
                src={logo}
                className='h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Online Cinema Ticket Booking System
              </span>
            </Link>
            <div className='flex items-center space-x-6 rtl:space-x-reverse'>
              
              <Link
                to='/admin'
                className='text-sm  text-blue-600 dark:text-blue-500 hover:underline'
              >
                Admin
              </Link>
            </div>
          </div>
        </nav>
        <nav className='bg-gray-50 dark:bg-gray-700'>
          <div className='max-w-screen-xl px-4 py-3 mx-auto'>
            <div className='flex items-center'>
              <ul className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
                <li>
                  <Link
                    to='#'
                    className='text-gray-900 dark:text-white hover:underline'
                    aria-current='page'
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='text-gray-900 dark:text-white hover:underline'
                  >
                    Theaters
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='text-gray-900 dark:text-white hover:underline'
                  >
                    Upcoming Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='text-gray-900 dark:text-white hover:underline'
                  >
                    Bookings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default AdminHeader;