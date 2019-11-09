import React from "react";
import Unit from "./Unit";
import "./Player.css";

export default class Player extends React.Component {
  state = {
    selectedUnitId: {},
    handleUnitSelection: this.props.handleUnitSelection,
    units: this.props.units,
    mapDimensions: [0, 0],
    playerColor: this.props.playerColor
  };

  updateSelectedUnit = unit => {
    console.log("updating selectedUnit:", this.props.name, unit);
    this.setState({ selectedUnitId: unit });
  };

  // getUnits = () => {
  //   let isSelected = false;
  //   return this.state.units.map((unit, i) => {
  //     if (i === this.state.selectedUnit) {
  //       isSelected = true;
  //     }
  //     return (
  //       <Unit
  //         key={i}
  //         id={i}
  //         player={this.props.name}
  //         info={unit}
  //         isSelected={isSelected}
  //         selectUnit={this.updateSelectedUnit}
  //       />
  //     );
  //   });
  // };

  componentDidMount() {
    let map = document.getElementById("map");
    this.setState({ mapDimensions: [map.clientWidth, map.clientHeight] });
  }

  render() {
    const units = this.state.units.map((unit, i) => {
      let scaledX = unit.posX / 100;
      let scaledY = unit.posY / 100;
      // console.log(
      //   this.props.name,
      //   i,
      //   typeof this.state.mapDimensions[0],
      //   scaledX,
      //   typeof this.state.mapDimensions[1],
      //   scaledY
      // );

      return (
        <Unit
          key={i}
          id={i}
          player={this.props.name}
          playerColor={this.state.playerColor}
          posX={scaledX * this.state.mapDimensions[0]}
          posY={scaledY * this.state.mapDimensions[1]}
          isSelected={unit.isSelected}
          updateSelectedUnit={this.updateSelectedUnit}
        />
      );
    });
    const classes = "player " + this.props.name;

    return <div className={classes}>{units}</div>;
  }
}
