import * as React from "react";
import "./Map.css";

import "./Player";
import Player from "./Player";

export default function Map(props) {
  function handleClick(event) {
    console.log("Map click location:", event.clientX, event.clientY);
  }

  const activePlayers = props.players.map((player, i) => {
    if (player.isAlive) {
      return (
        <Player
          key={i}
          id={player.id}
          name={player.name}
          playerColor={player.playerColor}
          isPlayersTurn={player.id === props.currentPlayer.id ? true : false}
          units={player.units}
        />
      );
    } else {
      return false;
    }
  });

  return (
    <div id="map" className="map" onClick={handleClick}>
      {activePlayers}
    </div>
  );
}
