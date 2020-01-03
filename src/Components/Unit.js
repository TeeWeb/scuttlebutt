import React from "react";
import "./Unit.css";

export default class Unit extends React.Component {
  state = {
    id: this.props.id,
    player: this.props.player,
    isPlayersTurn: this.props.isPlayersTurn,
    isSelected: this.props.isSelected,
    classes: this.props.className,
    posX: this.props.posX,
    posY: this.props.posY,
    styles: {
      backgroundColor: this.props.color
    }
  };

  getMap = () => {
    return document.getElementById("map");
  };

  calcXCoord = x => {
    const map = this.getMap();
    let scaledX = (map.clientWidth / 1000) * x;
    return scaledX;
  };

  calcYCoord = y => {
    const map = this.getMap();
    let scaledY = (map.clientHeight / 1000) * y;
    return scaledY;
  };

  setClasses = () => {
    let classes = "unit " + this.state.player;
    if (this.state.isSelected) {
      classes += " selected";
    }
    console.log(this.state.isSelected, classes);
    return classes;
  };

  handleSelect = e => {
    if (this.state.isPlayersTurn) {
      console.log("It's my turn...");
      this.props.updateSelectedUnit(e.target);
    } else {
      console.log("Not my turn...");
    }
  };

  componentDidMount() {
    let updatedStyle = { ...this.state.styles };
    if (!this.state.isSelected) {
      // set unit background to player's color if not selected
      updatedStyle.background = this.state.color;
      updatedStyle.left = this.calcXCoord(this.state.posX);
      updatedStyle.top = this.calcYCoord(this.state.posY);
      this.setState({ styles: updatedStyle });
    }
  }

  componentDidUpdate() {
    console.log(this.state.player, this.state.id, this.props.isSelected);
    if (this.props.isSelected) {
      console.log("Unit component updated and isSelected = true");
    }
  }

  render() {
    const styles = this.state.styles;
    return (
      <div
        className={this.props.className}
        id={this.state.id}
        player={this.state.player}
        role="button"
        onClick={this.handleSelect}
        style={styles}
      ></div>
    );
  }
}
