import React, { Component } from "react";
import { Prompt } from "react-router";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    formIsHalfFilledOut: false
  };
  add = e => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", formIsHalfFilledOut: false });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <Prompt
          when={this.state.formIsHalfFilledOut}
          message="Unsaved changes. Are you sure you want to leave?"
        />

        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e =>
                this.setState({
                  name: e.target.value,
                  formIsHalfFilledOut: true
                })
              }
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e =>
                this.setState({
                  email: e.target.value,
                  formIsHalfFilledOut: true
                })
              }
            />
          </div>
          <button className="ui button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
