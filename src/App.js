import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivatedRoute } from "./context/PrivatedRoute";
import { FormRoute } from "./feature/form/form";
import { AuthProvider } from './context/AuthContext'
import MenuBar from "./components/navbar";
import FormHistory from "./feature/form-history/form-history";
import FormControl from "./feature/form-control/form-control";
import UserControl from "./feature/user-control/user-control";

function App() {
  return (
      <AuthProvider><BrowserRouter>
      <MenuBar />
      
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route element={<PrivatedRoute />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/form/:id" element={<FormRoute />} />
          <Route exact path="/history" element={<FormHistory />} />
          <Route exact path="/forms" element={<FormControl />} />
          <Route exact path="/users" element={<UserControl />} />
        </Route>
      </Routes></BrowserRouter>
      </AuthProvider>
  );
}

export default App;
