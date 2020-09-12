import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
