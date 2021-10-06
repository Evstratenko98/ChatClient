import React from "react";
import { Layout, Menu } from "antd";
import { routes } from "../../modules/combineModules";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const defaultHeader = () => {
    return (
        <Header className="header">
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
                {routes.map((route) => (
                    <Menu.Item key={route.name}>
                        <NavLink to={route.path}>{route.name}</NavLink>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

export default defaultHeader;
