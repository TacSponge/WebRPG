import React, { Component } from "react";

class FightPanel extends Component {
  state = { creature: { name: "Goblin", HP: 10 } };

  onAttack = () => {
    const creature = { ...this.state.creature };
    creature.HP = this.state.creature.HP - 1;
    console.log(creature);
    console.log(this.state);
    this.setState({ creature });
  };

  render() {
    return (
      <div>
        <h1>You are fighting a {this.state.creature.name}</h1>
        <p> The creature has {this.state.creature.HP} HP</p>
        <p>Click the button to attack</p>
        <button onClick={this.onAttack}>Attack!</button>
      </div>
    );
  }
}

export default FightPanel;
