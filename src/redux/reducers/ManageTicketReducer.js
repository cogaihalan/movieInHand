import { DAT_VE, GET_TICKET_ROOM } from "../constants/ManageTicketConstants";

const initialState = {
  ticketRoom: {},
  danhSachGheDangDat: [],
};

const ManageTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKET_ROOM:
      return { ...state, ticketRoom: action.ticketRoom };
    case DAT_VE:
      const danhSachGheCapNhat = [...state.danhSachGheDangDat];
      const index = danhSachGheCapNhat.findIndex(
        (ghe) => ghe.maGhe === action.gheDuocChon.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    default:
      return state;
  }
};
export default ManageTicketReducer;
