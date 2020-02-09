import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Root from 'routes/Root';
import Quiz from 'routes/Quiz';
import isDev from 'utils/is-dev';

import 'animate.css/animate.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Root} exact />
          {isDev && <Route path="/quiz" component={Quiz} />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
