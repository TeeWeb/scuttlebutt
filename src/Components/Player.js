import React from "react";

import "./Unit.css";
import Unit from "./Unit";

import "./Player.css";

export default class Player extends React.Component {
  state = {
    units: this.props.units,
    mapDimensions: [0, 0],
    playerColor: this.props.playerColor,
    isPlayersTurn: this.props.isPlayersTurn,
    getSelectedUnitId: function() {
      let id;
      this.units.forEach(unit => {
        if (unit.isSelected === true) {
          id = unit.id;
        }
      });
      return id;
    }
  };

  updateSelectedUnit = selectedUnit => {
    console.log(selectedUnit);
    // Make sure it's player's turn. Player can only select their own units
    if (this.state.isPlayersTurn) {
      const newUnitsArray = this.state.units.slice();
      newUnitsArray.forEach(unit => {
        // eslint-disable-next-line
        if (selectedUnit.id == unit.id) {
          unit.isSelected = true;
          return true;
        } else {
          unit.isSelected = false;
          return true;
        }
      });
      this.setState({ units: newUnitsArray });
    } else {
      return false;
    }
  };

  componentDidMount() {
    // TODO: refactor map dimension/state to Map.js
    const map = document.getElementById("map");
    this.setState({
      mapDimensions: [map.clientWidth, map.clientHeight]
    });
  }

  render() {
    const classes = "player " + this.props.name;
    const livingUnits = this.state.units.map((unit, i) => {
      if (unit.isAlive) {
        return (
          <Unit
            key={i}
            id={i}
            player={this.props.name}
            info={unit}
            isSelected={unit.isSelected}
            updateSelectedUnit={this.updateSelectedUnit}
            posX={unit.posX}
            posY={unit.posY}
            color={this.state.playerColor}
            isPlayersTurn={this.state.isPlayersTurn}
          />
        );
      } else {
        return false;
      }
    });

    return <div className={classes}>{livingUnits}</div>;
  }
}
