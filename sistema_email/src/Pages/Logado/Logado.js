import React,{useContext} from "react";
import "./logado.css"

import useValidateAccount from "../../Hooks/useValidateAccount";
import useUsuarioContext from "../../Hooks/useUsuarioContext";
import { useNavigate } from "react-router-dom";

export default function Logado(){
    const { setLiberado } = useValidateAccount();
    const {usuario} = useUsuarioContext();
    const navigate = useNavigate();
    const contas = localStorage.getItem('cadastros')?JSON.parse(localStorage.getItem('cadastros')):[];

    const Sair = () =>{
        setLiberado(false);
        navigate("/")
    }
    return(
        <div className="container">
            <h1>Parabéns Você está conectado { usuario }! </h1>
            <button className="btn" onClick={Sair}>Sair</button>
        </div>
    )
}