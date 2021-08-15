import React, { Component } from "react";
import FightPanel from "./FightPanel";
import StatsPanel from "./StatsPanel";
import Inventory from "./Inventory";

class GamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCreature: { name: "", HP: 0 },
      slainCreatures: [],
      items: [],
    };
  }

  attackHandler = () => {
    let currentCreature = { ...this.state.currentCreature };
    currentCreature.HP = currentCreature.HP - this.state.currentWeapon.damage;
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

  weaponSelectHandler = (id) => {
    let currentWeapon = this.state.items.find((w) => w.id === id);
    this.setState({ currentWeapon });
  };

  weaponTossHandler = (id) => {
    let items = [...this.state.items].filter((i) => i.id !== id);
    this.setState({ items });

    let url = "http://localhost:14396/api/inventory/" + id;
    fetch(url, { method: "DELETE" });
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

  loadInventory() {
    let url = "http://localhost:14396/api/inventory";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          items: [...data],
        })
      );
  }

  render() {
    return (
      <div>
        <FightPanel
          creature={this.state.currentCreature}
          onAttack={this.attackHandler}
          currentWeapon={this.state.currentWeapon}
        />
        <Inventory
          onWeaponSelect={this.weaponSelectHandler}
          onWeaponToss={this.weaponTossHandler}
          items={this.state.items}
        />
        <StatsPanel creatures={this.state.slainCreatures} />
      </div>
    );
  }

  componentDidMount() {
    this.loadRandomCreature();
    this.loadSlayCount();
    this.loadInventory();
  }
}

export default GamePanel;
