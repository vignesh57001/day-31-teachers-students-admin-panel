import React, { useEffect, useState } from "react";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update_teacher() {
  const [tname, setTname] = useState("");
  const [tgender, setTgender] = useState("");
  const [tmobile, setTmobile] = useState("");
  const [tdob, setTdob] = useState("");
  const [tsubject, setTsubject] = useState("");
  const [tid, setTid] = useState("");
  const navigate = useNavigate();

  const updateTeacher = async () => {
    try {
      await axios.put(API_URL + tid, {
        tname,
        tgender,
        tmobile,
        tdob,
        tsubject,
      });
      navigate("/teachers");
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    setTname(localStorage.getItem("tname"));
    setTgender(localStorage.getItem("tgender"));
    setTmobile(localStorage.getItem("tmobile"));
    setTdob(localStorage.getItem("tdob"));
    setTsubject(localStorage.getItem("tsubject"));
    setTid(localStorage.getItem("tid"));
  }, []);
  return (
    <div class="container teacher-table">
      <form className="form">
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
                  onChange={(event) => setTname(event.target.value)}
                  value={tname}
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Gender</label>
                <input
                  onChange={(event) => setTgender(event.target.value)}
                  value={tgender}
                  className="form-control"
                  placeholder="Enter Your Gender"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Mobile No</label>
                <input
                  onChange={(event) => setTmobile(event.target.value)}
                  value={tmobile}
                  className="form-control"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Date Of birth</label>
                <input
                  onChange={(event) => setTdob(event.target.value)}
                  value={tdob}
                  className="form-control"
                  placeholder="Enter Your DOB"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-group">
                <label>Subject Speciality</label>
                <input
                  onChange={(event) => setTsubject(event.target.value)}
                  value={tsubject}
                  className="form-control"
                  placeholder="Enter Your Favorite Subject"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <button
                  className="btn btn-large btn-primary"
                  onClick={updateTeacher}
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

export default Update_teacher;
