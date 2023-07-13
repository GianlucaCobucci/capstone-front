import React, { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const email = useRef();
  const password = useRef();
  // eslint-disable-next-line
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = async (event) => {
    event.preventDefault();
    
    try {
      const res = await loginCall(
        { 
          email: email.current.value, 
          password: password.current.value,
        },
        dispatch
      );
      console.log(res)
      
      // Salva l'utente nel localStorage
      localStorage.setItem("user", JSON.stringify(res.user));
    } catch (error) {
      console.log(error);
    }
  };
  
  //console.log(user);
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="loginWrapper d-flex">
        <div className="loginLeft d-flex justify-content-center flex-column mt-auto mb-auto">
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
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              minLength={6}
              required
              ref={password}
            />
            <button className="loginButton border-0" disabled={isFetching}>
              {isFetching ? <CircularProgress color="secondary" /> : "Log In"}
            </button>
            <span className="loginForgot">
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Password dimenticata
              </a>
            </span>
            <button className="loginRegisterButton align-self-center border-0">
              {isFetching ? <CircularProgress color="secondary" /> : "Crea un nuovo account"}  
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
