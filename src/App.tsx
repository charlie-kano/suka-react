import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Plants } from './containers/Plants';
import { Reiki } from './containers/Reiki';
import { Shaman } from './containers/Shaman';
import { Home } from './containers/Home';

const routes: any[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/plants",
    component: Plants
  },
  {
    path: "/reiki",
    component: Reiki
  },
  {
    path: "/Shaman",
    component: Shaman
  },
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
