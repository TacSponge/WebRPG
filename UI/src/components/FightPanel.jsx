import React, { Component } from "react";

class FightPanel extends Component {
  state = { creature: { name: "Goblin", HP: 10 } };
  render() {
    return (
      <div>
        <h1>You are fighting a {this.state.creature.name}</h1>
        <p>Click the button to attack</p>
        <button>Attack!</button>
      </div>
    );
  }
}

export default FightPanel;
