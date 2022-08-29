import { USER_LOGIN } from "../../utils/settings/config";
import {
  GET_USER_DETAIL,
  SIGN_IN,
  SIGN_UP,
} from "../constants/ManageUserConstants";

let user = JSON.parse(localStorage.getItem(USER_LOGIN));
const initialState = {
  userLogin: user,
  userDetail: {},
};

const ManageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, userLogin: action.userLogin };
    case SIGN_UP:
      return { ...state };
    case GET_USER_DETAIL:
      return { ...state, userDetail: action.userDetail };

    default:
      return state;
  }
};
export default ManageUserReducer;
