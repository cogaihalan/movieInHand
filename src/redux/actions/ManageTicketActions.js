import { QLTicketService } from "../../services/ManageTicketService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_LIST_FILMS } from "../constants/ManageFilmsConstants";
import { GET_TICKET_ROOM } from "../constants/ManageTicketConstants";

export const getTicketRoom = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLTicketService.layDanhSachPhongVe(
        maLichChieu
      );
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_TICKET_ROOM,
          ticketRoom: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const datVe = (danhSachVe) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLTicketService.datVe(danhSachVe);
      console.log({ data, status });
    } catch (err) {
      console.log(err);
    }
  };
};
