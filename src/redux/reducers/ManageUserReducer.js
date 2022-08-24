import { USER_LOGIN } from "../../utils/settings/config";
import { SIGN_IN, SIGN_UP } from "../constants/ManageUserConstants";

// let user = localStorage.getItem(USER_LOGIN, JSON.parse(USER_LOGIN));
const initialState = {
  userLogin: {},
};

const ManageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, userLogin: action.userLogin };

    default:
      return state;
  }
};
export default ManageUserReducer;
