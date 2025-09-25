import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#f4f4f4" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Dashboard</Link>
        <Link to="/courses" style={{ marginRight: "15px" }}>Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
