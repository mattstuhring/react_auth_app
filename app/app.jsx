var React = require('react');
var ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Login from 'Login';
import Success from 'Success';
import Main from 'Main';

// Load Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// App scss
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Main} >
      <Route path="/" component={Login} />
      <Route path="success" component={Success}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
