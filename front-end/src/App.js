import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
