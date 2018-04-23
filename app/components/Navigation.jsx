import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React Authentication</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}
