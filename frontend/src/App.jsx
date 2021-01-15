import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Body from './components/Body';
import Header from './components/Logo';
import Thread from './pages/Thread';
import Board from './pages/Board';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Body>
        <Header />
        <Switch>
          <Route path="/:board/thread/:id">
            <Thread />
          </Route>
          <Route path="/:board/">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
