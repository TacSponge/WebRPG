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
    this.updateSlayCount(state, creature);
    this.loadRandomCreature();
  };

  updateSlayCount(state, creature) {
    console.log("update slay");
    let slainCreatures = [...state.slainCreatures];
    const index = slainCreatures.findIndex((c) => c.name === creature.name);

    slainCreatures[index] = { ...slainCreatures[index] };
    console.log("Slay index:" + index);
    if (index >= 0) {
      slainCreatures[index].count++;
    } else {
      var newCreature = { name: creature.name, count: 1 };
      slainCreatures = [newCreature, ...slainCreatures];
      this.AddSlainCreature(newCreature);
    }

    this.setState({ slainCreatures });
  }

  AddSlainCreature(newCreature) {
    const url = "http://localhost:14396/api/slaycount";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newCreature }),
    };
    fetch(url, requestOptions);
  }

  loadRandomCreature() {
    const url = "http://localhost:14396/api/creatures";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ currentCreature: { name: data.name, HP: data.hp } })
      );
  }

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
    this.loadRandomCreature();
  }
}

export default MainScreen;
