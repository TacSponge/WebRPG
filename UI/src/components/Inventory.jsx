import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class Inventory extends Component {
  state = {
    items: [],
  };

  weaponSelectHandler = (id) => {};

  render() {
    let { items } = this.props;
    return (
      <div>
        <h2>Inventory</h2>
        <SimpleTable
          headers={["Name", "Damage", "", ""]}
          rows={items.map((i) => {
            return {
              id: i.id,
              data: [
                i.name,
                i.damage,
                <button onClick={() => this.props.onWeaponSelect(i.id)}>
                  Equip
                </button>,
                <button onClick={() => this.props.onWeaponToss(i.id)}>
                  Toss
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
