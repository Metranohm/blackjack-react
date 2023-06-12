// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import NewGame from './pages/NewGame';

function App() {
    return (
    <Router>
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new-game">New Game</Link>
            </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/new-game">
            <NewGame />
            </Route>
            <Route path="/">
            <Home />
            </Route>
        </Switch>
        </div>
    </Router>
    );
}

export default App;
