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
      state.filterFilms = [...state.filterFilms].filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return {
        ...state,
        dangChieu: !state.dangChieu,
       
        listFilms: state.filterFilms,
      };
    case SET_FILMS_SAP_CHIEU:
      state.filterFilms = [...state.filterFilms].filter(
        (film) => film.dangChieu === false && film.sapChieu === true
      );
      return {
        ...state,
        dangChieu: false,
        sapChieu: !state.sapChieu,
        listFilms: state.filterFilms,
      };
    default:
      return { ...state };
  }
};
export default ManageFilmsReducer;
