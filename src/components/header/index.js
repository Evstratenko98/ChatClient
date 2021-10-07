import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import { routes } from '../../modules/combineModules';

const { Header } = Layout;

const defaultHeader = () => (
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      {routes.map((route) => (
        <Menu.Item key={route.name}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  </Header>
);

export default defaultHeader;
