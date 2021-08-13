import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class Inventory extends Component {
  state = {
    items: [
      { id: 0, name: "axe", damage: 3 },
      { id: 1, name: "sword", damage: 6 },
      { id: 2, name: "fist", damage: 1 },
    ],
  };
  render() {
    let { items } = this.state;
    return (
      <SimpleTable
        headers={["Name", "Damage"]}
        rows={items.map((i) => {
          return { id: i.id, data: [i.name, i.damage] };
        })}
      />
    );
  }
}

export default Inventory;
