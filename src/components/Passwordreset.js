import React from "react";
import { config } from "../config";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

function Passwordreset() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${config.api}/resetpassword`, values);
      alert(user.data.message);
    },
  });
  return (
    <div className="container">
      <div className="col-lg-12">
        <div className="row" style={{marginTop:"70px"}}>
          <form onSubmit={formik.handleSubmit}>
            <div class="col-lg-5">
              <label for="exampleInputEmail1" class="form-label">
                Enter mail address to confirm
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button> &nbsp;
            <Link to='/' className="btn btn-primary mt-3">Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
