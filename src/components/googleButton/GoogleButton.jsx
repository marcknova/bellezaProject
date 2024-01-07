import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

    // Store user data in a cookie (you can use a cookie library)
    document.cookie = `googleToken=${credentialResponse.credential}; path=/`;

    // Redirect to the main page
    navigate("/main");

    console.log(decodedToken);
  };

  const handleGoogleLoginError = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onError={handleGoogleLoginError}
    />
  );
};

export default GoogleLoginButton;
