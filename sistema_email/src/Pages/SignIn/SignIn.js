import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import useValidateAccount from "../../Hooks/useValidateAccount";
import useUsuarioContext from "../../Hooks/useUsuarioContext";

import './SignIn.css';
import icone from '../img/icon_people.png';

export default function SignIn(){
    const navigate = useNavigate()
    const { setLiberado } = useValidateAccount();
    const { setUsuario } = useUsuarioContext();
    let indexLog;
    let indexPass;

    const contas = localStorage.getItem('cadastros')?JSON.parse(localStorage.getItem('cadastros')):[]

    const [log,setLog] = useState('')

    const verLog = (event) =>{
        setLog(event.target.value)
    }

    const [password,setPassword] = useState('')

    const verPassword = (event) =>{
        setPassword(event.target.value)
    }

    const logar = () => {
        indexLog = contas.find( (cont) => cont.login == log )
        indexPass = contas.find( (cont) => cont.senha == password )
       
        if( indexLog == indexPass && indexLog != undefined){
            const pos = contas.findIndex( (cont) => cont.login == log)
            setUsuario(contas[pos].user)
            setLiberado(true)
            navigate("/logado")
        }
        else{
            alert("Algo de errado nao está certo")
        }

    }


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
                <input className="input" onChange={verLog} type="email" placeholder='&#128100;    Digite seu E-mail!'/>
                <input className="input" onChange={verPassword} type="password" placeholder='&#128274;     Insira sua senha!'/>
                <div className="linkContainer">
                    <Link className="link" to="/signup">Cadastre-se</Link>
                    <span>Esqueceu a senha?</span>
                </div>
                <button className="log" onClick={logar}>Login</button>
            </div>
        </div>
    )
}