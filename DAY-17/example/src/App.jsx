import React from "react";
import "./App.css";
import Calorietemplete from "./components/Calorietemplete";
function App() {
  return (
    <div className="maincontainer">
      <div className="App">
        <Calorietemplete mainheading="pizza" cals="90" />
        <Calorietemplete mainheading="Burger" cals="69" />
        <Calorietemplete mainheading="coke" cals="500" />
        <Calorietemplete mainheading="Browne" cals="180" />
        <Calorietemplete mainheading="Fried Rice" cals="90" />
        <Calorietemplete mainheading="Lassania" cals="200" />
        <Calorietemplete mainheading="Pani Puri" cals="10" />
      </div>
    </div>
  );
}

export default App;
