import { QLFilmsService } from "../../services/ManageFilmsService";
import { GET_FILM_CAROUSEL } from "../constants/ManageFilmsConstants";
export const getFilmCarousel = () => {
  return async (dispatch) => {
    try {
      const result = await QLFilmsService.layDanhSachBanner();
      dispatch({
        type: GET_FILM_CAROUSEL,
        data: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
