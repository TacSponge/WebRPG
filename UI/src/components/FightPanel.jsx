import React, { Component } from "react";

class FightPanel extends Component {
  render() {
    return (
      <div>
        <h1>You are fighting a {this.props.creature.name}</h1>
        {this.props.currentWeapon != undefined && (
          <p>You are weilding a(n) {this.props.currentWeapon.name}.</p>
        )}
        <p> The creature has {this.props.creature.HP} HP</p>
        <p>Click the button to attack</p>
        <button onClick={this.props.onAttack}>Attack!</button>
      </div>
    );
  }
}

export default FightPanel;
