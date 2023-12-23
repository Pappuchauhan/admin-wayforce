import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { loginUser } from '../../ReduxToolkit/Slice/Auth';
import { Link } from 'react-router-dom';

const SubAdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
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
           
    
     const users = [{ username: 'test@test.com', password: '12345678' }];
     
     const onSubmitHandler = (e) => {
      e.preventDefault();
      const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
        localStorage.setItem('authenticated', true);
        setAuthenticated(true);
        navigate('/subadmin');
      } else {
        localStorage.setItem('authenticated', false);
        console.log('Login failed: Invalid credentials');
      }
    };
    
    

      return (

    <div className="container-fluid" style={loginStyle}>
    <form onSubmit={onSubmitHandler}>
      <div className="row">
        <div style={{ backgroundColor: "#CF9C03" }} className="p-3 rounded">
          <div className="text-center">
            <img src={require("../../img/logo.png")} alt="Logo" />
            <h4>WayForce Sub Admin Login</h4>
            <p>Enter your WayForce Sub-Admin credentials</p>
          </div>
          <div className="d-grid my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid my-3">
          <button type="submit" className="btn btn-outline-light">
            Login
          </button>
            {/* <Link className="btn btn-outline-light" to="/subadmin">Login</Link> */}
          </div>
        </div>  
      </div>
    </form>
  </div>
      )
}

export default SubAdminLogin