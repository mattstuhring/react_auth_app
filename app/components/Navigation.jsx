import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import decode from 'jwt-decode';
import AuthService from 'AuthService';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      message: 'Please login!'
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.Auth = new AuthService();
  }

  handleLogout() {
    // Clear token from localStorage
    this.Auth.logout();

    browserHistory.push('/');

    this.setState({
      user: null,
      message: 'Logout successful!'
    });
  }


  render() {

    const checkUserLogin = () => {
      if (this.Auth.getToken()) {
        let user = this.Auth.getProfile();

        return <span>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => {this.handleLogout()}}>
              LOGOUT
            </NavItem>
          </Nav>
          <Navbar.Text>
            Welcome, <Navbar.Link href="#">{user.email}</Navbar.Link>
          </Navbar.Text>
        </span>;
      } else {
        return <Navbar.Text pullRight>
          {this.state.message}
        </Navbar.Text>;
      }
    };

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React Auth</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>

            {checkUserLogin()}

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
