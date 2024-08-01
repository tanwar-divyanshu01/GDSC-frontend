import React, { useState } from "react";
import wowlogin from "./Wowlogin.js";
import ReactDOM from "react-dom/client";

export default function Loginform() {
  const [lormData, setlormData] = useState({
    email: "",
    password: "",
    // other fields
  });

  const handletext = (e) => {
    const { name, value } = e.target;

    setlormData({
        ...lormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(lormData);
    // return wowlogin(lormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={lormData.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handletext}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={lormData.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handletext}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
