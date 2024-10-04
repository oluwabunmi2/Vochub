import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-light-body dark:bg-dark-body">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-1/2 md:w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white focus:outline-none" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button type="submit" className="w-full p-2 bg-[#D1EC79] text-black rounded hover:bg-[#b8d865]">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
