import React, { Fragment } from "react";
import { Tabs } from "antd";
import moment from "moment";
const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const { cinemasSystem } = props;  const renderCinemasSystem = () => {
    return cinemasSystem?.map((cinema, index) => {
      return (
        <TabPane
          tab={
            <img
              src={cinema.logo}
              alt={cinema.tenHeThongRap}
              className="rounded-full  w-16 h-16"
            />
          }
          key={index}
        >
          <Tabs tabPosition="left">
            {cinema.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex justify-start items-center w-96 gap-4">
                      <img
                        src={cumRap.hinhAnh}
                        alt={cinema.tenCumRap}
                        className=" w-16 h-16"
                      />
                      <div className="cinema-info text-left">
                        <div className="text-sm font-bold">
                          {cumRap.tenCumRap}
                        </div>
                        <div className="text-xs font-semibold text-gray-500 my-2">
                          {cumRap.diaChi}
                        </div>
                        <p className="text-amber-500">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 5)?.map((film, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="flex justify-start   gap-4 mb-4">
                          <img
                            src={film.hinhAnh}
                            alt={film.tenPhim}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://picsum.photos/300/300";
                            }}
                            className=" w-20 h-20 rounded-full"
                          />
                          <div className="cinema-info">
                            <h3 className="text-lg font-semibold">
                              {film.tenPhim}
                            </h3>
                            <div className="grid grid-cols-6 gap-3">
                              {film.lstLichChieuTheoPhim
                                .slice(0, 12)
                                ?.map((filmTimeline, index) => {
                                  return (
                                    <button
                                      className=" border rounded-md p-2 font-semibold bg-slate-500 text-white"
                                      key={index}
                                    >
                                      {moment(
                                        filmTimeline.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </button>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <>
      <div className="py-12">
        <Tabs className="w-3/4  " tabPosition="left">
          {renderCinemasSystem()}
        </Tabs>
      </div>
    </>
  );
}
