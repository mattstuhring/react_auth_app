var React = require('react');
var ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Login from 'Login';

// Load Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// App scss
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Login}>
      {/* <Route path="about" component={About}/> */}

    </Route>
  </Router>,
  document.getElementById('app')
);
