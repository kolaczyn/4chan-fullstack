import React from "react";
import Home from "./pages/Home";
import Thread from "./pages/Thread";
import Header from './components/Logo'
import Faq from './pages/Faq'
import Body from './components/Body'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Board from "./pages/Board";

function App() {
  return (
    <Router>
      <Body>
        <Header />
        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>
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
