import React from "react";
import "./CPanel.css";

let CPanel = ({ playerName, turn }) => {
  console.log(playerName);

  return (
    <div className="cpanel">
      <div className="cpanel-title">CONTROL PANEL</div>
      <div className="cpanel-info">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className="active-player-name">{playerName}'s turn</div>
        <div className="turn-counter">Turn: {turn}</div>
      </div>
    </div>
  );
};

export default CPanel;
