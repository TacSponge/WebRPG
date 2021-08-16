import React, { Component } from "react";
import AdminCreatureTable from "./AdminCreatureTable";

class AdminScreen extends Component {
  state = { creatures: [] };

  handleCreatureDelete = (id) => {
    var creatures = [...this.state.creatures].filter((c) => c.id !== id);
    this.setState({ creatures });
    let url = "http://localhost:14396/api/creatures/" + id;
    fetch(url, { method: "DELETE" });
  };

  render() {
    return (
      <div>
        <h1>Admin Panel</h1>
        <AdminCreatureTable
          creatures={this.state.creatures}
          onCreatureDelete={this.handleCreatureDelete}
        />
      </div>
    );
  }
  componentDidMount() {
    const url = "http://localhost:14396/api/creatures/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ creatures: data }));
  }
}

export default AdminScreen;
