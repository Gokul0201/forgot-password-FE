import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../config";
import { useNavigate } from "react-router-dom";
import toast,{ Toaster} from 'react-hot-toast'

function ResetPasswordPage() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues:{
      rString:'',
      email:'',
      password:''
    },
    onSubmit :async (values)=> {
      let user = await axios.post(`${config.api}/reset-password-page`,values);
      toast.success(user.data.message);
      setTimeout(() => {
        navigate("/")
    }, 3000)
    }
  })
  return (
  <div className="row" style={{marginLeft:"200px",marginTop:"70px"}}>
     <Toaster  position="top-right"
            reverseOrder={false}/>
    <form onSubmit={formik.handleSubmit}>
      <div class="col-lg-5">
        <label for="exampleInputEmail1" class="form-label">
          Enter Random String
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" 
        name="rString"
        onChange={formik.handleChange}
        value={formik.values.rString}/>
        
      </div>
      <div class="col-lg-5">
        <label for="exampleInputEmail1" class="form-label">
            Enter Email        </label>
        <input type="email" class="form-control" id="exampleInputEmail1"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email} />
      </div>
      <div class="col-lg-5">
        <label for="exampleInputEmail1" class="form-label">
            Enter New Password
        </label>
        <input type="password" class="form-control" id="exampleInputEmail1"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
         />
      </div>
      <button type="submit" class="btn btn-primary mt-3">
        Submit
      </button>
    </form>

    
    </div>
  );
}

export default ResetPasswordPage;
