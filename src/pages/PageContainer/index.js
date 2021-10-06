import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const PageContainer = ({ module }) => {
    return (
        <Layout>
            {module.header()}
            <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
                {module.sider()}
                {module.content()}
            </Layout>
            <Footer style={{ textAlign: "center" }}>@Project by Nero</Footer>
        </Layout>
    );
};

export default PageContainer;
