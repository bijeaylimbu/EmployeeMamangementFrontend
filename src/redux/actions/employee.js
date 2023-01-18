import http from "../../common/http";
import { CREATE_EMPLOYEE,GET_ALL_EMPLOYEE, GET_EMPLOYEE_BY_ID, UPDATE_EMPLOYEE} from "../../Constants/Constants";

export const getAllEmployee=()=>(dispatch)=>{
    // dispatch({type:EMPLOYEE_LOADING });
    const config={
        headers: {
            "Content-Type":"application/json"
        }
    };
    http.get("/employee/all-employee",null, config)
    .then((res)=>{
        dispatch({
            type: GET_ALL_EMPLOYEE,
            payload: res.data
        })
    })
    .catch((error)=>{
     console.log(error)
    })
}

export const getEmployeeById=(employeeId)=>(dispatch, getState)=>{
    // dispatch({type:EMPLOYEE_LOADING });
    const config={
        headers: {
            "Content-Type":"application/json"
        }
    };
    http.get(`/employee/${employeeId}`)
    .then((res)=>{
        dispatch({
            type: GET_EMPLOYEE_BY_ID,
            payload: res.data
        })
    })
    .catch((error)=>{
     console.log(error)
    })
}
export const updateEmployee = (id, employeeName, DOB, gender, salary, qualificationList) => (dispatch, getState) => {
    var date=new Date(DOB)
    var gend=parseInt(gender);
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    http
      .put(`/employee/${id}`,{ employeeName, dob:DOB, gender:gender, salary, empQualification:qualificationList})
      .then((res) => {
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: res.data,
        });
      })
      .catch((err) => {
       console.log(err)
      });
  };

