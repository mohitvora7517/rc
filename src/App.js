import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message='This is amazing'/>
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
