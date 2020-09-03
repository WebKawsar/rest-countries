import React, { useState, useEffect } from "react";
import "./App.css";
import "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CountryDetail from "./Components/CountryDetail/CountryDetail";

import NoMatch from "./Components/NoMatch/NoMatch";
import Match from "./Components/NotFound/Match";


function App() {


  return (

        <div>
          {/* <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <Match></Match>
              </Route>
            </Switch>
          </Router> */}
        
            

          <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <CountryDetail></CountryDetail>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>

        </div>

      )

}

export default App;
