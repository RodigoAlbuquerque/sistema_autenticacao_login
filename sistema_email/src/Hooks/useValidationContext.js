import { useContext } from "react";
import { ValidationContext } from "../components/ValidationContext";

export default function useValidationContext(){
    
    const context = useContext(ValidationContext);

    if ( context === undefined){
        throw new Error ("Context hasn`t been defined");
    }

    return context;
}