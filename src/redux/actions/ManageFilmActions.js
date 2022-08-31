import { QLFilmsService } from "../../services/ManageFilmsService";
import { STATUS_CODE } from "../../utils/settings/config";
import {
  GET_FILM_DETAIL,
  GET_LIST_FILMS,
} from "../constants/ManageFilmsConstants";
import { history } from "../../App";
export const getListFilms = (keyword = "") => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLFilmsService.layDanhSachPhim(keyword);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_LIST_FILMS,
          data: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadFilm = (formData) => {
  return async (dispatch) => {
    try {
      const { status } = await QLFilmsService.themPhimUploadHinh(formData);
      if (status === STATUS_CODE.SUCCESS) {
        history.push("/admin/films");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const getFilmDetail = (maPhim) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLFilmsService.layThongTinPhim(maPhim);

      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_FILM_DETAIL,
          filmDetail: data.content,
        });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const updateFilm = (formData) => {
  return async (dispatch) => {
    try {
      const { data, status } = await QLFilmsService.capNhatPhimUpload(formData);
      console.log({ data, status });
      // if (status === STATUS_CODE.SUCCESS) {
      //   history.push("/admin/films");
      // }
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteFilm = (maPhim) => {
  return async (dispatch) => {
    try {
      await QLFilmsService.xoaPhim(maPhim);
      dispatch(getListFilms());
    } catch (err) {
      console.log(err.response);
    }
  };
};
