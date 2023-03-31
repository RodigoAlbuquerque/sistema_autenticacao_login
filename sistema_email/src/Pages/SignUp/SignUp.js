import React,{useEffect, useState} from "react";
import useValidationContext from "../../Hooks/useValidationContext";
import { useNavigate, Link } from "react-router-dom";

import './SignUp.css';
import icone from '../img/icon_people.png'


export default function SignUp(){

    const navigate = useNavigate()
    let { cadastrados, setCadastrados } = useValidationContext()

    let [user, setUser] = useState("")

    const regUser = (event) =>{
        setUser(event.target.value)
    }

    let [log, setLog] = useState("")

    const regLog = (event) =>{
        setLog(event.target.value)
    }

    let [password, setPassword] = useState("")

    const regPassword = (event) =>{
        setPassword(event.target.value)
    }

    const usuario = {
            login:log,
            senha:password,
            user:user
        }

    const Click = () =>{
        if(log == " " || password == "" || user == ""){
            alert("Preencha o formulario de cadastro");
        }else{
            setCadastrados([...cadastrados, usuario])
        }
    } 
    
    useEffect(()=>localStorage.setItem('cadastros',JSON.stringify(cadastrados))
    , Click)

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
            <input className="input" type="text" onChange = {regUser} placeholder="👨‍💼 Insira seu Nome de usuario!"/>
            <input className="input" type="email" onChange={regLog} placeholder="✉️ Insira seu Email!"/>
            <input className="input" type="password" onChange={regPassword} placeholder="🔒 Insira sua senha!"/>
           
            
            
                <label for="check" className="check">
                    <input id="check" type="checkbox"/>
                    <span>Eu concordo com os termos de serviço!</span>
                    <Link className="Link" to = "/">Ir para Login</Link>
                </label>
            
           
            <button className="reg" onClick={Click}>Cadastre-se</button>
        </div>
      
    </div>
   );
};