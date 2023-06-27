import React from "react";
import './LoginPage.css';

function LoginPage(){
    return (
        <div className="login-container">
            <h1 className="login-title">Connexion</h1>

            <form className="login-form">
                <label className="label-form email">
                    Email:
                    <input type="text" name="email" className="email-input" />
                </label>
                <label className="label-form password">
                    Password:
                    <input type="text" name="password" className="password-input"/>
                </label>
                <input type="submit" value="Submit" className="submit-button"/>
            </form>
            <a href="/register" className="register-link">Pas encore inscrit ?</a>
        </div>
    );
}
export default LoginPage;