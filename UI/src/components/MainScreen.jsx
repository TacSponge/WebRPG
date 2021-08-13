import React, { Component } from "react";
import FightPanel from "./FightPanel";
import StatsPanel from "./StatsPanel";
import Inventory from "./Inventory";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCreature: { name: "", HP: 0 },
      slainCreatures: [],
    };
  }

  attackHandler = () => {
    let currentCreature = { ...this.state.currentCreature };
    currentCreature.HP = currentCreature.HP - 1;
    if (currentCreature.HP <= 0) {
      this.onSlay(currentCreature.id, this.state);
    } else {
      this.setState({ currentCreature });
    }
  };

  onSlay = (id, state) => {
    this.updateSlayCount(id, state);
    this.loadRandomCreature();
  };

  updateSlayCount(id, state) {
    let slainCreatures = [...state.slainCreatures];
    let s = slainCreatures.find((c) => c.creatureId === id);
    s.count++;

    const url = "http://localhost:14396/api/slaycount/" + id;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s.count),
    };
    fetch(url, requestOptions);
    this.setState({ slainCreatures });
  }

  loadSlayCount() {
    const url = "http://localhost:14396/api/slaycount";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ slainCreatures: [...data] }));
  }

  loadRandomCreature() {
    const url = "http://localhost:14396/api/creatures/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          currentCreature: { ...data, HP: data.hp },
        })
      );
  }

  render() {
    return (
      <div>
        <FightPanel
          creature={this.state.currentCreature}
          onAttack={this.attackHandler}
        />
        <Inventory />
        <StatsPanel creatures={this.state.slainCreatures} />
      </div>
    );
  }

  componentDidMount() {
    this.loadRandomCreature();
    this.loadSlayCount();
  }
}

export default MainScreen;
