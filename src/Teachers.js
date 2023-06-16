import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "./URL";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateTeacher = ({ tname, tgender, tmobile, tdob, tsubject, id }) => {
    localStorage.setItem("tname", tname);
    localStorage.setItem("tgender", tgender);
    localStorage.setItem("tmobile", tmobile);
    localStorage.setItem("tdob", tdob);
    localStorage.setItem("tsubject", tsubject);
    localStorage.setItem("id", id);
    navigate("/update-teacher");
  };

  const deleteTeacher = async (id) => {
    await axios.delete(API_URL + id);
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const teachers = await axios.get(
        "https://635914fdc27556d2894b2f63.mockapi.io/api/user"
      );
      console.log(teachers);
      setTeachers(teachers.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div className="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Teachers Dashboard</h1>
        <Link
          to={"/create-teacher"}
          class="d-none d-sm-inline-block btn btn-large btn-dark shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Teachers +
        </Link>
      </div>

      {loading ? (
        <span>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5de851eb06aada72d9fb9292/1582234569788-HYHZ8ENUQEZRP0YBCSY0/chester-purple.gif"
            alt="loading"
          />
        </span>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Teachers Data</h6>
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
                    <th>Subject</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => {
                    return (
                      <tr>
                        <td>{teacher.id}</td>
                        <td>{teacher.tname}</td>
                        <td>{teacher.tgender}</td>
                        <td>{teacher.tmobile}</td>
                        <td>{teacher.tdob}</td>
                        <td>{teacher.tsubject}</td>
                        <td>
                          <Link
                            to={`/teachers/${teacher.id}`}
                            className="btn btn-warning"
                          >
                            View
                          </Link>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => updateTeacher(teacher)}
                            className="btn btn-info"
                          >
                            Update
                          </button>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => deleteTeacher(teacher.id)}
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

export default Teachers;
