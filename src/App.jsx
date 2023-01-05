import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// css file
import "./index.css";

// componets
import Graph from "./components/Graph";

const App = () => (
  <Fragment>
    <Graph />
  </Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
