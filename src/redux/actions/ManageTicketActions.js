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
import { connection } from "../../index";
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
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction());
      await QLTicketService.datVe(danhSachVe);
      await dispatch(getTicketRoom(danhSachVe.maLichChieu));
      await dispatch(hideLoadingAction());
      const user = getState().ManageUserReducer.userLogin;
      connection.invoke(
        "datGheThanhCong",
        user.taiKhoan,
        danhSachVe.maLichChieu
      );
      await dispatch({ type: CHUYEN_TAB, number: "2" });
    } catch (err) {
      dispatch(hideLoadingAction());
      console.log(err);
    }
  };
};

export const datGhe = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    //Đưa thông tin ghế lên reducer
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });
    //Call api về backend
    let danhSachGheDangDat = getState().ManageTicketReducer.danhSachGheDangDat;
    let taiKhoan = getState().ManageUserReducer.userLogin.taiKhoan;
    //Biến mảng thành chuỗi
    let update = JSON.stringify(danhSachGheDangDat);
    //Call api signalR
    connection.invoke("datGhe", taiKhoan, update, maLichChieu);
  };
};
