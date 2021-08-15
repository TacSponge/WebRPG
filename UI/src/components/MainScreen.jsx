import React, { Component } from "react";
import GamePanel from "./GamePanel";
import TabNavigator from "./TabNavigator";
import AdminScreen from "./AdminScreen";

class MainScreen extends Component {
  state = { tabIndex: 0 };
  tabs = [0, 1];

  tabHandler = (i) => {
    console.log("Selected tab " + i);
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
