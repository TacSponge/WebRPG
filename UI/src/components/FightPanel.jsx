import React, { Component } from "react";

class FightPanel extends Component {
  creatureOptions = [
    { name: "Goblin", HP: 10 },
    { name: "Kobold", HP: 15 },
    { name: "Dragon", HP: 50 },
  ];

  onAttack = () => {
    let creature = { ...this.state.creature };
    creature.HP = this.state.creature.HP - 1;
    console.log(creature);
    console.log(this.state);
    if (creature.HP <= 0) {
      let index = Math.floor(Math.random() * this.creatureOptions.length);
      creature = { ...this.creatureOptions[index] };
      this.props.onSlay();
    }
    this.setState({ creature });
  };

  render() {
    return (
      <div>
        <h1>You are fighting a {this.props.creature.name}</h1>
        <p> The creature has {this.props.creature.HP} HP</p>
        <p>Click the button to attack</p>
        <button onClick={this.props.onAttack}>Attack!</button>
      </div>
    );
  }
}

export default FightPanel;
