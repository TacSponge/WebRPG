import React, { Component } from "react";

class TabNavigator extends Component {
  render() {
    return (
      <div>
        {this.props.tabs.map((t) => (
          <button>Tab {t}</button>
        ))}
      </div>
    );
  }
}

export default TabNavigator;