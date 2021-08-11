import React, { Component } from "react";
import FightPanel from "./FightPanel";
import StatsPanel from "./StatsPanel";

class MainScreen extends Component {
  render() {
    return (
      <div>
        <FightPanel />
        <StatsPanel />
      </div>
    );
  }
}

export default MainScreen;
