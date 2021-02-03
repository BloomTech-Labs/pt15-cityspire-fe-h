import React from 'react';

// components
import NavbarMenu from './NavbarMenu';
import NavbarUser from './NavbarUser';
import NavbarDropdown from './NavbarDropdown';

// styles
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="sticky-top nav-custom">
        <div className="row m-0 py-3 justify-content-between align-items-center">
          <div className="col d-md-none text-left">
            <a
              data-toggle="collapse"
              href="#multiCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapse"
              className="nav-custom__link"
            >
              <i className="fas fa-bars fa-lg"></i>
            </a>
          </div>
          <div className="col d-md-none text-center">
            <a className="nav-custom__logo" href="/">
              CitySpire
            </a>
          </div>
          <div className="col d-md-none text-right">
            <NavbarUser />
          </div>
          <div className="col-12 d-none d-md-block text-center">
            <div className="row align-items-center">
              <div className="col d-none d-md-block text-md-left">
                <span className="mr-4">
                  <a className="nav-custom__logo" href="/">
                    CitySpire
                  </a>
                </span>
                <NavbarMenu />
              </div>
              <div className="col d-none d-md-block text-md-right">
                <NavbarUser />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row p-0 m-0 collapse multi-collapse d-md-none"
          id="multiCollapse"
        >
          <NavbarDropdown />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
