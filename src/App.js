import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Grammar from "./components/Grammar/Grammar";
import Vocabulary from "./components/Vocabulary/Vocabulary";
import GA from "./GoogleAnalytics";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {GA.init() && <GA.RouteTracker />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grammar" component={Grammar} />
            <Route exact path="/vocabulary" component={Vocabulary} />
            <Route component={PageNotFound} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
