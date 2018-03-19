import React from 'react';
import PropTypes from 'prop-types';

import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input
 } from 'reactstrap';

const NavbarFilter = (props) => {
  const { onChange } = props;

  return (
    <InputGroup className="w-50 p-2">
      <Input type="email" name="email" id="exampleEmail" placeholder="buscar..." onChange={onChange} />
      <InputGroupAddon addonType="append"><Button><span className="oi oi-eye"></span></Button></InputGroupAddon>
    </InputGroup>
  );
}

NavbarFilter.propTypes = {
  onChange: PropTypes.func
}

export default NavbarFilter;