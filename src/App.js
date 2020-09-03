import React from "react";
import "./App.css";
import "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CountryDetail from "./Components/CountryDetail/CountryDetail";


function App() {

  return (

          <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/country/:countyName">
                <CountryDetail></CountryDetail>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>

      )

}

export default App;
