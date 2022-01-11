import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
