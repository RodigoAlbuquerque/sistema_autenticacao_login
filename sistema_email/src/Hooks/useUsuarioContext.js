import { useContext } from "react";
import {usuarioContext} from "../components/usuarioContext"

export default function useUsuarioContext() {

   const usuario = useContext(usuarioContext)

    if(usuario == undefined){
        throw new Error("Usuario hasn't been defined")
    }

   return usuario;
} 