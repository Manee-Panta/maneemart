import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [cpass, setcpass] = useState();

  const submitform = () => {
    if (pass !== cpass) {
      toast(`Sorry Password doesn't match`);
      setname("");
      setemail("");
      setpass("");
      setcpass("");
    } else {
      const data = new FormData();
      data.append("firstname", name);
      data.append("email", email);
      data.append("password", pass);
      data.append("cpassword", cpass);
      try {
        axios.post("http://127.0.0.1:8000/api/register/", data)
          .then((response) => {
            if (response.data==true) {
              toast(`Successfully Registered`);
              window.location.href='/login'
            } else {
              toast(`Registration Failed !!!`);
            }
            setname("");
            setemail("");
            setpass("");
            setcpass("");
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register-all">
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

      <Link to="./">
        <img
          src="../collection/banner/logo2.jpg"
          alt="no data"
          className="site-logo"
        />
      </Link>
      <div className="col1">
        <img src="../collection/login/signin.jpg" alt="no data" />
      </div>
      <div className="col2">
        <div className="register-main">
          <div className="register-profile">
            <img
              src="./collection/login/user.png"
              alt="profile"
              className="profile"
            />

            <div className="register-title">
              <h2>Register Here</h2>
            </div>
            <form>
              <div className="register-name">
                <input
                  type="text"
                  placeholder="Username"
                  className="name"
                  required
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                />
              </div>
              <div className="register-email">
                <input
                  type="email"
                  placeholder="Email"
                  className="email"
                  required
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="register-pass">
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
              <div className="register-cpass">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="cpass"
                  required
                  onChange={(e) => {
                    setcpass(e.target.value);
                  }}
                  value={cpass}
                />
              </div>
              <div className="register-button">
                <button type="submit" onClick={submitform}>
                  Sign Up
                </button>
              </div>
              <div className="register-footer">
                <Link to="/login">Already have an account </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
