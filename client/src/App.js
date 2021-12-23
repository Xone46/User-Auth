import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from './layout/Home/Home';
import {Signin} from './layout/Signin/Signin';
import {Signup} from './layout/Signup/Signup';
import { Dashboard } from './layout/Dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
