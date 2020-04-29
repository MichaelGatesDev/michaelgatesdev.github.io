import React from "react";
import { Switch, Route } from "react-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import HomeSection from "./sections/HomeSection";
import { NavbarTop } from "./components/NavbarTop";
import { Footer } from "./components/Footer";

library.add(fab, fas);

const App = (): JSX.Element => {
  return (
    <div className="App">
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={HomeSection} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
