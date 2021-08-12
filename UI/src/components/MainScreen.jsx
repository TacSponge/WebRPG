import React, { Component } from "react";
import FightPanel from "./FightPanel";
import StatsPanel from "./StatsPanel";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCreature: { name: "Goblin", HP: 1 },
      slainCreatures: [],
    };
  }

  creatureOptions = [
    { name: "Goblin", HP: 1 },
    { name: "Kobold", HP: 1 },
    { name: "Dragon", HP: 1 },
  ];

  attackHandler = () => {
    let currentCreature = { ...this.state.currentCreature };
    currentCreature.HP = currentCreature.HP - 1;
    if (currentCreature.HP <= 0) {
      this.onSlay(currentCreature, this.state);
    } else {
      this.setState({ currentCreature });
    }
  };

  onSlay = (creature, state) => {
    let slainCreatures = [...state.slainCreatures];
    const index = slainCreatures.findIndex((c) => c.name === creature.name);

    slainCreatures[index] = { ...slainCreatures[index] };
    if (index >= 0) {
      slainCreatures[index].count++;
    } else {
      slainCreatures = [{ name: creature.name, count: 1 }, ...slainCreatures];
    }

    let randomIndex = Math.floor(Math.random() * this.creatureOptions.length);
    const currentCreature = { ...this.creatureOptions[randomIndex] };

    this.setState({ slainCreatures: [...slainCreatures], currentCreature });
  };

  render() {
    return (
      <div>
        <FightPanel
          creature={this.state.currentCreature}
          onAttack={this.attackHandler}
        />
        <StatsPanel creatures={this.state.slainCreatures} />
      </div>
    );
  }

  componentDidMount() {
    const url = "http://localhost:14396/api/creatures";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ currentCreature: { name: data.name, HP: data.hp } })
      );
  }
}

export default MainScreen;
