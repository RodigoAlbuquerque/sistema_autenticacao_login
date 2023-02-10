import React from "react";
import './SignUp.css';
import icone from '../img/icon_people.png'

export default function SignUp(){
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
        <div className="cadastro">
            <input className="input" type="text" placeholder="👨‍💼 Insira seu Nome de usuario!"/>
            <input className="input" type="email" placeholder="✉️ Insira seu Email!"/>
            <input className="input" type="password" placeholder="🔒 Insira sua senha!"/>
            <label for="check" className="check">
                <input id="check" type="checkbox"/>
                <span>      Eu concordo com os termos de serviço!</span>
            </label>
            
            <button className="reg">Cadastre-se</button>
        </div>
      
    </div>
   );
};