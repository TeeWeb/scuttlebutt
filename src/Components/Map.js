import * as React from "react";
import "./Map.css";

import "./Player";
import Player from "./Player";

export default class Map extends React.Component {
  state = {
    currentPlayer: this.props.currentPlayer,
    players: this.props.players
  };

  handleClick = event => {
    console.log("Map click location:", event.clientX, event.clientY);
  };

  componentDidMount() {
    this.setState({
      currentPlayer: this.props.currentPlayer,
      players: this.props.players
    });
  }

  render() {
    const activePlayers = this.state.players.map((player, i) => {
      if (player.isAlive) {
        return (
          <Player
            key={i}
            id={player.id}
            name={player.name}
            playerColor={player.playerColor}
            isPlayersTurn={player.isPlayersTurn}
            units={player.units}
          />
        );
      } else {
        return false;
      }
    });
    return (
      <div id="map" className="map" onClick={this.handleClick}>
        {activePlayers}
      </div>
    );
  }
}
