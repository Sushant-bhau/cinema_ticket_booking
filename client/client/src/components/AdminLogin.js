import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const input = (emailOrUsername || "").trim();
    const validUsernames = ["Admin@123", "Admin@wipro", "Admin@wipro.com"];
    const validPassword = "Admin@123";
    if (validUsernames.includes(input) && password === validPassword) {
      localStorage.setItem("token", "hardcoded-admin-token");
      localStorage.setItem(
        "user",
        JSON.stringify({ id: "admin", email: input, role: "admin" })
      );
      navigate("/admin");
    } else {
      setError("Invalid email/username or password");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg dark:bg-gray-800'>
        {/* Header */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Welcome Back
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
          Please login to your account
        </p>

        {/* Form */}
        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* Email or Username */}
          <div>
            <label
              htmlFor='emailOrUsername'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email or Username
            </label>
            <input
              type='text'
              id='emailOrUsername'
              placeholder='Admin@wipro.com'
              required
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
            />
          </div>

          {/* Error message */}
          {error && <p className='text-red-500 text-sm'>{error}</p>}

          {/* Remember Me */}
          <div className='flex items-center justify-between'>
            <label className='flex items-center text-sm text-gray-600 dark:text-gray-400'>
              <input
                type='checkbox'
                className='w-4 h-4 mr-2 border-gray-300 rounded accent-blue-600'
              />
              Remember me
            </label>
            <Link
              to='#'
              className='text-sm text-blue-600 hover:underline dark:text-blue-400'
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full py-3 text-white bg-blue-600 rounded-lg font-medium text-sm 
                       hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 
                       dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700'
          >
            Sign In As Admin
          </button>
        </form>
      </div>
    </div>
  );
};
