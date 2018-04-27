import React from 'react';
// import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import decode from 'jwt-decode';
import { browserHistory } from 'react-router';

export default class Success extends React.Component {
  constructor(props) {
    super(props);

    this.loggedIn = this.loggedIn.bind(this);
    this.isTokenExpired = this.isTokenExpired.bind(this);
  }

  componentWillMount() {
    if (!this.loggedIn()) {
      browserHistory.push('/');
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem('id_token'); // Getting token from localstorage
    return token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
        return true;
      }
      else {
        return false;
      }
    }
    catch (err) {
      return false;
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
