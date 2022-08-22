import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default function HomeMenu() {
  return (
    <>
      <Tabs tabPosition="left">
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1660866838818-09acea60bf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="rap1"
              className="rounded-full  w-32 h-32"
            />
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1661022023478-aceeb0db2b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="rap1"
              className="rounded-full w-32 h-32"
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="rap1"
              className="rounded-full w-32 h-32"
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}
