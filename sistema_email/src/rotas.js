import React,{useState} from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Logado from './Pages/Logado/Logado';
import UserContext from './components/ValidationContext';

export default function Rotas(){
    const [cadastrados,setCadastrados] = useState(
    [
        {login:"roro.costa2018@gmail.com",senha:"1234567890",user:"Rodrigo Albuquerque"},
        {login:"rafa.costa2018@gmail.com",senha:"0987654321",user:"Rafael Albuquerque"}
    ]
    );
    return(
        <BrowserRouter>
            <UserContext.Provider value={ { cadastrados, setCadastrados } }>
                <Routes>
                    <Route path='/' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/logado' element={<Logado/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>  
    );
}