import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import Feed from "../Feed/Feed";
import UserPage from "../UserPage/UserPage"

function App() {
  return (
    <Router>
      <Header/>

      <Switch>
        <Route path={"/"}>
          <Feed/>
        </Route>
        <Route path={"/subscriptions"}/>
        <Route path={"/users/:id"} exact component={ UserPage } />
      </Switch>
    </Router>
  );
}

export default App;
