import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

const SesionPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["userToken"]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      const userToken = "4815162342";
      setCookie("userToken", userToken, { path: "/", session: true });
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
            <p className="text-sm mt-4 text-[#663581]">
              If you have an account, please login
            </p>
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
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-[#663581] hover:bg-[#8947ad] focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you don't have an account...</p>
              <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-[#8947ad]">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SesionPage;
