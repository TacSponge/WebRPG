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
    let { items } = this.state;
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
                <button onClick={() => this.weaponSelectHandler(i.id)}>
                  Equip
                </button>,
              ],
            };
          })}
        />
      </div>
    );
  }

  componentDidMount() {
    let url = "http://localhost:14396/api/inventory";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          items: [...data],
        })
      );
  }
}

export default Inventory;
