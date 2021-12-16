import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menuItems } from '../../../../constants/PROFILE_MENU';

const { Sider } = Layout;

const ProfileSider = () => (
  <Sider className="site-layout-background" width={200}>
    <Menu mode="inline" style={{ height: '100%' }} defaultSelectedKeys={['Profile']}>
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.title}>
          <Link to={menuItem.link}>{menuItem.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
);
export default ProfileSider;
