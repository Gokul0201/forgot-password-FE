import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../config";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [students,setStudents] = useState([])
  // let getData = async () => {
  //  let res= await axios.get(`${config.api}/dashboard`,{
  //   headers:{
  //     'Authorization' : `${localStorage.getItem('react_app_token')}`
  //   }
  //  });
  //   setStudents(res.data)
  //   console.log(students)
   
  // };
  // useEffect(() => {
  //   getData();
    
  // }, []);

  let navigate = useNavigate()

  let doLogout = () => {
    localStorage.removeItem('react_app_token');
    navigate('/')
    
  }

  return (
    <>
      <div className="container">
        
          <div className=" d-flex justify-content-end py-2" >
            <button className="btn btn-info" onClick={doLogout}>Logout</button>
            </div>
  
           <h1 className="text-center py-5 fw-5"> Welcome To Password Reset</h1>
          </div>
   
    </>
  );
}

export default Dashboard;
