import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class AdminCreatureTable extends Component {
  render() {
    return (
      <SimpleTable
        headers={["Creature", "Id", "Name", "HP", ""]}
        rows={this.props.creatures.map((c) => {
          return {
            id: c.id,
            data: [
              c.creatureName,
              c.id,
              c.name,
              c.hp,
              <button onClick={() => this.props.onCreatureDelete(c.id)}>
                Delete
              </button>,
            ],
          };
        })}
      />
    );
  }
}

export default AdminCreatureTable;
