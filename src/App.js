import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Signup from './components/signup'
import { AuthProvider } from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <div className="container mt-5">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </AuthProvider>
  )
}

export default App;
