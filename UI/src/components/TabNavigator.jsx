import React, { Component } from "react";

class TabNavigator extends Component {
  render() {
    return (
      <div>
        {this.props.tabs.map((t) => (
          <button key={t.id} onClick={() => this.props.onTabSelect(t.id)}>
            {t.title}
          </button>
        ))}
      </div>
    );
  }
}

export default TabNavigator;
