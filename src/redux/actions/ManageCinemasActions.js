import { QLCinemasService } from "../../services/MangeCinemasService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_CINEMAS_SYSTEM } from "../constants/ManageCinemasConstants";
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
