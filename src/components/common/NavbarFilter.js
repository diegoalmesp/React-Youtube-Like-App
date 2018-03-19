import React, { Component } from 'react';

import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input
 } from 'reactstrap';

class NavbarFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  onInputChangeHandler = (event) => {
    this.setState({input: event.target.value});
    console.log('filter change: ', event.target.value);
  }

  render() {
    return (
      <InputGroup className="w-50 p-2">
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="buscar..."
          onChange={this.onInputChangeHandler}
          value={this.state.input} />
        <InputGroupAddon addonType="append"><Button><span className="oi oi-eye"></span></Button></InputGroupAddon>
      </InputGroup>
    );
  }
}

export default NavbarFilter;