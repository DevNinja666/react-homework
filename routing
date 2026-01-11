// ======================= index.jsx =======================
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// ======================= App.jsx =======================
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="grades" element={<Grades />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}



// ======================= Layout.jsx =======================
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

export default function Layout() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">🏠 Главная</NavLink>
        <NavLink to="/subjects">📚 Предметы</NavLink>
        <NavLink to="/grades">📝 Оценки</NavLink>
        <NavLink to="/attendance">📅 Посещаемость</NavLink>
        <NavLink to="/profile">👤 Профиль</NavLink>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}



// ======================= pages/Home.jsx =======================
export default function Home() {
  return <h2>🏠 Добро пожаловать в MyStat</h2>;
}



// ======================= pages/Subjects.jsx =======================
export default function Subjects() {
  return <h2>📚 Мои предметы</h2>;
}



// ======================= pages/Grades.jsx =======================
export default function Grades() {
  return <h2>📝 Мои оценки</h2>;
}



// ======================= pages/Attendance.jsx =======================
export default function Attendance() {
  return <h2>📅 Посещаемость</h2>;
}



// ======================= pages/Profile.jsx =======================
export default function Profile() {
  return <h2>👤 Профиль ученика</h2>;
}



// ======================= nav.css =======================
.nav {
  display: flex;
  gap: 20px;
  background: #222;
  padding: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav a.active {
  color: gold;
  border-bottom: 2px solid gold;
}

.content {
  padding: 30px;
  font-size: 22px;
}
