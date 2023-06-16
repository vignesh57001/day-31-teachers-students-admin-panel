import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

function View_teacher() {
  // const params = useParams();

  const [teachersData, setTeachersData] = useState([]);

  const getTeachersData = async () => {
    const response = await axios.get(
      "https://635914fdc27556d2894b2f63.mockapi.io/api/user"
    );
    setTeachersData(response.data);
  };

  useEffect(() => {
    getTeachersData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://cdn.vectorstock.com/i/preview-1x/50/63/logo-teacher-mascot-cartoon-style-vector-46355063.jpg"
            alt="teacher-logo"
          />
        </div>
        <div className="col-lg-8">
          {teachersData.map((data) => (
            <div key={data.tid}>
              <div className="col-lg-6"> Id : {data.tid}</div>
              <br />
              <div className="col-lg-6"> Name : {data.tname}</div>
              <br />
              <div className="col-lg-6"> Gender : {data.tgender}</div>
              <br />
              <div className="col-lg-6"> Mobile No : {data.tmobile}</div>
              <br />
              <div className="col-lg-6"> DOB : {data.tdob}</div>
              <br />
              <div className="col-lg-6">
                Subject Speciality : {data.tsubject}
              </div>
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

export default View_teacher;
