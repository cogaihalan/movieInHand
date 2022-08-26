import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import { Tabs, Rate } from "antd";
import "../../assets/styles/circle.css";
import { getFilmSchedule } from "../../redux/actions/ManageCinemasActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;
export default function Detail(props) {
  const dispatch = useDispatch();
  const filmID = props.match.params.id;
  useEffect(() => {
    dispatch(getFilmSchedule(filmID));
  }, []);
  const filmDetail = useSelector(
    (stateList) => stateList.ManageCinemasReducer.filmDetail
  );
  console.log(filmDetail);
  const renderFilmDetail = () => {
    return filmDetail.heThongRapChieu?.map((cinemas, index) => {
      return (
        <TabPane
          tab={
            <div className="flex items-center gap-3">
              <img
                src={cinemas.logo}
                alt={cinemas.tenHeThongRap}
                className="rounded-full w-16 h-16"
              />
              <span className="text-black">
                {cinemas.tenHeThongRap.toUpperCase()}
              </span>
            </div>
          }
          key={index}
        >
          {cinemas.cumRapChieu.map((cinema, index) => {
            return (
              <div key={index} className="px-3 mt-5">
                <div className="flex gap-5 items-center ">
                  <img
                    src={cinema.hinhAnh}
                    alt={cinema.tenCumRap}
                    className="w-16 h-16"
                  />
                  <div className="text-left text-black">
                    <p className="text-lg font-bold">{cinema.tenCumRap}</p>
                    <p className="text-xs text-slate-700">{cinema.diaChi}</p>
                  </div>
                </div>
                <div className="grid grid-cols-6 mt-5 gap-4">
                  {cinema.lichChieuPhim?.map((gioChieu, index) => {
                    return (
                      <NavLink
                        to={`/checkout/${gioChieu.maLichChieu}`}
                        key={index}
                        className="p-2 font-semibold rounded bg-slate-500 hover:text-zinc-800 text-white text-center"
                      >
                        {moment(gioChieu.ngayChieuGioChieu).format("hh:mm A")}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };
  return (
    <div
      style={{
        background: `url(${filmDetail.hinhAnh}) center/cover no-repeat`,
      }}
    >
      <CustomCard
        className="min-h-screen min-w-full"
        effectColor="rgba(255,255,255,0.4)" // required
        color="#fff" // default color is white
        blur={5} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container w-3/5 mx-auto pt-28">
          <div className="flex justify-between  ">
            <div className="film-info-left flex items-center gap-5">
              <div className="film-info">
                <img
                  className="block  w-48 h-60"
                  src={`${filmDetail.hinhAnh}`}
                  alt="logo-detail"
                />
              </div>
              <div className="film-info w-2/3">
                <p className="text-sm">
                  Ngày khởi chiếu:
                  <span className="font-semibold text-lg ml-3">
                    {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                  </span>
                </p>
                <p className="text-xl mt-2 mb-5 font-bold">
                  {filmDetail.tenPhim}
                </p>
                <p className="text-sm">{filmDetail.moTa}</p>
              </div>
            </div>
            <div className="film-info-right flex flex-col items-center">
              <div className={`c100  p${filmDetail.danhGia * 10}  big green `}>
                <span>{filmDetail.danhGia}</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              {/* <Rate
                allowHalf
                defaultValue={Number(filmDetail.danhGia / 2)}
                style={{ color: "mediumseagreen" }}
              /> */}
            </div>
          </div>
          <div className="film-schedule  p-5 mx-auto bg-white bg-opacity-70 mt-16">
            <Tabs tabPosition={"top"}>
              <TabPane tab="Lịch Chiếu" key="1">
                <Tabs tabPosition={"left"}>{renderFilmDetail()}</Tabs>
              </TabPane>
              {/* <TabPane tab="Thông tin" key="2">
                Content of Tab 2
              </TabPane>
              <TabPane tab="Đánh giá" key="3">
                Content of Tab 3
              </TabPane> */}
            </Tabs>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
