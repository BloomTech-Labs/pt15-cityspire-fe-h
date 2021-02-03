import React from 'react';

// dependencies
import { Link } from 'react-router-dom';
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

const NavbarDropdown = () => {
  return (
    <>
      {NavbarData.MENU_ITEMS.map((item, index) => (
        <div
          key={item.id}
          className={`col-12 py-2 text-left ${index ===
            NavbarData.MENU_ITEMS.length - 1 && 'mb-3'}`}
        >
          <Link to={item.link} className="nav-custom__link">
            {item.text}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavbarDropdown;
