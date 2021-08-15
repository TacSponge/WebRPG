import React, { Component } from "react";
import GamePanel from "./GamePanel";
import TabNavigator from "./TabNavigator";
import AdminScreen from "./AdminScreen";

class MainScreen extends Component {
  state = { tabIndex: 0 };
  tabs = [
    { id: 0, title: "Game" },
    { id: 1, title: "Admin" },
  ];

  tabHandler = (i) => {
    this.setState({ tabIndex: i });
  };

  render() {
    return (
      <div>
        <TabNavigator tabs={this.tabs} onTabSelect={this.tabHandler} />
        {this.state.tabIndex == 0 && <GamePanel />}
        {this.state.tabIndex == 1 && <AdminScreen />}
      </div>
    );
  }
}

export default MainScreen;
