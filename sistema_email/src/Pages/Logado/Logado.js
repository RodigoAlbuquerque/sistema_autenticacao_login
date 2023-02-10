import React,{useContext} from "react";
import "./logado.css"
import UserContext from "../../components/ValidationContext";
import { useNavigate } from "react-router-dom";
export default function Logado(){
    const navigate = useNavigate()
    const user = useContext(UserContext)

    return(
        <div className="container">
            <h1>Parabéns {user[1].user} Você está conectado! </h1>
            <button className="btn" onClick={ () => navigate('/')}>Sair</button>
        </div>
    )
}