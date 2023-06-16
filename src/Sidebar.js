import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Vigneshwar</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link to={"/dashboard"} class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Details</div>

      <li class="nav-item active">
        <Link to={"/students"} class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Students</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to={"/teachers"} class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Teachers</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
