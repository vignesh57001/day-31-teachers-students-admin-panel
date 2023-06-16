import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">School Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-large btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
