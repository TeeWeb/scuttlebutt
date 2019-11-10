import React from "react";
import "./Unit.css";

let Unit = ({
  id,
  player,
  posX,
  posY,
  isSelected,
  updateSelectedUnit,
  playerColor
}) => {
  let classes = ["unit", player];
  let style = {
    left: posX,
    top: posY,
    background: playerColor
  };

  if (isSelected) {
    classes.push("selected");
    style.background = "#00eeee";
  }

  let selectUnit = e => {
    console.log("selectUnit called", e.target.id, typeof e.target.id);
    updateSelectedUnit(e.target.id);
    isSelected = true;
  };

  return (
    <div
      className={"unit " + player}
      id={id}
      role="button"
      onClick={selectUnit}
      style={style}
    ></div>
  );
};

export default Unit;
