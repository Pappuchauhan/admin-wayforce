import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../ReduxToolkit/Slice/Auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const loginStyle = {
    position: "fixed",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(credentials));
      setCredentials({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Redux error:", error);
    }
  };

  return (
    <div className="container-fluid" style={loginStyle}>
      <form action="" onSubmit={submit}>
        <div className="row">
          <div style={{ backgroundColor: "#CF9C03" }} className="p-3 rounded">
            <div className="text-center">
              <img src={require("../../../img/logo.png")} alt="Logo" />
              <h4>WayForce Login</h4>
              <p>Enter your WayForce Admin credentials</p>
            </div>
            <div className="d-grid my-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid my-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-outline-light">Login</button>
            </div>
            <p>Don't have an account? <Link to="/sinup" style={{ color: "#0099CC", textDecoration: "none" }}>Sign UP</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;