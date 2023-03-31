import { useContext } from "react";
import { ValidateAccount } from "../components/ValidateAccount";

export default function useValidateAccount(){

    const validate = useContext(ValidateAccount);

    if ( validate === undefined){
        throw new Error ("Validate hasn`t been defined");
    }

    return validate;
}