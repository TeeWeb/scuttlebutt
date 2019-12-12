import React from "react";
import "./Unit.css";

export default class Unit extends React.Component {
  state = {
    id: this.props.id,
    player: this.props.player,
    isPlayersTurn: this.props.isPlayersTurn,
    isSelected: this.props.isSelected,
    styles: {
      left: this.props.posX,
      top: this.props.posY
    },
    color: this.props.color
  };

  setClasses = () => {
    let classes = "unit " + this.state.player;
    if (this.state.isSelected) {
      classes += " selected";
    }
    return classes;
  };

  selectUnit = e => {
    if (this.state.isPlayersTurn) {
      console.log("It's my turn...");
      this.props.updateSelectedUnit(e.target);
      this.setState({ isSelected: true });
      return true;
    } else {
      console.log("Not my turn...");
      return false;
    }
  };

  componentDidMount() {
    let updatedStyle = { ...this.state.styles };

    if (!this.state.isSelected) {
      // set unit background to player's color if not selected
      updatedStyle.background = this.state.color;
      console.log(updatedStyle);
      this.setState({ styles: updatedStyle });
    }
  }

  render() {
    const classes = this.setClasses();
    const styles = this.state.styles;
    return (
      <div
        className={classes}
        id={this.state.id}
        player={this.state.player}
        role="button"
        onClick={this.selectUnit}
        style={styles}
      ></div>
    );
  }
}
