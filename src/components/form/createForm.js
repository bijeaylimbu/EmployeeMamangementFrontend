import { useState, useEffect } from "react";
import   "./createForm.css";
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllEmployee, getEmployeeById, updateEmployee } from "../../redux/actions/employee";
import { getAllQualificaitonList, getQualificationNameById } from "../../redux/actions/education";
import { useParams } from "react-router-dom";
export default function CreateForm(props){
  const dispatch=useDispatch();
  const [id, setId]=useState("");
  
    const [name, setName]=useState("");
    const {employees}=useSelector((state)=>state.employees)
    const {educations}=useSelector((state)=>state.educations)
    const {employee}=useSelector((state)=>state.employee)
    const {education}=useSelector((state)=>state.education)
    const {EId}=useParams();
  
    const [qualificationList, setQualificationList]=useState([{employeeId: "",qId: "", marks: ""}])
    const [qualificationName, setQualificationName]=useState("");
    const [mark, setMark]=useState();
    const [qualificationId, setQualificationId]=useState("");


    const [employeeName, setEmployeeName]=useState(employee.employeeName);
    const [DOB, setDOB]=useState(employee.DOB);
    const [gender, setGender]=useState(employee.gender);
    const [salary, setSalary]=useState(employee.salary);
    useEffect(()=>{
        dispatch(getAllEmployee());
        dispatch(getAllQualificaitonList())
      
    },[])

     const handleFormSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("name", name);
      //   props.handleFormSubmit(formData);
     };
     
     const addQualificationList=(e,index)=>{
      e.preventDefault();
     const newQualification={
      employeeId: employee.employeeId,
      qId: qualificationName,
      marks: mark,
      qualificationId: qualificationId
     }
     const newQualifications=[...qualificationList, newQualification];
     setQualificationList(newQualifications);
     }

     const findEmployeeById=(employeeId)=>{
      dispatch(getEmployeeById(employeeId));
     }

     const findQualificationNameById=(qId)=>{
      dispatch(getQualificationNameById(qId));
     }

     const editEmployee=(e)=>{
      e.preventDefault();
        dispatch(updateEmployee(id, employeeName, DOB, gender, salary, qualificationList));
     }

     return(
        <>
        <div className='mainPage'>
          <form  onSubmit={editEmployee}>

         
         <div className='employeeList'>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Id</TableCell>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.employeeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e)=>{
                  setId(employee.employeeId);
                  findEmployeeById(employee.employeeId);
               
              }}
            >
              <TableCell component="th" scope="row">
                {employee.employeeId}
              </TableCell>
             
              <TableCell component="th" scope="row">
                {employee.employeeName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </div>
       <div className='employeeEntry'>
       
        <div style={{width: "100%", marginTop:"20px"}}>
           <label >Name</label>
      <input 
      style={{marginLeft: "30%"}}
            name="name"
            id="name"
            defaultValue={employee.employeeName}
            onChange={(e)=> setEmployeeName(e.target.value)} />
        </div>
      
           <div style={{width: "100%" , marginTop:"20px"}}>
           <label  style={{marginLeft: "35%"}} >Gender</label>   <br/>
            <input type="radio" name="gender" defaultValue={employee.gender} style={{marginLeft: "35%"}} checked 
             onChange={(e)=> setGender(e.target.value)}
            />
                Male
            <input type="radio" name="gender" defaultValue={employee.gender}
             onChange={(e)=> setGender(e.target.value)}
            /> Female
            <input type="radio" name="gender" defaultValue={employee.gender}
             onChange={(e)=> setGender(e.target.value)}
            /> third gender
           </div>
           <div style={{width: "100%" , marginTop:"20px"}}>
           <label   >Date of Birth</label>
           <input 
           type="text"
            style={{marginLeft: "25%"}}
            name="name"
            id="name"
            defaultValue={employee.dob}
            onChange={(e)=> setDOB(e.target.value)} />(YYYY/MM/DD)
            </div>
            <div style={{width: "100%" , marginTop:"20px"}}>
            <label   >Salary</label>
            <input 
           defaultValue={employee.salary}
            style={{marginLeft: "30%" , marginTop:"20px", marginBottom: "20px"}}
            name="name"
            id="name"
            onChange={(e)=> setSalary(e.target.value)} />
              </div>
              <div style={{width: "100%" , marginTop:"20px" }}>
              <div style={{width: "100%" , marginTop:"20px" }} >
              <label  style={{width: "100%" , marginTop:"20px"}} >Employee Classification</label>
              </div>
              <div style={{width: "100%" , marginTop:"20px"}}>
                <div className="qualificationDiv">
                <label   >Qualification</label>
              <select
               onChange={(e)=> {setQualificationName(e.target.value)
                findQualificationNameById(e.target.value)
              }}
               name="qualificationName"
                  id="qualificationName"
                  defaultValue={qualificationName}
              >
              {educations?.map((education) => (
                  <option 
                   key={education.qId} 
                   value={education.qId}
              
                  >{education.qName}
                   </option>
              ))}
              </select>
                </div>
                <div className="markDiv">
                  <label> Marks</label>
                  <input 
                  type="number"
                      style={{marginLeft: "5%", width:"40px"}}
                      // value={qualificationList.mark}
                      name="mark"
                      id="mark"
                      onChange={(e)=> setMark(e.target.value)} />
                    <button type="submit" onClick={addQualificationList}  >Add </button>
                </div>
                </div>       
                </div>
      
         <div  style={{width: "100%" , marginTop:"20px"}}>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Q Id</TableCell>
            <TableCell> Qualification Name</TableCell>
            <TableCell > Mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {employee?.empQualifications?.map((qualification) => (
            <TableRow
              key={qualification.employeeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell component="th" scope="row">
                {qualification.employeeId}
              </TableCell>
              <TableCell component="th" scope="row">
               {qualification.qId} 
              </TableCell>
              <TableCell component="th" scope="row">
                {qualification.marks}
              </TableCell>      
            </TableRow>
          ))}
          {qualificationList.slice(1).map((qualification) => (
            <TableRow
              key={qualification.employeeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell component="th" scope="row">
                {qualification.employeeId}
              </TableCell>
              <TableCell component="th" scope="row">
            {qualification.qId}
              </TableCell>   
              <TableCell component="th" scope="row">
                {qualification.marks}
              </TableCell>    
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
       </div>
       </div>
       <div>
       </div>
       <div>
       </div>
       <button 
       style={{float: "right", marginLeft:"10px"}}
       
       > Cancel</button>
       <button style={{float: "right", marginLeft:"10px"}}
       onClick={editEmployee}
       > Submit</button>
        </form>
        </div>
       
        </>
     )
}
