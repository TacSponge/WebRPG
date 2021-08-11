import React, { Component } from "react";

class StatsPanel extends Component {
  state = {
    creatures: [
      { name: "Goblin", count: 3 },
      { name: "Kobold", count: 5 },
      { name: "Dragon", count: 1 },
    ],
  };
  render() {
    return (
      <div>
        <table>
          <th>Creature</th>
          <th>Number Slain</th>
          {this.state.creatures.map((c) => (
            <tr>
              <td>{c.name}</td>
              <td>{c.count}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default StatsPanel;
