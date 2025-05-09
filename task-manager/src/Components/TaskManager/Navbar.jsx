import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Avatar } from "antd";
import "../../Css-files/customized-antd.css";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("React-Project", "sub1", <UserOutlined />, [
    getItem("Task Manager", "3"),
    getItem("Launch Tracker", "4"),
    getItem("Match Pairs Game", "5"),
    getItem("Painter Application", "6"),
  ]),
  getItem("React-TailWind", "sub2", <TeamOutlined />, [
    getItem("Weather Dashboard", "7"),
    getItem("Online Shopping Site", "8"),
  ]),
  getItem("NextJs", "sub3", <TeamOutlined />, [getItem("BlogSite", "9")]),
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="Main-header"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Header>
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Task Manager ©{new Date().getFullYear()} Created by users
        </Footer>
      </Layout>
    </Layout>
  );
};
export default NavBar;
