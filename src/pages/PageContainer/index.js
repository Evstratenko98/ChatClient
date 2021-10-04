import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../../modules/combineModules";

const { Header, Content, Footer, Sider } = Layout;

const PageContainer = ({ module }) => {
    return (
        <Layout>
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
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
                <Sider className="site-layout-background" width={200}>
                    <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%" }}>
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
            </Layout>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default PageContainer;
