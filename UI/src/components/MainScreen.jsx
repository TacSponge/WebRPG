import React, { Component } from "react";
import FightPanel from "./FightPanel";
import StatsPanel from "./StatsPanel";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCreature: { name: "Goblin", HP: 1 },
      slainCreatures: [
        { name: "Goblin", count: 0 },
        { name: "Kobold", count: 0 },
        { name: "Dragon", count: 0 },
      ],
    };
  }

  creatureOptions = [
    { name: "Goblin", HP: 10 },
    { name: "Kobold", HP: 15 },
    { name: "Dragon", HP: 45 },
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
    slainCreatures[index].count++;

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
