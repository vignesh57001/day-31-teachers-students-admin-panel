import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome-free/css/all.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Teachers from "./Teachers";
import Create_teacher from "./Create_teacher";
import Update_teacher from "./Update_teacher";
import View_teacher from "./View_teacher";
import Create_student from "./Create_student";
import Update_student from "./Update_student";
import View_student from "./View_student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./Students";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Teachers />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/teachers" element={<Teachers />}></Route>
              <Route path="/students" element={<Students />}></Route>
              <Route
                path="/create-teacher"
                element={<Create_teacher />}
              ></Route>
              <Route
                path="/update-teacher"
                element={<Update_teacher />}
              ></Route>
              <Route path="/teachers/:tid" element={<View_teacher />}></Route>
              <Route
                path="/create-student"
                element={<Create_student />}
              ></Route>
              <Route
                path="/update-student"
                element={<Update_student />}
              ></Route>
              <Route path="/students/:sid" element={<View_student />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
