import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login d-flex align-items-center justify-content-center'>
        <div className="loginWrapper d-flex">  
            <div className="loginLeft d-flex justify-content-center flex-column mt-auto mb-auto">
                <h3 className="loginLogo fw-bold">MagicHub</h3>
                <span className="loginDesc">
                    Connettiti con giocatori e collezionisti di Magic The Gathering
                </span>
            </div>
            <div className="loginRight d-flex justify-content-center flex-column">
                <div className="loginBox d-flex flex-column justify-content-between">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton border-0">Log In</button>
                    <span className='loginForgot'>Password dimenticata</span>
                    <button className="loginRegisterButton align-self-center border-0">Crea un nuovo account</button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Login