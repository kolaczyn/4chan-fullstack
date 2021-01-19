import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Body from './components/common/Body';
import Header from './components/common/Logo';
import Thread from './pages/Thread';
import Board from './pages/Board';
import Home from './pages/Home';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Body>
        <Header />
        <Switch>
          <Route path="/:board/archive" component={Archive} />
          <Route path="/:board/thread/:id" component={Thread} />
          <Route path="/404" component={NotFound} />
          <Route path="/:board/" component={Board} />
          <Route path="/" component={Home} />
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
