import React from "react";
import './RegisterPage.css';

function RegisterPage(){
    return(
        <>
        <div className="register-container">
            <h1 className="register-title">Inscription</h1>
            <form className="register-form">
                <label className="label-form email">
                    Email:
                    <input type="text" name="email" className="email-input" />
                </label>
                <label className="label-form password">
                    Password:
                    <input type="text" name="password" className="password-input"/>
                </label>
                <label className="label-form password">
                    Confirm Password:
                    <input type="text" name="password" className="password-input"/>
                </label>
                <input type="submit" value="Submit" className="submit-button"/>
            </form>
        </div>
    </>
    )
}
export default RegisterPage;