import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

const routes: any[] = [
  {
    path: "/reiki",
    component: Reiki,
    exact: true
  },
  {
    path: "/plants",
    component: Plants,
    exact: true
  },
  {
    path: "/shaman",
    component: Shaman,
    exact: true
  },
  {
    path: "/",
    component: Home
  },
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
          <Route path="/plants">
            <Plants/>
          </Route>
          <Route path="/reiki">
            <Reiki/>
          </Route>
          <Route path="/shaman">
            <Shaman/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

