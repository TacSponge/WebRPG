import React, { Component } from "react";

class StatsPanel extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Creature</th>
              <th>Number Slain</th>
            </tr>
            {this.props.creatures.map((c) => (
              <tr key={c.creatureId}>
                <td>{c.creatureName}</td>
                <td>{c.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsPanel;
