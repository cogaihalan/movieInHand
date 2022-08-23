import {
  GET_LIST_FILMS,
  SET_FILMS_DANG_CHIEU,
  SET_FILMS_SAP_CHIEU,
} from "../constants/ManageFilmsConstants";

const initialState = {
  listFilms: [],
  dangChieu: false,
  sapChieu: false,
  filterFilms: [],
};

const ManageFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_FILMS:
      return {
        ...state,
        listFilms: action.data,
        filterFilms: action.data,
        dangChieu: false,
        sapChieu: false,
      };

    case SET_FILMS_DANG_CHIEU:
      state.dangChieu = !state.dangChieu;
      state.listFilms = [...state.filterFilms].filter(
        (film) => film.dangChieu === state.dangChieu
      );
      if (state.sapChieu === true) {
        state.sapChieu = false;
      }
      return {
        ...state,
      };
    case SET_FILMS_SAP_CHIEU:
      state.sapChieu = !state.sapChieu;
      state.listFilms = [...state.filterFilms].filter(
        (film) => film.sapChieu === state.sapChieu
      );
      if (state.dangChieu === true) {
        state.dangChieu = false;
      }
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
export default ManageFilmsReducer;
