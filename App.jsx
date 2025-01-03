import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import User from './components/User';
import Reporting from './components/Reporting';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/" exact component={User} />
      </Switch>
    </Router>
  );
}

export default App;