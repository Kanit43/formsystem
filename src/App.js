import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivatedRoute } from "./context/PrivatedRoute";
import { FormRoute } from "./feature/form/form";

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route element={<PrivatedRoute />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/form/:id" element={<FormRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
