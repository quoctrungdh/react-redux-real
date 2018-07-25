import * as React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react'

function Header() {
  return (
    <div className="ui container">
      <nav className="ui secondary menu">
        <span className="item">
          <Icon name="bitcoin" size="huge" color="teal" />
        </span>
        <a className="item" href="#">Dashboard</a>
        <a className="item" href="#">Games</a>
        <a className="item" href="#">Withdraw</a>
        <a className="item" href="#">Support</a>

        <div className="right menu">
          <Dropdown className="item" text="Lang">
            <Dropdown.Menu>
              <Dropdown.Item text="en" />
              <Dropdown.Item text="vn" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  )
}

export default Header;
