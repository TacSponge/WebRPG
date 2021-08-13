import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class Inventory extends Component {
  state = {
    items: [],
  };

  weaponSelectHandler = (id) => {
    let weapon = this.state.items.find((w) => w.id === id);
    console.log(weapon);
    this.props.onWeaponSelect(weapon);
  };

  render() {
    let { items } = this.props;
    return (
      <div>
        <h2>Inventory</h2>
        <SimpleTable
          headers={["Name", "Damage", ""]}
          rows={items.map((i) => {
            return {
              id: i.id,
              data: [
                i.name,
                i.damage,
                <button onClick={() => this.props.onWeaponSelect(i.id)}>
                  Equip
                </button>,
              ],
            };
          })}
        />
      </div>
    );
  }
}

export default Inventory;
