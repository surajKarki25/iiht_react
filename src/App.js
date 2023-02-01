import React, { useState } from "react";
import "./App.css";
import CircularProgressBar from "./components/CircularProgressBar";
import NavBar from "./components/NavBar";

import Data from "./components/Data";
import Footer from "./components/Footer";
function App() {
  const [average, setAverage] = useState(0);

  return (
    <div>
      <NavBar /><br></br><br></br>
      <CircularProgressBar percentage={average} />
      <br></br>
      <h3 style={{ textAlign: "center", color: "grey" }}>
        <em>This Progress Bar is showing the the Overall Air Quality Level</em>
        <br></br>
        <br></br>
      </h3>
      <hr></hr>
      <br></br>
      <Data setAverage={setAverage} />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
