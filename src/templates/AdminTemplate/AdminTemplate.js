import {
  UserOutlined,
  ProfileOutlined,
  FundProjectionScreenOutlined,
  PlusOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Fragment, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { history } from "../../App";
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
    getItem(
      "List Films",
      "3",
      <NavLink
        style={{ display: "flex", alignItems: "center" }}
        to="/admin/films"
      >
        <FileOutlined />
      </NavLink>
    ),
    getItem(
      "Add Film",
      "4",
      <NavLink
        style={{ display: "flex", alignItems: "center" }}
        to="/admin/films/add"
      >
        <PlusOutlined />
      </NavLink>
    ),
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
                <div
                  onClick={() => {
                    history.push("/admin/films");
                  }}
                  className="logo flex justify-center items-center my-3"
                >
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
