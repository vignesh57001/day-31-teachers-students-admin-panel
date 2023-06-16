import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

function View_student() {
  // const params = useParams();

  const [studentsData, setStudentsData] = useState([]);

  const getStudentsData = async () => {
    const response = await axios.get(
      "https://635914fdc27556d2894b2f63.mockapi.io/api/user"
    );
    setStudentsData(response.data);
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://www.freeiconspng.com/uploads/school-student-icon-18.png"
            alt="student-logo"
          />
        </div>
        <div className="col-lg-8">
          {studentsData.map((data) => (
            <div key={data.sid}>
              <div className="col-lg-6"> Id : {data.sid}</div>
              <br />
              <div className="col-lg-6"> Name : {data.sname}</div>
              <br />
              <div className="col-lg-6"> Gender : {data.sgender}</div>
              <br />
              <div className="col-lg-6"> Mobile No : {data.smobile}</div>
              <br />
              <div className="col-lg-6"> DOB : {data.sdob}</div>
              <br />
              <div className="col-lg-6">Email ID : {data.semail}</div>
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View_student;
