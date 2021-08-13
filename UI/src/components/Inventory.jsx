import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class Inventory extends Component {
  state = {
    items: [],
  };
  render() {
    let { items } = this.state;
    return (
      <div>
        <h2>Inventory</h2>
        <SimpleTable
          headers={["Name", "Damage"]}
          rows={items.map((i) => {
            return { id: i.id, data: [i.name, i.damage] };
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
