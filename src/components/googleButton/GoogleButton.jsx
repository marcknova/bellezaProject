import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const customStyles = {
    // Add your custom styles here
    backgroundColor: "#4285f4",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "50px",
    cursor: "pointer",
    witdh: "5rem",
  };

  return (
    <GoogleLogin
      // Add your other props here
      render={(renderProps) => (
        <button onClick={renderProps.onClick} style={customStyles}>
          Sign in with Google
        </button>
      )}
    />
  );
};

export default GoogleLoginButton;
