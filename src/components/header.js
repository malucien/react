import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
  return (
    <Navbar dark sticky="top">
      <div className="container">
        <NavbarBrand href="/">
          <img src={NucampLogo} height="30" width="30" alt="Nucamp Logo" />
          Nucamp
        </NavbarBrand>
      </div>
    </Navbar>
  );
};

export default Header;
