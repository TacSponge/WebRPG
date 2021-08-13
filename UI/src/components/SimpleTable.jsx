import React, { Component } from "react";

class StatsPanel extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.headers.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
            {this.props.rows.map((row) => (
              <tr key={row.id}>
                {row.data.map((col) => (
                  <td>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatsPanel;
