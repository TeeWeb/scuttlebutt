import * as React from "react";
import "./Map.css";

import Player from "./Player";

const Map = () => {
  const players = [
    {
      id: 1,
      name: "Player1",
      units: [
        { posX: 0, posY: 0, isSelected: false },
        { posX: 90, posY: 90, isSelected: false }
      ],
      playerColor: "#0000ee"
    },
    {
      id: 2,
      name: "Player2",
      units: [
        { posX: 25, posY: 24, isSelected: false },
        { posX: 50, posY: 75, isSelected: false }
      ],
      playerColor: "#ee0000"
    }
  ];

  let handleClick = event => {
    console.log("absolute click location:", event.clientX, event.clientY);
    // Check if target is a unit
    if (event.target.className.includes("unit")) {
      // target is a unit
      console.log("selected a players unit: ", event.target);
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
