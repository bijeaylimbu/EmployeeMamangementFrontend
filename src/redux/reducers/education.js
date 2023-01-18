import { GET_ALL_QUALIFICATION_LIST, GET_QUALIFICATION_NAME_BY_ID } from "../../Constants/Constants";

const initialState={
    is_loading: false,
    educations: [],
    education:{}
}

export default function (state= initialState, action){
    switch(action.type){
        
        case GET_ALL_QUALIFICATION_LIST: 
       
            return {
                ...state,
                is_loading: false,
                educations: action.payload
            }
        case GET_QUALIFICATION_NAME_BY_ID: 
       
            return {
                ...state,
                is_loading: false,
                education: action.payload
            }
        default: 
        return state;

    }
}