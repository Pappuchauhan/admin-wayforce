import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SinUpUser } from "../../ReduxToolkit/Slice/Register";

function Signup() {
  const sinUp = {
    position: "fixed",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    AdminName: "",
    email: "",
    password: "",
  });

  // const [showSuccess, setShowSuccess] = useState(false);

  const { AdminName, email, password } = user;

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (AdminName.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please provide all the required details.");
      return;
    }

    try {
      dispatch(SinUpUser(user)); // Assuming this action is properly defined
      // setShowSuccess(true);
      setUser({
        AdminName: "",
        email: "",
        password: "",
      });
      // setTimeout(() => {
      //   setShowSuccess(false);
      // }, 3000);
    } catch (error) {
      console.log("Redux error:", error);
    }
  };

  return (
    <>
      <div className="container-fluid" style={sinUp}>
        <form action="" onSubmit={submit}>
          <div className="row">
            <div style={{ backgroundColor: "#CF9C03" }} className="p-3 rounded">
              <div className="text-center">
                <img src={require("../../img/logo.png")} alt="" />
                <h4>WayForce</h4>
                <p>Fill Data to access WayForce Admin</p>
              </div>
              <div className="d-grid my-2">
                <label htmlFor="AdminName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="AdminName"
                  value={AdminName}
                  onChange={handleChange}
                  required
                />
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
                  placeholder="Enter Your password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="d-grid my-3">
                <button className="btn btn-outline-light">Submit</button>
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#0099cc", textDecoration: "none" }}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      {/* {showSuccess && <div className="success-popup">Signup successfully!</div>} */}
    </>
  );
}

export default Signup;
