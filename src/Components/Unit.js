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
    if (props.isPlayersTurn) {
      props.updateSelectedUnit(target);
    } else {
      return;
    }
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
