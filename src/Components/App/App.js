import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../Styles";

import Footer from "../Footer";

import Home from "../Home";
import DetailsCard from "../DetailsCard";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/:cardName" render={DetailsCard} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
