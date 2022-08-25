import { history } from "../../App";
import { QLUserService } from "../../services/ManageUserService";
import { STATUS_CODE, TOKEN, USER_LOGIN } from "../../utils/settings/config";
import {
  GET_USER_DETAIL,
  SIGN_IN,
  SIGN_UP,
} from "../constants/ManageUserConstants";

export const dangKy = (newUser) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLUserService.dangKy(newUser);
      console.log({ data, status });
      // if (status === STATUS_CODE.SUCCESS) {
      // dispatch({
      //   type: SIGN_UP,
      //   newUser: data.content,
      // });
      // }
    } catch (err) {
      console.log(err);
    }
  };
};

export const dangNhap = (userLogin) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLUserService.dangNhap(userLogin);
      localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
      localStorage.setItem(TOKEN, JSON.stringify(data.content.accessToken));
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: SIGN_IN,
          userLogin: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinTaiKhoan = () => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLUserService.layThongTinTaiKhoan();
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_USER_DETAIL,
          userDetail: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
