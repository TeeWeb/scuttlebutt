import React, { useState } from "react";
import "./Unit.css";

function Unit(props) {
  const [classes, setClasses] = useState("unit " + props.player);
  const [styles, setStyles] = useState({
    left: props.posX,
    top: props.posY,
    backgroundColor: props.color,
  });

  function handleSelect(target) {
    console.log(target);
    if (props.isPlayersTurn) {
      console.log("It's my turn...");
      props.updateSelectedUnit(target);
    } else {
      console.log("Not my turn...");
    }
    console.log(props.border);
  }

  return (
    <div
      className={props.isSelected ? "selected " + classes : classes}
      id={props.id}
      player={props.player}
      role="button"
      onClick={(e) => handleSelect(e.target)}
      style={styles}
    ></div>
  );
}

export default Unit;
