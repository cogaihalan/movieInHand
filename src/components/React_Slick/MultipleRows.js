import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRows.module.css";
// import Film from "../Film/Film";
import { useSelector, useDispatch } from "react-redux";
import FilmFlip from "../Film/FilmFlip";
import {
  GET_LIST_FILMS,
  SET_FILMS_DANG_CHIEU,
  SET_FILMS_SAP_CHIEU,
} from "../../redux/constants/ManageFilmsConstants";
const settings = {
  className: "center variable-width",
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  centerPadding: "40px",
  speed: 500,
  rows: 1,
  slidesPerRow: 1,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}
export default function MultipleRows(props) {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (stateList) => stateList.ManageFilmsReducer
  );
  const renderDanhSachPhim = () => {
    return props.listFilms.map((film, index) => {
      return <FilmFlip film={film} key={index}></FilmFlip>;
    });
  };
  let activeAllFilm =
    !dangChieu && !sapChieu ? "active_Film" : "none_active_Film";
  let activeFilmDangChieu = dangChieu ? "active_Film" : "none_active_Film";
  let activeFilmSapChieu = sapChieu ? "active_Film" : "none_active_Film";

  return (
    <div>
      <div className="film-categories mb-4">
        <button
          onClick={() => {
            // dispatch({
            //   type: GET_LIST_FILMS,
            // });
          }}
          type="button"
          className={`px-8 py-3 font-semibold uppercase border rounded  dark:border-gray-100 dark:text-gray-100 mr-3 ${styleSlick[activeAllFilm]}`}
        >
          Tất cả phim
        </button>
        <button
          onClick={() => {
            dispatch({
              type: SET_FILMS_DANG_CHIEU,
            });
          }}
          type="button"
          className={`px-8 py-3 font-semibold uppercase border rounded  dark:border-gray-100 dark:text-gray-100 mr-3 ${styleSlick[activeFilmDangChieu]}`}
        >
          Phim Đang Chiếu
        </button>
        <button
          onClick={() => {
            dispatch({
              type: SET_FILMS_SAP_CHIEU,
            });
          }}
          type="button"
          className={`px-8 py-3 font-semibold uppercase border rounded  dark:border-gray-100 dark:text-gray-100 mr-3 ${styleSlick[activeFilmSapChieu]}`}
        >
          Phim Sắp Chiếu
        </button>
      </div>
      <Slider {...settings}>{renderDanhSachPhim()}</Slider>
    </div>
  );
}
