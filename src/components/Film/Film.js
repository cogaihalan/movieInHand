import React from "react";

export default function Film(props) {
  const { film } = props;
  return (
    <div className="h-full bg-gray-100 bg-opacity-75 px-4 pb-12  rounded-lg overflow-hidden text-center relative">
      <div
        className="h-72"
        style={{ background: `url(${film.hinhAnh}) center/contain  no-repeat` }}
      >
        <img
          src={film.hinhAnh}
          alt={film.hinhAnh}
          className="opacity-0 w-full h-80"
        />
      </div>
      <h1 className="font-bold uppercase my-2 text-xl ">{film.tenPhim}</h1>
      <p className="h-12 mb-2">
        {film.moTa.length > 100 ? ` ${film.moTa.slice(0, 100)} ...` : film.moTa}
      </p>
      <a href className="text-indigo-500 inline-flex items-center">
        ĐẶT VÉ
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
