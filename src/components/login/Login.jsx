import { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

function Login() {

  const [role, setRole] = useState("USER");

  return (
    <div>
      <Navbar/>

      <div className="login-container">

        <div className="login-card">

          <h1>Login to continue</h1>

          <div className="login-tabs">

            <button
              className={role === "USER" ? "active" : ""}
              onClick={() => setRole("USER")}
            >
              User
            </button>

            <button
              className={role === "PHARMACIST" ? "active" : ""}
              onClick={() => setRole("PHARMACIST")}
            >
              Pharmacist
            </button>

          </div>

          {/* FORM SECTION */}

          <form className="login-form">

            {role === "USER" && (
              <input
                type="tel"
                placeholder="Enter Phone Number"
              />
            )}

            {role === "PHARMACIST" && (
              <input
                type="email"
                placeholder="Enter Email"
              />
            )}

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button className="login-btn">
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;