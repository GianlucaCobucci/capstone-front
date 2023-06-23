import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='login d-flex align-items-center justify-content-center'>
        <div className="loginWrapper d-flex">  
            <div className="loginLeft d-flex justify-content-center flex-column mt-auto">
                <h3 className="loginLogo fw-bold">Magic Social</h3>
                <span className="loginDesc">
                    Connettiti con giocatori e collezionisti di Magic The Gathering
                </span>
            </div>
            <div className="loginRight d-flex justify-content-center flex-column">
                <div className="loginBox d-flex flex-column justify-content-between">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Digita di nuovo la password" className="loginInput" />
                    <button className="loginButton border-0">Sign Up</button>
                    <button className="loginRegisterButton align-self-center border-0">Log In</button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Register