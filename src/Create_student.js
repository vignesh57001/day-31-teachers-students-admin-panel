import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Create_student() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      sname: "",
      sgender: "",
      smobile: "",
      sdob: "",
      semail: "",
    },
    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://635914fdc27556d2894b2f63.mockapi.io/api/user",
          values
        );
        console.log(userdata);
        alert("Success");
        navigate("/students");
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <div class="container student-table">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-5 text-center">
            <img
              src="https://www.freeiconspng.com/uploads/school-student-icon-18.png"
              alt="student-logo"
            />
          </div>
          <div className="col-lg-7">
            <div className="col-lg-8">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="sname"
                  onChange={formik.handleChange}
                  value={formik.values.sname}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Gender</label>
                <input
                  name="sgender"
                  onChange={formik.handleChange}
                  value={formik.values.sgender}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Gender"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Mobile No</label>
                <input
                  name="smobile"
                  onChange={formik.handleChange}
                  value={formik.values.smobile}
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Date Of birth</label>
                <input
                  name="sdob"
                  onChange={formik.handleChange}
                  value={formik.values.sdob}
                  type="date"
                  className="form-control"
                  placeholder="Enter Your DOB"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Email ID</label>
                <input
                  name="semail"
                  onChange={formik.handleChange}
                  value={formik.values.semail}
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <button className="btn btn-large btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create_student;
