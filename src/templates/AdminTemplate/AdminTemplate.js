import {
  UserOutlined,
  ProfileOutlined,
  FundProjectionScreenOutlined,
  PlusOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Users", "1", <UserOutlined />),
  getItem("Films", "2", <ProfileOutlined />, [
    getItem("Film", "3", <FileOutlined />),
    getItem("Add film", "4", <PlusOutlined />),
  ]),
  getItem("Showtimes", "5", <FundProjectionScreenOutlined />),
];

const AdminTemplate = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //propsRoute : props.location , props.history ,props.match
        return (
          <Fragment>
            <Layout
              style={{
                minHeight: "100vh",
              }}
            >
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <div className="logo flex justify-center items-center my-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
                    alt="logo-admin"
                    width={50}
                  />
                </div>
                <Menu
                  theme="dark"
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  items={items}
                />
              </Sider>
              <Layout className="site-layout">
                <Content
                  style={{
                    margin: "0 16px",
                  }}
                >
                  <Component {...propsRoute}></Component>
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    ></Route>
  );
};

export default AdminTemplate;
