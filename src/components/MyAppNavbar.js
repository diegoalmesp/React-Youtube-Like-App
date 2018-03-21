import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import BrandImage from './common/BrandImage';
import NavbarFilter from './common/NavbarFilter';

class MyAppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          {/*<NavbarBrand href="/">
            <BrandImage />
          </NavbarBrand>*/}
          <Link to="/">
            <BrandImage />
          </Link>

          <NavbarToggler onClick={this.toggle} />

          {/*<Form className="w-50 p-2">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="email" name="email" id="exampleEmail" placeholder="buscar..." />
            </FormGroup>
            <Button>Find</Button>
          </Form>*/}

          <NavbarFilter />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*<NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Navigation
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Link to="/">Home</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/about">About</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

export default MyAppNavbar;