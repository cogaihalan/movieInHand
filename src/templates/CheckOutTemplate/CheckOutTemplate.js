import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../utils/settings/config";

export const CheckOutTemplate = (props) => {
  const { Component, ...restProps } = props;
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //propsRoute : props.location , props.history ,props.match
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    ></Route>
  );
};
