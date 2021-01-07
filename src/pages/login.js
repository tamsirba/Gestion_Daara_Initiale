import React, { Component, useState, useEffect } from "react";
import { FaSignInAlt, FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-tilt';
//import {inputRef,props} from 'react-password-toggle-icon';

function LoginPage() {
    const handleSubmitTeacher = () => {
        // Submit avec Professeur
    }


    const handleSubmitAdmin = () => {
        // Submit avec Administrateur
    }


    const handleSubmitStudent = () => {
        // Submit avec Etudiant
    }

    return (
        //<main>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
                            <div className="Tilt-inner login100-pic">
                                <img src="./logo.png" alt="IMG" />
                            </div>
                        </Tilt>

                        <form className="login100-form validate-form">
                            <span className="login100-form-title">
                                Connexion
                            </span>
                            <div className="wrap-input100 validate-input" data-validate = "Valid matricule is required: exabc.123">
                                <input className="input100" type="text" name="matricule" placeholder="Matricule" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i aria-hidden="true">
                                        <FaUser />
                                    </i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" id="inputPassword" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i aria-hidden="true">
                                        <FaLock />
                                    </i>
                                </span>
                                <span className="symbol-input200">
                                    <a href="#" className="text-dark" toggle="#password-field">
                                        <i className="toggle-password">
                                            <FaEyeSlash />
                                        </i>
                                    </a>
                                </span>
                            </div>
                        
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" style={{background: '#ea4335'}} name="logInadmin" type="submit">
                                    <i className="fa-signIn">
                                        <FaSignInAlt />
                                    </i>
                                    Connexion
                                </button>
                            </div>

                            <div className="text-center p-t-12">
                                <span className="txt1">
                                Vous avez oublié
                                </span>
                                <a className="txt2" href="">
                                Votre Mot de passe?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       //</main>
    )
}

export default LoginPage;