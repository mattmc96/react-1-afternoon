import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12,
        },
        {
          name: "Jeremy Shcrader",
          age: 24,
          hairColor: "brown",
        },
        {
          name: "Carly Armstrong",
          title: "CEO",
        },
      ],

      userInput: "",
      filteredEmployees: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterEmployees(prop) {}
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
