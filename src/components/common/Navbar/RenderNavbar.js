import React, { useState } from 'react';

// dependencies
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';

const RenderNavbar = ({ userInfo, authService, ...props }) => {
  const [current, setCurrent] = useState('mail');

  const handleClick = e => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="logo">
          <span>CitySpire</span>
        </Menu.Item>
        <Menu.Item key="question" icon={<QuestionCircleOutlined />}>
          <Link to="/help" rel="noopener noreferrer">
            Help
          </Link>
        </Menu.Item>
        {userInfo ? (
          <Menu.Item key="user" icon={<UserOutlined />}>
            <Link to="/profile" rel="noopener noreferrer">
              My Profile
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="alipay">
            <Link to="/login" rel="noopener noreferrer">
              Login
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default RenderNavbar;
