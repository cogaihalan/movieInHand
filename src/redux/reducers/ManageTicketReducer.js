import {
  DAT_VE,
  GET_TICKET_ROOM,
  HUY_GHE,
} from "../constants/ManageTicketConstants";

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
    case HUY_GHE:
      state.danhSachGheDangDat = [...state.danhSachGheDangDat].filter(
        (item) => item.maGhe !== action.maGhe
      );
      return { ...state };
    default:
      return state;
  }
};
export default ManageTicketReducer;
