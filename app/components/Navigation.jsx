import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import decode from 'jwt-decode';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      message: 'Please login!'
    }

    this.getToken = this.getToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.logout = this.logout.bind(this);
  }

  getProfile() {
    // Decode the token from localStorage
    return decode(this.getToken());
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear token from localStorage
    localStorage.removeItem('id_token');
    browserHistory.push('/');

    this.setState({
      user: null,
      message: 'Logout successful!'
    });
  }


  render() {

    const checkUserLogin = () => {
      if (this.getToken()) {
        let user = this.getProfile();

        return <span>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => {this.logout()}}>
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
