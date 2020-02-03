import React from "react";
import { Component } from "react";
import items from "./items";

var itemsVisible = items.slice();

class MainPage extends Component {
  state = { search: "" };
  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  showResults = () => {
    let toSearch = this.state.search.toLowerCase();
    let results = itemsVisible.filter(
      element =>
        element.name.toLowerCase().includes(toSearch) ||
        element.position.toLowerCase().includes(toSearch) ||
        element.department.toLowerCase().includes(toSearch)
    );
    return (
      <div className="container wrapperResults">
        <div className="container results">
          {results.map((item, index) => (
            <div className="row results" key={index}>
              <img
                className="col-2 p-1"
                src={item.picture}
                alt="Missing..."
              ></img>
              <div className="col">{item.name}</div>
              <div className="col">{item.position}</div>
              <div className="col">{item.department}</div>
              <div className="col">{item.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="divform">
          <form className="form">
            <input
              value={this.state.search}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Start typing..."
            />
          </form>
        </div>

        <div>{this.showResults()}</div>
      </>
    );
  }
}

export default MainPage;
