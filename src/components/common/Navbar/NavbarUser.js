import React from 'react';

// dependencies
import { Link } from 'react-router-dom';

const NavbarUser = ({ currentUser, authService }) => {
  return (
    <>
      {currentUser ? (
        <div className="btn-group">
          <div
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-lg"></i>
          </div>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">{currentUser.given_name}</div>
            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item dropdown-item-custom"
              type="button"
              handleClick={() => authService.logout()}
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <Link to={'/login'} className="nav-custom__link">
          <i className="far fa-user fa-lg"></i>
        </Link>
      )}
    </>
  );
};

export default NavbarUser;
