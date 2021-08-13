import React, { Component } from "react";
import SimpleTable from "./SimpleTable";

class StatsPanel extends Component {
  render() {
    let { creatures } = this.props;
    return (
      <div>
        <SimpleTable
          headers={["Creature", "Number Slain"]}
          rows={creatures.map((c) => {
            return { id: c.creatureId, data: [c.creatureName, c.count] };
          })}
        />
      </div>
    );
  }
}

export default StatsPanel;
