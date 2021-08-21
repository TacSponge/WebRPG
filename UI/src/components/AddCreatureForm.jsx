import React, { Component } from "react";
import TextBoxWithLabel from "./TextBoxWithLabel";

class AddCreatureForm extends Component {
  state = { CreatureName: "" };

  handleCreatureNameChange = (event) => {
    console.log(event);
    this.setState({ CreatureName: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleCreatureName}>
        <label>
          CreatureName{" "}
          <input
            type="text"
            id="a"
            value={this.state.CreatureName}
            onChange={this.handleCreatureNameChange}
          />{" "}
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddCreatureForm;
