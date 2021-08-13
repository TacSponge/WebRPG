import React, { Component } from "react";

class StatsPanel extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.headers.map((header, id) => (
                <th key={id}>{header}</th>
              ))}
            </tr>
            {this.props.rows.map((row) => (
              <tr key={row.id}>
                {row.data.map((col, id) => (
                  <td key={id}>{col}</td>
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
