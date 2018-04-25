import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import decode from 'jwt-decode';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.getToken = this.getToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.logout = this.logout.bind(this);
  }


  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState, '********* prev state');
  //   console.log(this.getProfile(), '********* get profile');
  // }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    browserHistory.push('/login');

    this.setState({
      user: null
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
          <Navbar.Text pullRight>
            Logged in as: <Navbar.Link href="#">{user.email}</Navbar.Link>
          </Navbar.Text>
        </span>;
      } else {
        return <Navbar.Text pullRight>
          Welcome, please login!
        </Navbar.Text>
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
