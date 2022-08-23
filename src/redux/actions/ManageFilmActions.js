import { QLFilmsService } from "../../services/ManageFilmsService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_LIST_FILMS } from "../constants/ManageFilmsConstants";
export const getListFilms = () => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLFilmsService.layDanhSachPhim();
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_LIST_FILMS,
          data: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
