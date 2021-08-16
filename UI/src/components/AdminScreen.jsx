import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class AdminScreen extends Component {
  state = { creatures: [] };

  onCreatureDelete = (id) => {
    var creatures = [...this.state.creatures].filter((c) => c.id !== id);
    this.setState({ creatures });
    let url = "http://localhost:14396/api/creatures/" + id;
    fetch(url, { method: "DELETE" });
  };

  render() {
    return (
      <div>
        <h1>Admin Panel</h1>
        <SimpleTable
          headers={["Creature", "Id", "Name", "HP", ""]}
          rows={this.state.creatures.map((c) => {
            return {
              id: c.id,
              data: [
                c.creatureName,
                c.id,
                c.name,
                c.hp,
                <button onClick={() => this.onCreatureDelete(c.id)}>
                  Delete
                </button>,
              ],
            };
          })}
        />
      </div>
    );
  }
  componentDidMount() {
    const url = "http://localhost:14396/api/creatures/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ creatures: data }));
  }
}

export default AdminScreen;
