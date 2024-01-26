import React, { useContext, useEffect } from "react";
import { AuthContext } from "./../context/UseAuth";

const GoogleCallbackPage = () => {
  const { loginGoogle } = useContext(AuthContext);
  useEffect(() => {
    loginGoogle();
  }, []);

  return (
    <div>
      <p>Processing Google Authentication...</p>
    </div>
  );
};

export default GoogleCallbackPage;
