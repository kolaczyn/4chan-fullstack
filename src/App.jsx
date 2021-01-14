import Home from "./pages/Home";
import Faq from './pages/Faq'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Board from "./pages/Board";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/faq">
          <Faq/>
        </Route>
        <Route path="/:board">
          <Board />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
