import React, { Component } from "react";

class TabNavigator extends Component {
  render() {
    return (
      <div>
        {this.props.tabs.map((t) => (
          <button key={t} onClick={() => this.props.onTabSelect(t)}>
            Tab {t}
          </button>
        ))}
      </div>
    );
  }
}

export default TabNavigator;
