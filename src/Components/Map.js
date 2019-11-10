import * as React from "react";
import "./Map.css";

import Player from "./Player";

const Map = ({ players, activePlayer }) => {
  let handleClick = event => {
    console.log("absolute click location:", event.clientX, event.clientY);
    // Check if target is a unit
    if (event.target.className.includes("unit")) {
      // target is a unit
      if (event.target.player === activePlayer) {
        // target is activePlayer's unit
        console.log("selected " + activePlayer + "'s unit");
      } else {
        // target is not activePlayer's unit
        console.log("selected opposing player's unit");
      }
    } else {
      // target is not a unit
      console.log("did not select a unit...");
    }
    return;
  };

  const playerElements = players.map((player, i) => {
    return (
      <Player
        key={i}
        id={player.id}
        name={player.name}
        playerColor={player.playerColor}
        units={player.units}
      />
    );
  });

  return (
    <div id="map" className="map" onClick={handleClick}>
      {playerElements}
    </div>
  );
};

export default Map;
