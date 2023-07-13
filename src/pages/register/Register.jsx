import React, { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate()

  const handleClick = async (event) => {
    event.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Le password non corrispondono");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        localStorage.setItem('user', JSON.stringify(user)); // salva user nel localStorage
        navigate("/login")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="loginWrapper d-flex">
        <div className="loginLeft d-flex justify-content-center flex-column mt-auto">
          <h3 className="loginLogo fw-bold">MagicHub</h3>
          <span className="loginDesc">
            Connettiti con giocatori e collezionisti di Magic The Gathering
          </span>
        </div>
        <div className="loginRight d-flex justify-content-center flex-column">
          <form
            className="loginBox d-flex flex-column justify-content-between"
            onSubmit={handleClick}
          >
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              min={6}
            />
            <input
              placeholder="Digita di nuovo la password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton border-0" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton align-self-center border-0" onClick={() => navigate("/login")}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
