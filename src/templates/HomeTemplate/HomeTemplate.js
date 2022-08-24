import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //propsRoute : props.location , props.history ,props.match
        return (
          <Fragment>
            <Header {...propsRoute}></Header>
            <Component {...propsRoute}></Component>
            <Footer {...propsRoute}></Footer>
          </Fragment>
        );
      }}
    ></Route>
  );
};
