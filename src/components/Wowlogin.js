import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

const wowbabywhat = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const data = {
    email: urlParams.get("email"),
    password: urlParams.get("password"),
  };

  return Login(data);
};

const Login = ( data ) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "no token"
  );

  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.get('http://localhost:3001/login', {
            params: data
          });

        console.log(response);
        const receivedToken = response.data;
        localStorage.setItem("token", receivedToken);
        setToken(response.data);
      } catch (error) {
        console.error("Login failed", error);
      }
    };

    login();
  }, [data, token]);

  return token ? <Dashboard token={token} /> : <div>Loading...</div>;
};

export default wowbabywhat;
