import React, { Component } from "react";

class Module1 extends Component {
  render() {
    return (
      <>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br />
            <br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates
            a JavaScript error in a component.
          </b>
        </p>
      </>
    );
  }
}

export default Module1;
