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
              <tr key={c.name}>
                <td>{c.name}</td>
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
