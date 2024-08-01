import logo from "./logo.svg";
import "./App.css";
// import About from './components/About.js';
import Navbar from "./components/Navbar.js";
// import TextForm from './components/TextForm.js'
import React, { useState } from "react";
import Formsignup from "./components/Fromsignup";
import axios from "axios";
import wowbabywhat from "./components/Wowlogin.js";
import Loginform from "./components/Loginform.js";
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, changealert] = useState(
    "Password and Confirm Password Should Match!"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    // other fields
  });

  const handletext = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postWithoutHeader = async (jsonBody, dataToSend) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        jsonBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      changealert(response.data);
      //------Here we're sending emails
      //`localhost:3000?email={dataToSend.email}&password={dataToSend.password}`
    } catch (error) {
      changealert(error.message);
      if (error.response) {
        changealert(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...dataToSend } = formData;
    const jsonPayload = JSON.stringify(dataToSend);

    console.log(jsonPayload);
    postWithoutHeader(jsonPayload, dataToSend);
  };

  //this one is lorm

  const [lormData, setlormData] = useState({
    email: "",
    password: "",
    // other fields
  });

  const handlelormtext = (e) => {
    const { name, value } = e.target;

    setlormData({
        ...lormData,
      [name]: value,
    });
  };

  const handlelormSubmit = (e) => {
    e.preventDefault();

    console.log(lormData);
    wowlogin(lormData);
  };

  return (
    <>
      <a href="/emailfirstlog" onClick={wowbabywhat()}></a>

      <Router>
        <Navbar title="Backend" mode="light" />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-70">
                <Formsignup
                  handletext={handletext}
                  handleSubmit={handleSubmit}
                  pswrd={formData.password}
                  alert={alert}
                />
              </div>
            }
          />
          {/* <Route exact path="/emailfirstlog" element={
            <div className="container my-3">
              <wowbabywhat />
            </div>
          } /> */}
          <Route
            exact
            path="/loginform"
            element={
              <>
                <div className="container">
                  <Loginform />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
