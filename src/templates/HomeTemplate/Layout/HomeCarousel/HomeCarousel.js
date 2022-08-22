import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getFilmCarousel } from "../../../../redux/actions/CarouselActions";

export default function HomeCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmCarousel());
  }, []);
  const listFilms = useSelector(
    (stateList) => stateList.CarouselReducer.listFilms
  );
  const contentStyle = {
    height: "750px",
    color: "#fff",
    width: "100%",
    lineHeight: "150px",
    textAlign: "center",
    background: "no-repeat center 100%  ",
  };
  const renderFilmCarousel = () => {
    return listFilms.map((film, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${film.hinhAnh})` }}
          >
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              className="w-full h-full
               opacity-0"
            />
          </div>
        </div>
      );
    });
  };
  return (
    <Carousel autoplay style={{ zIndex: 1 }} className="relative">
      {renderFilmCarousel()}
    </Carousel>
  );
}
