import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/250",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement() {
    console.log("Increment Clicked");
  }

  render() {
    return (
      //instead if <div>, could use <React.Fragment>
      // className using bootstrap styling
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: 25 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
