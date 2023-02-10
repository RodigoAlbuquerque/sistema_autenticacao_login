import React from "react";
import './SignIn.css';
import icone from '../img/icon_people.png';
import { Link } from "react-router-dom";
export default function SignIn(){
    return(
        <div className="container">
            <div className="imgContainer">
                <img 
                    src={icone} 
                    alt="Icone de pessoas" 
                    width='90%' 
                    height='90%'  
                />
            </div>
           <div className="login">
                <input className="input" type="email" placeholder='&#128100;    Digite seu E-mail!'/>
                <input className="input" type="password" placeholder='&#128274;     Insira sua senha!'/>
                <div className="linkContainer">
                    <Link className="link" to="/signup">Cadastre-se</Link>
                    <span>Esqueceu a senha?</span>
                </div>
                <button className="log">Login</button>
            </div>
        </div>
    )
}