import React from "react";
import { Navigate } from "react-router-dom";

import useValidateAccount from "../../Hooks/useValidateAccount";

export function PrivateRoute({children}){

    let { liberado } = useValidateAccount()

    return liberado? children : <Navigate to = "/"/>
}