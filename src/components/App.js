import React from 'react'
import { Link, HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
import '../styles/App.css';

const EmployeeDetails = () => {
  //Complete this function
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/:id/:name/:designation" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
