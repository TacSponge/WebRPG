import React, { Component } from "react";
import GamePanel from "./GamePanel";
import TabNavigator from "./TabNavigator";

class MainScreen extends Component {
  state = { tabIndex: 0 };
  tabs = [0, 1];

  render() {
    return (
      <div>
        <TabNavigator tabs={this.tabs} />
        <GamePanel />
      </div>
    );
  }
}

export default MainScreen;
