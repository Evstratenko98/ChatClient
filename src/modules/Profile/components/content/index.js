/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Layout, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import Styles from './index.module.scss';

const { Content } = Layout;

const ProfileContent = () => {
  const user = useSelector((state) => state.user);

  return (
    <Content className={Styles.content}>
      <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large">
        {user.username}
      </Avatar>
    </Content>
  );
};

export default ProfileContent;
