import React from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const SesionPage = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['userToken']);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            const userToken = '4815162342';
            setCookie('userToken', userToken, { path: '/' });
            window.location.reload();
        } else {
          alert("Invalid username or password");
        }
      };

  return (
    <>
  <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="px-5">
        <h2 className="text-2xl font-bold text-[#663581]">Login</h2>
        <p className="text-sm mt-4 text-[#663581]">If you have an account, please login</p>
        <form className="mt-6" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input 
                type="name" 
                name="" 
                placeholder="Enter User" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#663581] focus:bg-white focus:outline-none" 
                autoFocus 
                autoComplete="true"
                required 
                value={username}
                onChange={handleUsernameChange}
                />
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input 
                type="password" 
                placeholder="Enter Password" 
                minLength="4" 
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#663581]
                  focus:bg-white focus:outline-none" 
                required 
                value={password}
                onChange={handlePasswordChange}
                />
          </div>
  
          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" className="w-full block bg-[#663581] hover:bg-[#8947ad] focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
          <span className = "ml-4">Login with Google</span>
        </button>

        <div className="text-sm flex justify-between items-center mt-3">
          <p>If you don't have an account...</p>
          <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-[#8947ad]">Register</button>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default SesionPage