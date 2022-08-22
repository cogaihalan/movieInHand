import { QLFilmsService } from "../../services/ManageFilmsService";
import { GET_LIST_FILMS } from "../constants/ManageFilmsConstants";
export const getListFilms = () => {
  return async (dispatch) => {
    try {
      const result = await QLFilmsService.layDanhSachPhim();
      dispatch({
        type: GET_LIST_FILMS,
        data: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
