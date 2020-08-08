import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Form from "../../components/Form/Form";
import Register from "../register/Register";
import Login from "../login/Login"

function App() {
  return (
      <Router>
            <div className="App">
              <Switch>
                  <Route path="/auth/login" exact component={Login} />
                  <Route path="/auth/register" exact component={Register} />
              </Switch>
            </div>
      </Router>
  );
}

export default App;
