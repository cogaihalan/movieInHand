import { USER_LOGIN } from "../../utils/settings/config";
import {
  GET_USER_DETAIL,
  SIGN_IN,
  SIGN_UP,
} from "../constants/ManageUserConstants";

let user = JSON.parse(localStorage.getItem(USER_LOGIN));
const initialState = {
  userLogin: user,
  userDetail: {
    taiKhoan: "hoangtai",
    matKhau: "1234567",
    hoTen: "Kevin Tai",
    email: "hoangtai@gmail.com",
    soDT: null,
    maNhom: "GP00",
    loaiNguoiDung: "Khách hàng",
    thongTinDatVe: [
      {
        danhSachGhe: [
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57653,
            tenGhe: "13",
          },
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57654,
            tenGhe: "14",
          },
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57641,
            tenGhe: "01",
          },
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57642,
            tenGhe: "02",
          },
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57643,
            tenGhe: "03",
          },
          {
            maHeThongRap: "CGV",
            tenHeThongRap: "CGV - Aeon Bình Tân",
            maCumRap: "Rạp 5",
            tenCumRap: "Rạp 5",
            maRap: 515,
            tenRap: "Rạp 5",
            maGhe: 57644,
            tenGhe: "04",
          },
        ],
        maVe: 96880,
        ngayDat: "2022-08-25T17:08:14.707",
        tenPhim: "THẾ GIỚI KHỦNG LONG",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/the-gioi-khung-long-lanh-dia_gp01.jpg",
        giaVe: 100000,
        thoiLuongPhim: 120,
      },
      {
        danhSachGhe: [
          {
            maHeThongRap: "BHDStar",
            tenHeThongRap: "BHD Star Cineplex - 3/2",
            maCumRap: "Rạp 6",
            tenCumRap: "Rạp 6",
            maRap: 456,
            tenRap: "Rạp 6",
            maGhe: 48279,
            tenGhe: "79",
          },
          {
            maHeThongRap: "BHDStar",
            tenHeThongRap: "BHD Star Cineplex - 3/2",
            maCumRap: "Rạp 6",
            tenCumRap: "Rạp 6",
            maRap: 456,
            tenRap: "Rạp 6",
            maGhe: 48280,
            tenGhe: "80",
          },
          {
            maHeThongRap: "BHDStar",
            tenHeThongRap: "BHD Star Cineplex - 3/2",
            maCumRap: "Rạp 6",
            tenCumRap: "Rạp 6",
            maRap: 456,
            tenRap: "Rạp 6",
            maGhe: 48299,
            tenGhe: "99",
          },
          {
            maHeThongRap: "BHDStar",
            tenHeThongRap: "BHD Star Cineplex - 3/2",
            maCumRap: "Rạp 6",
            tenCumRap: "Rạp 6",
            maRap: 456,
            tenRap: "Rạp 6",
            maGhe: 48300,
            tenGhe: "100",
          },
          {
            maHeThongRap: "BHDStar",
            tenHeThongRap: "BHD Star Cineplex - 3/2",
            maCumRap: "Rạp 6",
            tenCumRap: "Rạp 6",
            maRap: 456,
            tenRap: "Rạp 6",
            maGhe: 48301,
            tenGhe: "101",
          },
        ],
        maVe: 96886,
        ngayDat: "2022-08-25T17:11:17.703",
        tenPhim: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem_gp01.jpg",
        giaVe: 90000,
        thoiLuongPhim: 120,
      },
    ],
  },
};

const ManageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, userLogin: action.userLogin };
    case SIGN_UP:
      return { ...state };
    case GET_USER_DETAIL:
      return { ...state, userDetail: action.userDetail };
    
    default:
      return state;
  }
};
export default ManageUserReducer;
