import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateStudent = ({ sname, sgender, smobile, sdob, semail, sid }) => {
    localStorage.setItem("sname", sname);
    localStorage.setItem("sgender", sgender);
    localStorage.setItem("smobile", smobile);
    localStorage.setItem("sdob", sdob);
    localStorage.setItem("semail", semail);
    localStorage.setItem("sid", sid);
    navigate("/update-student");
  };

  const deleteStudent = async (id) => {
    await axios.delete(API_URL + id);
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const students = await axios.get(
        "https://635914fdc27556d2894b2f63.mockapi.io/api/user"
      );
      console.log(students);
      setStudents(students.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div className="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Students Dashboard</h1>
        <Link
          to={"/create-student"}
          class="d-none d-sm-inline-block btn btn-large btn-dark shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Students +
        </Link>
      </div>

      {loading ? (
        <span>
          <img
            src="https://cdn.dribbble.com/users/306010/screenshots/2146801/loader.gif"
            alt="loading"
          />
        </span>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Students Data</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobile No</th>
                    <th>DOB</th>
                    <th>Email ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    return (
                      <tr>
                        <td>{student.id}</td>
                        <td>{student.sname}</td>
                        <td>{student.sgender}</td>
                        <td>{student.smobile}</td>
                        <td>{student.sdob}</td>
                        <td>{student.semail}</td>
                        <td>
                          <Link
                            to={`/students/${student.id}`}
                            className="btn btn-warning"
                          >
                            View
                          </Link>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => updateStudent(student)}
                            className="btn btn-info"
                          >
                            Update
                          </button>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => deleteStudent(student.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;
