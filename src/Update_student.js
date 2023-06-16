import React, { useEffect, useState } from "react";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update_student() {
  const [sname, setSname] = useState("");
  const [sgender, setSgender] = useState("");
  const [smobile, setSmobile] = useState("");
  const [sdob, setSdob] = useState("");
  const [semail, setSemail] = useState("");
  const [sid, setSid] = useState("");
  const navigate = useNavigate();

  const updateStudent = async () => {
    try {
      await axios.put(API_URL + sid, {
        sname,
        sgender,
        smobile,
        sdob,
        semail,
      });
      navigate("/students");
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    setSname(localStorage.getItem("sname"));
    setSgender(localStorage.getItem("sgender"));
    setSmobile(localStorage.getItem("smobile"));
    setSdob(localStorage.getItem("sdob"));
    setSemail(localStorage.getItem("semail"));
    setSid(localStorage.getItem("sid"));
  }, []);
  return (
    <div class="container student-table">
      <form className="form">
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
                  onChange={(event) => setSname(event.target.value)}
                  value={sname}
                  className="form-control"
                  required="required"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Gender</label>
                <input
                  onChange={(event) => setSgender(event.target.value)}
                  value={sgender}
                  className="form-control"
                  required="required"
                  placeholder="Enter Your Gender"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Mobile No</label>
                <input
                  onChange={(event) => setSmobile(event.target.value)}
                  value={smobile}
                  className="form-control"
                  required="required"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Date Of birth</label>
                <input
                  onChange={(event) => setSdob(event.target.value)}
                  value={sdob}
                  className="form-control"
                  required="required"
                  placeholder="Enter Your DOB"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Email ID</label>
                <input
                  onChange={(event) => setSemail(event.target.value)}
                  value={semail}
                  className="form-control"
                  required="required"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <button
                  className="btn btn-large btn-primary"
                  onClick={updateStudent}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update_student;
