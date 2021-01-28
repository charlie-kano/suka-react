import React from 'react';
// import logo from './logo.svg';

import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Plants } from './containers/Plants';
import { Reiki } from './containers/Reiki';
import { Shaman } from './containers/Shaman';
import { Home } from './containers/Home';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div className="content">
          <Route path="/plants">
            <Plants/>
          </Route>
          <Route path="/reiki">
            <Reiki/>
          </Route>
          <Route path="/shaman">
            <Shaman/>
          </Route>
          <Route path="/temenos">
            <Shaman/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          </div>
        </main>
        <Switch>
          {/* {routes.map((route, i) => {
            console.log(route)
            return (
              <div>
                <Route
                  path={route.path}
                  exact={route.exact}
                  strict={true}
                  component={route.component} />
              </div>)
          })} */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;

