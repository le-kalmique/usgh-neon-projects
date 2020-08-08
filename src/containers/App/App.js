import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import Feed from "../Feed/Feed";

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route path={"/"}>
          <Feed/>
        </Route>
        <Route path={"/subscriptions"}>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
