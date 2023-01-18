import http from "../../common/http";
import { GET_ALL_QUALIFICATION_LIST, GET_QUALIFICATION_NAME_BY_ID } from "../../Constants/Constants"

export const getAllQualificaitonList=()=>(dispatch)=>{
    const config={
        headers: {
            "Content-Type": "application/json",
          },
    };
    http.get("/employee/all-qualification-list",null, config)
    .then((res)=>{
        dispatch({
            type: GET_ALL_QUALIFICATION_LIST,
            payload: res.data
        })
    })
    .catch((error)=>{
        console.log(error);
    })
};

export const getQualificationNameById=(qId)=>(dispatch)=>{
    const config={
        headers: {
            "Content-Type": "application/json",
          },
    };
    http.get(`/employee/qualification/${qId}`,null, config)
    .then((res)=>{
        dispatch({
            type: GET_QUALIFICATION_NAME_BY_ID,
            payload: res.data
        })
    })
    .catch((error)=>{
        console.log(error);
    })
};
