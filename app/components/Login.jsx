import React from 'react';
import Navigation from 'Navigation';
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  componentDidMount() {
    // axios.get('/api/login')
    //   .then((res) => {
    //     console.log(res, '************** res');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmitLogin(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/api/login', user)
      .then((res) => {
        console.log(res, '************* res');

        this.setState({
          email: '',
          password: ''
        });
      })
      .catch((err) => {
        console.log(err);
      });

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
                  <form onSubmit={this.handleSubmitLogin}>
                    <FormGroup controlId="formControlsEmail">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        name="email"
                        value={this.state.email}
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <FormGroup controlId="formControlsPassword">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        name="password"
                        value={this.state.password}
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
