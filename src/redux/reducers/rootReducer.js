import { combineReducers } from "redux";
import employee from "./employee";
import employees from "./employee";
import educations from "./education";
import education from "./education";
export default combineReducers({
    employees,
    educations,
    employee,
    education

})