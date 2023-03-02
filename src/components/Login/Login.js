import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import "./Login.css";
import { Link } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


function Login() {
  const [username, setUsername] = useState("");
  const [uMessage, setUMessage] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState([]);
  
console.log(newUser)
  useEffect(() => {
    if (localStorage.getItem("registeredUser")) {
      const data = JSON.parse(localStorage.getItem("registeredUser"));
      setNewUser(data);
      console.log(data);
    }
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const usernameValidation = () => {
    const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if (username === "") {
      setUMessage("Enter Username");
    } else if (reg.test(username)) {
      setUMessage("Valid Username");
    } else if (!reg.test(username)) {
      setUMessage("Invalid Username");
    } else {
      setTimeout(function () {
        setUMessage(" ");
      }, 30000);
    }
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const passwordValidation = () => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (password === "") {
      setMessage("Enter Password");
    } else if (regExp.test(password)) {
      setMessage("Valid Password");
    } else if (!regExp.test(password)) {
      setMessage("Invalid Password");
    } else {
      setTimeout(function () {
        setMessage(" ");
      }, 30000);
    }
  };

  const registeredUser =
    JSON.parse(localStorage.getItem("registeredUser")) || [];
  function handleSubmit() {
    let flag = true;
    for (let i = 0; i < registeredUser.length; i++) {
      if (username) {
        if (registeredUser[i].username === username) {
          flag = false;

          if (registeredUser[i].password === password) {
            
            return alert("YOU ARE SUCCESSFULLY LOGGED IN");
          } else {
            alert("INCORRECT PASSWORD");
            break;
          }
        }
      }
    }
    if (flag) {
      alert("USER NOT FOUND");
    }
    registeredUser.push({
      username: username,
      password: password,
    });
  }

  return (
    <>
      {/* <form> */}
       

        <div className="Container">
          <div className="Container2">
            <div className="input1">
              <span className="icon1">
                {" "}
                <FaUserAlt />{" "}
              </span>

              <input
                className="i1"
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={handleUsername}
                required
              />
            </div>
            <p>{uMessage}</p>

            <div className="input2">
              <span className="icon2">
                <FaLock />
              </span>
              <input
                className="I2"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={handlePassword}
                required
              />
            </div>
            <p>{message}</p>
            <div className="Lower-Container">
              <div className="Register-link">
                <p>Dont have an account?</p>
                <Link to="/SignUp">Register</Link>
              </div>
              <div className="Login-Btn">
                <button
                  className="Btn"
                  onClick={(e) => {
                    handleSubmit();
                    e.preventDefault();
                    usernameValidation();
                    passwordValidation();
                  }}
                >
                  <Link to="/">Login </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* </form> */}
      <ToastContainer/>
     
    </>
  );
}

export default Login;
