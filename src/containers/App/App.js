import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import Feed from "../Feed/Feed";
import UserPage from "../UserPage/UserPage";
import Login from "../Login";
import Register from "../Register/Register.js";
import NewPost from "../NewPost/NewPost";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/users/:id" exact component={ UserPage } />
        <Route path="/auth/login" exact component={ Login } />
        <Route path="/auth/register" exact component={ Register } />
        <Route path="/new_post" exact component={ NewPost } />
        <Route path="/" exact component={ Feed } />
      </Switch>
    </Router>
  );
}

export default App;
