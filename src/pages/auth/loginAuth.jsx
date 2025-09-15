import React, { useState } from 'react';

const LoginAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-16 rounded-lg  w-[500px]">
        <h2 className="text-2xl font-medium text-gray-900 mb-32">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Gmail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md "
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md "
              placeholder="min 6 characters"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-[#636363]">
            Don't have an account?{' '}
            <a href="/register" className="font-semibold">Register now</a>
          </p>
        </div>
        <p className='text-[#636363] text-center my-4 text-sm'>- or login with -</p>
        <div className="mt-4 flex justify-center items-center">
          <button className="w-16 h-16 rounded-full bg-white border border-[#DFE1E2] flex justify-center items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAuth;
