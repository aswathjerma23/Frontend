import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

function Login() {
  return (

    <div className="login-container">

      <div className="login-left">
        <h1>Online Sick Leave Certificate</h1>
        <p>Consult doctors online and get verified certificates.</p>
      </div>

      <div className="login-right">

        <h2>Login</h2>

        <div className="role-select">
          <button>Patient</button>
          <button>Pharmacist</button>
        </div>

        <input type="text" placeholder="Email or Phone" />

        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

      </div>

    </div>
  );
}

export default Login;