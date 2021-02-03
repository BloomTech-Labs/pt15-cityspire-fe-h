import React from 'react';

// dependencies
import { Link, useLocation } from 'react-router-dom';
// constants
const NavbarData = {
  MENU_ITEMS: [
    {
      id: 1,
      text: 'App',
      link: '/app',
      icon: 'fas fa-briefcase',
    },
    {
      id: 2,
      text: 'README.md',
      link: '/readme',
      icon: 'fas fa-readme',
    },
  ],
};

const NavbarMenu = () => {
  const location = useLocation();

  return (
    <>
      {NavbarData.MENU_ITEMS.map(item => (
        <span key={item.id} className="mr-3">
          {item.link === location.pathname ? (
            <span className="text-mute">{item.text}</span>
          ) : (
            <Link to={'/'} className="nav-custom__link">
              {item.text}
            </Link>
          )}
        </span>
      ))}
    </>
  );
};

export default NavbarMenu;
