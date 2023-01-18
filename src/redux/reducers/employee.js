import { CREATE_EMPLOYEE, GET_ALL_EMPLOYEE, 
    UPDATE_TUTORIAL, DELETE_EMPLOYEE, DELETE_ALL_EMPLOYEE, GET_EMPLOYEE_BY_ID, UPDATE_EMPLOYEE
} from "../../Constants/Constants";

const initialState={
    is_loading: false,
    employees: [],
    employee: {}
};

export default function (state= initialState, action){
    switch(action.type){
        case GET_ALL_EMPLOYEE:
            return{
                ...state,
                is_loading: false,
                employees: action.payload
            }
        case GET_EMPLOYEE_BY_ID:
            return{
                ...state,
                is_loading: false,
                employee: action.payload
            }
        case UPDATE_EMPLOYEE:
            return{
                ...state,
                is_loading: false
              
            }

        default:
            return state;
    }
}
