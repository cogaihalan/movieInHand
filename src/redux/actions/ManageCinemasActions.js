import { QLCinemasService } from "../../services/MangeCinemasService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_CINEMAS_SYSTEM,
  GET_FILM_DETAIL,
} from "../constants/ManageCinemasConstants";
export const getCinemasSystem = () => {
  return async (dispatch) => {
    try {
      const { data, status } =
        await QLCinemasService.layThongTinLichChieuHeThongRap();
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_CINEMAS_SYSTEM,
          data: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFilmSchedule = (filmID) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLCinemasService.layThongTinLichChieuPhim(
        filmID
      );
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_FILM_DETAIL,
          data: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
