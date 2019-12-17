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
    name: this.props.name,
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

  handleUnitsUpdate = newSelectedUnit => {
    // Make sure it's this player's turn. Player can only select their own units
    console.log(newSelectedUnit);

    // Initialize variables for the currently selected unit and a new unit array
    const prevSelectedUnit = this.state.getSelectedUnitId();
    const newUnitsArray = this.state.units.slice();
    console.log(prevSelectedUnit, newUnitsArray);

    // Check if there is a unit currently selected (otherwise it will be undefined)
    if (prevSelectedUnit) {
      // Loop through units array
      newUnitsArray.forEach(unit => {
        // eslint-disable-next-line
        if (newSelectedUnit.id == unit.id) {
          //
          console.log("FOUND SELECTED UNIT");
          unit.isSelected = true;
          unit.classes += " selected";
          console.log(unit.classes);
        } else {
          unit.isSelected = false;
          unit.classes = "unit " + this.name;
        }
      });
    } else {
      // No currently selected unit. This is the first unit selection this turn.
      console.log("First unit selection...", newSelectedUnit.id);
      newUnitsArray[newSelectedUnit.id].isSelected = true;
    }

    console.log(newUnitsArray);
    this.setState({ units: newUnitsArray });
  };

  componentDidMount() {
    // TODO: refactor map dimension/state to Map.js
    const map = document.getElementById("map");
    this.setState({
      mapDimensions: [map.clientWidth, map.clientHeight]
    });
  }

  componentDidUpdate() {
    console.log("Selected Unit ID: " + this.state.getSelectedUnitId());
    console.log(this.state.units);
  }

  render() {
    const classes = "player " + this.state.name;
    const livingUnits = this.state.units.map((unit, i) => {
      if (unit.isAlive) {
        let unitClass;
        if (this.state.getSelectedUnitId() === i) {
          unitClass = "unit " + this.state.name + " selected";
        } else {
          unitClass = "unit " + this.state.name;
        }
        console.log(unitClass);
        return (
          <Unit
            key={i}
            id={i}
            className={unitClass}
            player={this.props.name}
            info={unit}
            updateSelectedUnit={this.handleUnitsUpdate}
            posX={unit.posX}
            posY={unit.posY}
            color={this.state.playerColor}
            isPlayersTurn={this.state.isPlayersTurn}
            isSelected={unit.isSelected}
          />
        );
      } else {
        return false;
      }
    });

    return <div className={classes}>{livingUnits}</div>;
  }
}
