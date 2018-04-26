import React from 'react';
// import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class Success extends React.Component {
  constructor(props) {
    super(props);

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
