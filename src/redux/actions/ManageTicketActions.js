import { QLTicketService } from "../../services/ManageTicketService";
import { STATUS_CODE } from "../../utils/settings/config";
import { GET_LIST_FILMS } from "../constants/ManageFilmsConstants";
import {
  CHUYEN_TAB,
  DAT_VE,
  GET_TICKET_ROOM,
} from "../constants/ManageTicketConstants";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../actions/LoadingActions";
import { connection } from "../..";
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
      dispatch(displayLoadingAction());
      await QLTicketService.datVe(danhSachVe);
      await dispatch(getTicketRoom(danhSachVe.maLichChieu));
      await dispatch(hideLoadingAction());
      await dispatch({ type: CHUYEN_TAB, number: "2" });
    } catch (err) {
      dispatch(hideLoadingAction());
      console.log(err);
    }
  };
};

export const datGhe = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    dispatch({ type: DAT_VE, gheDuocChon: ghe });
    const danhSachGheDangDat = JSON.stringify(
      getState().ManageTicketReducer.danhSachGheDangDat
    );
    const taiKhoan = getState().ManageUserReducer.userLogin.taiKhoan;
    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};
