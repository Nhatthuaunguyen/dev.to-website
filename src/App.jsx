import React from "react";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
