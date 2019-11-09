import React from "react";
import "./App.css";

import Map from "./Components/Map";
import CPanel from "./Components/CPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="appHeader">
        <h4>Scuttlebutt</h4>
      </header>
      <Map />
      <CPanel />
    </div>
  );
}

export default App;
