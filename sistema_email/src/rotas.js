import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Logado from './Pages/Logado/Logado';

import { PrivateRoute } from "./Pages/privateRoute/privateRoute";
import { ValidationContext } from './components/ValidationContext';
import { ValidateAccount } from "./components/ValidateAccount";
import { usuarioContext } from "./components/usuarioContext"

export default function Rotas(){

    let [cadastrados,setCadastrados] = useState(localStorage.getItem('cadastros')?JSON.parse(localStorage.getItem('cadastros')):[]);
    let [liberado, setLiberado] = useState(false)
    let [usuario , setUsuario] = useState("")
    return(
        <BrowserRouter>
            <ValidationContext.Provider value={ { cadastrados, setCadastrados } }>
                <ValidateAccount.Provider value = { { liberado , setLiberado } }>
                    <usuarioContext.Provider value= { {usuario, setUsuario} }>
                        <Routes>
                            <Route path='/' element={<SignIn />}/>
                            <Route path='/signup' element={<SignUp/>}/>
                            <Route 
                                path="/logado"
                                element={
                                    <PrivateRoute>
                                        <Logado />
                                    </PrivateRoute>
                            }/>
                        </Routes>
                    </usuarioContext.Provider>
                </ValidateAccount.Provider>
            </ValidationContext.Provider>
        </BrowserRouter>  
    );
}