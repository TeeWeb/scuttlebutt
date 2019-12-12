import React from "react";
import "./CPanel.css";

let CPanel = ({ playerName, turn }) => {
  console.log("CPanel -> playerName: " + playerName + "; turn #" + turn);

  return (
    <div className="cpanel">
      <div className="cpanel-title">CONTROL PANEL</div>
      <div className="cpanel-info">
        <div className="active-player-name">{playerName}s turn</div>
        <div className="turn-counter">Turn: {turn}</div>
      </div>
    </div>
  );
};

export default CPanel;
