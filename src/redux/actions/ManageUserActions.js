import { history } from "../../App";
import { QLUserService } from "../../services/ManageUserService";
import { STATUS_CODE, TOKEN, USER_LOGIN } from "../../utils/settings/config";
import { SIGN_IN } from "../constants/ManageUserConstants";

export const dangKy = (userLogin) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLUserService.dangKy(userLogin);
      console.log({ data, status });
      localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
      localStorage.setItem(TOKEN, JSON.stringify(data.content.accessToken));
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: SIGN_IN,
          userLogin: data.content,
        });
        // history.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };
};
