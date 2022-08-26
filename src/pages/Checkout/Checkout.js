import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  datGhe,
  datVe,
  getTicketRoom,
} from "../../redux/actions/ManageTicketActions";
import style from "./Checkout.module.css";
import "./Checkout.css";
import {
  CHUYEN_TAB,
  HUY_GHE,
  SHOW_GHE_KHACH_DAT,
} from "../../redux/constants/ManageTicketConstants";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { layThongTinTaiKhoan } from "../../redux/actions/ManageUserActions";
import { connection } from "../..";
const { TabPane } = Tabs;
function Checkout(props) {
  const dispatch = useDispatch();
  const ticketRoomID = props.match.params.id;
  useEffect(() => {
    dispatch(getTicketRoom(ticketRoomID));
    connection.invoke("loadDanhSachGhe", ticketRoomID);

    connection.on("loadDanhSachGheDaDat", (dsGheDaDat) => {
      // const listMaGheKhachDat = _.map(dsGheDaDat, (gheDaDat) => {
      //   _.pick(JSON.parse(gheDaDat.danhSachGhe), ["maGhe", "giaVe"]);
      // });
      // // const danhSachVe = _.map(danhSachGheDangDat, (item) =>
      // //             _.pick(item, ["maGhe", "giaVe"])
      // //           );
      // console.log(listMaGheKhachDat);
      dispatch({
        type: SHOW_GHE_KHACH_DAT,
        danhSachGheKhachDat: [
          { maGhe: 48223 },
          { maGhe: 48224 },
          { maGhe: 48225 },
          { maGhe: 48226 },
        ],
      });
    });
    window.addEventListener("beforeunload", clearGhe);
    return () => {
      clearGhe();
      window.removeEventListener("beforeunload", clearGhe);
    };
  }, []);

  const { ticketRoom, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(
    (stateList) => stateList.ManageTicketReducer
  );
  const { danhSachGhe, thongTinPhim } = ticketRoom;
  const user = useSelector(
    (stateList) => stateList.ManageUserReducer.userLogin
  );
  const clearGhe = () => {
    connection.on("huyGhe", user.taiKhoan, ticketRoomID);
  };
  const renderDanhSachGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      const classGheVip = ghe.loaiGhe === "Vip" ? "gheVIP" : "";
      const classGheKhachDat =
        danhSachGheKhachDat.findIndex((item) => item.maGhe === ghe.maGhe) !== -1
          ? "gheKhachDat"
          : "";
      const classGheUserDat =
        ghe.taiKhoanNguoiDung === user.taiKhoan ? "gheUserDat" : "";
      const classGheDaDat = ghe.daDat ? "gheDaDat" : "";
      const classGheDangDat =
        danhSachGheDangDat.findIndex((item) => item.maGhe === ghe.maGhe) !== -1
          ? "gheDangDat"
          : "";
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(datGhe(ghe, ticketRoomID));
            }}
            disabled={ghe.daDat || classGheKhachDat !== ""}
            className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat} ${classGheUserDat} ${classGheKhachDat}`}
          >
            {ghe.daDat ? (
              classGheUserDat !== "" ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="">
      <div className="grid grid-cols-12">
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
            <table className="table min-w-full text-sm">
              <thead className="text-white text-left bg-gray-700">
                <tr>
                  <th className="p-3 border-r-2 border-r-white">Ghế</th>
                  <th className="p-3 border-r-2 border-r-white">Đơn giá</th>
                  <th className="p-3 border-r-2 border-r-white">Huỷ</th>
                </tr>
              </thead>
              <tbody>
                {_.sortBy(danhSachGheDangDat, ["stt"])?.map((ghe, index) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 border-slate-700 "
                      key={index}
                    >
                      <td className="p-3">{ghe.stt}</td>
                      <td className="p-3">{ghe.giaVe.toLocaleString()}</td>
                      <td className="p-3">
                        <button
                          onClick={() => {
                            dispatch({
                              type: HUY_GHE,
                              maGhe: ghe.maGhe,
                            });
                          }}
                          className="flex items-center justify-center bg-red-500 p-2 text-white hover:bg-red-600"
                        >
                          <CloseOutlined />
                        </button>
                      </td>
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
            <div
              onClick={() => {
                const danhSachVe = _.map(danhSachGheDangDat, (item) =>
                  _.pick(item, ["maGhe", "giaVe"])
                );
                dispatch(
                  datVe({
                    maLichChieu: +ticketRoomID,
                    danhSachVe,
                  })
                );
              }}
              className="py-3 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer text-white text-center btn btn-bookingTicket font-bold text-xl "
            >
              Đặt vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TicketResult(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(layThongTinTaiKhoan());
  // }, []);
  const { userDetail } = useSelector(
    (stateList) => stateList.ManageUserReducer
  );
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Lịch Sử Đặt Vé
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Theo</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {userDetail.thongTinDatVe?.map((item, index) => {
            const danhSachGhe = [...item.danhSachGhe];
            const { tenHeThongRap, tenRap } = danhSachGhe[0];
            const listSeatsEachFilm = _.map(danhSachGhe, (item) =>
              _.pick(item, ["tenGhe"])
            );

            return (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={item.hinhAnh}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {item.tenPhim}
                    </h2>
                    <p className="text-gray-500">
                      Địa điểm : {tenRap} {tenHeThongRap}{" "}
                    </p>
                    <div className="text-gray-500 flex gap-4">
                      <div>Số lượng : {listSeatsEachFilm.length}</div>
                      <div>Đơn giá : {item.giaVe.toLocaleString()}</div>
                      <div>
                        Thành Tiến :{" "}
                        {(
                          listSeatsEachFilm.length * item.giaVe
                        ).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-gray-500 flex gap-2">
                      Ghế :{" "}
                      {listSeatsEachFilm.map((item) => (
                        <div
                          className="text-sm text-slate-700"
                          key={item.tenGhe}
                        >
                          {item.tenGhe}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default function Ticket(props) {
  const dispatch = useDispatch();
  const { tabActive } = useSelector(
    (stateList) => stateList.ManageTicketReducer
  );
  return (
    <div className="px-12 py-8">
      <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        onChange={(key) => {
          dispatch({ type: CHUYEN_TAB, number: key });
        }}
        activeKey={tabActive}
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout {...props}></Checkout>
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <TicketResult {...props}></TicketResult>
        </TabPane>
      </Tabs>
    </div>
  );
}
