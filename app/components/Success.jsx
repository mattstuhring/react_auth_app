import React from 'react';
// import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import AuthService from 'AuthService';

export default class Success extends React.Component {
  constructor(props) {
    super(props);

    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (!this.Auth.loggedIn()) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className="success">
        <div className="row">
          <div className="col-sm-12 text-center">
            You have logged in successfully!
          </div>
        </div>
      </div>
    );
  }
}
