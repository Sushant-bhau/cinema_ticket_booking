import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg || "Registration failed");
      }
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg dark:bg-gray-800'>
        {/* Header */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Create an Account
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
          Sign up to book your movie tickets
        </p>

        {/* Form */}
        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='firstName'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
            </div>
            <div>
              <label
                htmlFor='lastName'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email Address
            </label>
            <input
              type='email'
              id='email'
              placeholder='you@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
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
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor='confirmPassword'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            />
          </div>

          {/* Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 text-white bg-blue-600 rounded-lg font-medium text-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 disabled:opacity-60'
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {error && (
            <p className='text-sm text-red-600 dark:text-red-400 text-center'>
              {error}
            </p>
          )}

          {/* Footer */}
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            Already have an account?{" "}
            <Link
              to='/login'
              className='font-medium text-blue-600 hover:underline dark:text-blue-400'
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


