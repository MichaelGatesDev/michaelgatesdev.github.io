import React from "react";
import { Switch, Route } from "react-router";

import HomeSection from "./sections/HomeSection";
import { NavbarTop } from "./components/NavbarTop";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={HomeSection} />
      </Switch>
    </div>
  );
}

export default App;
