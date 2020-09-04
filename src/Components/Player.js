import React, { useState } from "react";

import "./Unit.css";
import Unit from "./Unit";

import "./Player.css";

const selectedBorderStyle = "2px solid #cfcf04";
const defaultBorderStyle = "2px solid black";

function Player(props) {
  const playerColor = props.playerColor;
  const [units, setUnits] = useState(props.units);

  const livingUnits = (units) => {
    let livingUnitsArray = [];
    units.forEach((unit) => {
      if (unit.isAlive) {
        livingUnitsArray.push(unit);
      }
    });
    return livingUnitsArray;
  };

  function getSelectedUnitId() {
    let id;
    units.forEach((unit) => {
      if (unit.isSelected === true) {
        id = unit.id;
      }
    });
    return id;
  }

  function handleUnitsUpdate(newSelectedUnit) {
    const prevSelectedUnit = getSelectedUnitId();
    const newUnitsArray = units.slice();

    // Check if there is a unit currently selected (otherwise it will be undefined)
    if (prevSelectedUnit !== undefined) {
      // Check if unit is already selected (if so, deselect)
      if (prevSelectedUnit == newSelectedUnit.id) {
        newUnitsArray[prevSelectedUnit].isSelected = false;
        newUnitsArray[prevSelectedUnit].borderStyle = defaultBorderStyle;
      } else {
        // Loop through units array
        newUnitsArray.forEach((unit) => {
          // eslint-disable-next-line
          if (newSelectedUnit.id == unit.id) {
            unit.isSelected = true;
          } else {
            unit.isSelected = false;
          }
        });
      }
    } else {
      // No currently selected unit. This is the first unit selection this turn.
      newUnitsArray[newSelectedUnit.id].isSelected = true;
      newUnitsArray[newSelectedUnit.id].borderStyle = selectedBorderStyle;
    }

    setUnits(newUnitsArray);
  }

  return (
    <div>
      {livingUnits(units).map((unit, i) => (
        <Unit
          key={i}
          id={i}
          className={"unit " + props.playerName}
          player={props.playerName}
          updateSelectedUnit={handleUnitsUpdate}
          posX={unit.posX}
          posY={unit.posY}
          color={playerColor}
          isPlayersTurn={props.isPlayersTurn}
          isSelected={unit.isSelected}
        />
      ))}
    </div>
  );
}

export default Player;
