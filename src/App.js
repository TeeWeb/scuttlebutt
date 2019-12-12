import React from "react";
import "./App.css";

import Map from "./Components/Map";
import CPanel from "./Components/CPanel";
// import Player from "./Components/Player";

function App() {
  const game = {
    players: [
      {
        id: 1,
        name: "Player1",
        units: [
          { id: 0, posX: 10, posY: 200, isSelected: false, isAlive: true },
          { id: 1, posX: 90, posY: 90, isSelected: false, isAlive: true },
          { id: 2, posX: 30, posY: 90, isSelected: false, isAlive: false }
        ],
        playerColor: "#0000ee",
        isPlayersTurn: true,
        isAlive: true
      },
      {
        id: 2,
        name: "Player2",
        units: [
          { id: 0, posX: 25, posY: 24, isSelected: false, isAlive: true },
          { id: 1, posX: 50, posY: 75, isSelected: false, isAlive: true }
        ],
        playerColor: "#ee0000",
        isPlayersTurn: false,
        isAlive: true
      }
    ],
    turn: {
      playerId: 1,
      number: 1
    }
  };

  let getCurrentPlayer = () => {
    let currentPlayer;
    game.players.forEach(player => {
      if (player.id === game.turn.playerId) {
        // console.log("current player:", player);
        currentPlayer = player;
      }
    });
    return currentPlayer;
  };

  let getPlayerName = id => {
    let name;
    game.players.forEach(player => {
      if (player.id === id) {
        name = player.name;
      }
    });
    return name;
  };

  return (
    <div className="App">
      <header className="App-header" id="appHeader">
        <h4>[title]</h4>
      </header>
      <Map
        players={game.players}
        currentPlayer={getCurrentPlayer(game.players)}
      />
      <CPanel
        playerName={getPlayerName(getCurrentPlayer().id)}
        turn={game.turn.number}
      />
    </div>
  );
}

export default App;
