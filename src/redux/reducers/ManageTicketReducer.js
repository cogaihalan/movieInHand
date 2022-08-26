import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  GET_TICKET_ROOM,
  HUY_GHE,
  SHOW_GHE_KHACH_DAT,
} from "../constants/ManageTicketConstants";

const initialState = {
  ticketRoom: {},
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: "1",
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
    case CHUYEN_TAB:
      return { ...state, tabActive: action.number };
    case DAT_VE_HOAN_TAT:
      return { ...state, danhSachGheDangDat: [] };
    case SHOW_GHE_KHACH_DAT:
      return { ...state, danhSachGheKhachDat: action.danhSachGheKhachDat };
    default:
      return state;
  }
};
export default ManageTicketReducer;
