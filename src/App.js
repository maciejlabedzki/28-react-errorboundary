import React from "react";
import "./styles.css";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import Module1 from "./Module1";

function ErrorTh(val) {
  if (val === 5) {
    // Simulate a JS error
    throw new Error("I crashed!");
  } else {
    return null;
  }
}

function App() {
  return (
    <div>
      <Module1 />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>{ErrorTh(6)}</ErrorBoundary>
    </div>
  );
}

export default App;
