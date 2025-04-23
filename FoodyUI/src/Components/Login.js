import React from "react";
import './Styles/Login.css';

const Login = () =>
{
    return (
        <div className="login-container">
            <div className="login-box">

                <h1 className="login-title">Login</h1>

                <form className="login-form">

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"/>

                </form>
                
                <p className="register-link">Don't you have an account?
                    <a href="/register">Register</a>
                </p>
            </div>
        </div>
    );
}
export default Login