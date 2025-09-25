import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg || "Login failed");
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
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
          Welcome Back
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
          Please login to your account
        </p>

        {/* Form */}
        <form className='space-y-5' onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              placeholder='you@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
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
              className='w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400'
            />
          </div>

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
            disabled={loading}
            className='w-full py-3 text-white bg-blue-600 rounded-lg font-medium text-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 disabled:opacity-60'
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {error && (
            <p className='text-sm text-red-600 dark:text-red-400 text-center'>
              {error}
            </p>
          )}

          {/* Footer */}
          <p className='text-sm text-center text-gray-500 dark:text-gray-400'>
            Don’t have an account?{" "}
            <Link
              to='/signup'
              className='font-medium text-blue-600 hover:underline dark:text-blue-400'
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
