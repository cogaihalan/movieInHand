import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { getTicketRoom } from "../../redux/actions/ManageTicketActions";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { DAT_VE } from "../../redux/constants/ManageTicketConstants";
export default function Checkout(props) {
  const dispatch = useDispatch();
  const ticketRoomID = props.match.params.id;
  useEffect(() => {
    dispatch(getTicketRoom(ticketRoomID));
  }, []);
  const { ticketRoom, danhSachGheDangDat } = useSelector(
    (stateList) => stateList.ManageTicketReducer
  );
  const { danhSachGhe, thongTinPhim } = ticketRoom;
  const user = useSelector(
    (stateList) => stateList.ManageUserReducer.userLogin
  );
  console.log(danhSachGhe);
  const renderDanhSachGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      const classGheVip = ghe.loaiGhe === "Vip" ? "gheVIP" : "";
      const classGheDaDat = ghe.daDat ? "gheDaDat" : "";
      const classGheDangDat =
        danhSachGheDangDat.findIndex((item) => item.maGhe === ghe.maGhe) !== -1
          ? "gheDangDat"
          : "";
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({ type: DAT_VE, gheDuocChon: ghe });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}
          >
            {ghe.daDat ? "X" : ghe.stt}
          </button>
        </Fragment>
      );
    });
  };
  return (
    <div className="grid grid-cols-12 px-12 py-10">
      <div className="col-span-9 px-5">
        <div className="flex flex-col items-center">
          <div className="w-3/4 h-4 bg-black rounded-sm"></div>
          <div
            className={`${style["trapezoid"]} ${style["trapezoid-up"]}`}
          ></div>
          <div>{renderDanhSachGhe()}</div>
        </div>
      </div>
      <div className="col-span-3">
        <h3 className="text-center text-green-400 text-2xl">
          {danhSachGheDangDat
            ?.reduce((tongTien, item) => {
              return (tongTien += item.giaVe);
            }, 0)
            .toLocaleString()}{" "}
          VNĐ
        </h3>
        <hr />
        <div className="film-info py-5 text-sm text-black">
          <h3 className=" text-black text-2xl">{thongTinPhim?.tenPhim}</h3>
          <p className=" mt-4 mb-2">Cụm Rạp : {thongTinPhim?.tenCumRap}</p>
          <p className="mt-4 mb-2">Địa điểm : {thongTinPhim?.diaChi}</p>
          <p>
            Ngày chiếu : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}{" "}
            {thongTinPhim?.tenRap}
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-xl items-center py-5">
          <table className="table-auto">
            <thead className="text-black">
              <tr>
                <th>Ghế</th>
                <th>Đơn giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {_.sortBy(danhSachGheDangDat, ["stt"])?.map((ghe, index) => {
                return (
                  <tr key={index}>
                    <td>{ghe.stt}</td>
                    <td>{ghe.giaVe}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <h4 className="user-info mt-3 py-3">Email</h4>
        <p className="pb-3">{user.email}</p>
        <hr />
        <h4 className="user-info mt-3 py-3">Họ Tên</h4>
        <p className="pb-3">{user.hoTen}</p>
        <hr />
        <div className="">
          <div className="py-3 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer text-white text-center btn btn-bookingTicket font-bold text-xl ">
            Đặt vé
          </div>
        </div>
      </div>
    </div>
  );
}
