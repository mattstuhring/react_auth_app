import React from 'react';
import Navigation from 'Navigation';
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="main">
        {/* TOP NAVBAR */}
        <Navigation/>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title>Login</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formControlsEmail">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <FormGroup controlId="formControlsPassword">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <Button type="submit" bsStyle="primary" block>Submit</Button>
                  </form>
                </Panel.Body>
              </Panel>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
