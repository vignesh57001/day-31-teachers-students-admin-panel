import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Create_teacher() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      tname: "",
      tgender: "",
      tmobile: "",
      tdob: "",
      tsubject: "",
    },
    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://635914fdc27556d2894b2f63.mockapi.io/api/user",
          values
        );
        console.log(userdata);
        alert("Success");
        navigate("/teachers");
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <div class="container teacher-table">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-5 text-center">
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/50/63/logo-teacher-mascot-cartoon-style-vector-46355063.jpg"
              alt="teacher-logo"
            />
          </div>
          <div className="col-lg-7">
            <div className="col-lg-8">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="tname"
                  onChange={formik.handleChange}
                  value={formik.values.tname}
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
                  name="tgender"
                  onChange={formik.handleChange}
                  value={formik.values.tgender}
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
                  name="tmobile"
                  onChange={formik.handleChange}
                  value={formik.values.tmobile}
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
                  name="tdob"
                  onChange={formik.handleChange}
                  value={formik.values.tdob}
                  type="date"
                  className="form-control"
                  placeholder="Enter Your DOB"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Subject Speciality</label>
                <input
                  name="tsubject"
                  onChange={formik.handleChange}
                  value={formik.values.tsubject}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Favorite Subject"
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

export default Create_teacher;
