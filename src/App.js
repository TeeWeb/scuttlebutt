import React from "react";
import "./App.css";

import Map from "./Components/Map";
import CPanel from "./Components/CPanel";

function App() {
  const game = {
    players: [
      {
        id: 1,
        name: "Player1",
        units: [
          { id: 0, posX: 0, posY: 0, isSelected: false },
          { id: 1, posX: 90, posY: 90, isSelected: false }
        ],
        playerColor: "#0000ee",
        isActive: true
      },
      {
        id: 2,
        name: "Player2",
        units: [
          { id: 0, posX: 25, posY: 24, isSelected: false },
          { id: 1, posX: 50, posY: 75, isSelected: false }
        ],
        playerColor: "#ee0000",
        isActive: false
      }
    ],
    activePlayerId: 1,
    currentTurn: 0
  };

  const getPlayerName = id => {
    game.players.forEach(player => {
      if (id === player.id) {
        console.log(player.name);
        return player.name;
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header" id="appHeader">
        <h4>Scuttlebutt</h4>
      </header>
      <Map players={game.players} activePlayer={game.activePlayer} />
      <CPanel
        playerName={getPlayerName(game.activePlayerId)}
        turn={game.currentTurn}
      />
    </div>
  );
}

export default App;
