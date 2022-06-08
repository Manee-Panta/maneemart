import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();

  const Lsubmitform = () => {
    const data = new FormData();

    data.append("email", email);
    data.append("password", pass);

    try {
      axios.post("http://127.0.0.1:8000/api/login/", data).then((response) => {
        console.log(response.data);
        
        console.log(response.data.bool);
        if (response.data !== null) {
          toast(`Successfully Loged in`);
          window.location.href = "/";
        } else {
          toast(`Login Failed !!!`);
        }

        setemail("");
        setpass("");
      });
    } catch (e) {
      console.log(e);
    }
  };
console.log('byyyyy')
  return (
    <div className="login-all">
    

      <Link to="/">
        <img
          src="../collection/banner/logo2.jpg"
          alt="no data"
          className="site-logo"
        />
      </Link>
      <div className="col1">
        <img src="../collection/login/login.jpg" alt="no data" />
      </div>
      <div className="col2">
        <div className="login-main">
          <div className="login-profile">
            <img
              src="./collection/login/user.png"
              alt="profile"
              className="profile"
            />

            <div className="login-title">
              <h2>Login</h2>
            </div>
            <div className="login-email">
              <input
                type="text"
                placeholder="Email"
                className="text"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="login-pass">
              <input
                type="password"
                placeholder="Password"
                className="pass"
                required
                onChange={(e) => {
                  setpass(e.target.value);
                }}
                value={pass}
              />
            </div>
            <div className="login-button">
              <button type="submit" onClick={Lsubmitform}>
                Login
              </button>
            </div>
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
            <div className="login-footer">
              <Link to="/register">Create new account </Link>
              <Link t0o='/'>Forget Password </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
