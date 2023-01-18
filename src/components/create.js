import React from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../redux/actions/employee";
import CreateForm from "./form/createForm";

export default function CreateTutorial(){
    const dispatch=useDispatch();

    const handleFormSubmit=(formData)=>{
        dispatch(createEmployee(formData));
    }

    return(
        <div>
           <CreateForm
           onSubmit={handleFormSubmit}
        
           />

        </div>
    )
}