import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bubble from "./components/algorithms/Bubble";
import BubbleRecursive from "./components/algorithms/BubbleRecursive";
import Insertion from "./components/algorithms/Insertion";
import InsertionRecursive from "./components/algorithms/InsertionRecursive";
import Merge from "./components/algorithms/Merge";
import MergeIterative from "./components/algorithms/MergeIterative";
import Quick from "./components/algorithms/Quick";
import Selection from "./components/algorithms/Selection";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Bubble" component={Bubble} />
        <Route exact path="/BubbleRecursive" component={BubbleRecursive} />
        <Route exact path="/Insertion" component={Insertion} />
        <Route
          exact
          path="/InsertionRecursive"
          component={InsertionRecursive}
        />
        <Route exact path="/Merge" component={Merge} />
        <Route exact path="/MergeIterative" component={MergeIterative} />
        <Route exact path="/Quick" component={Quick} />
        <Route exact path="/Selection" component={Selection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
