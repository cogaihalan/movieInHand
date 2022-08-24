import {
  GET_CINEMAS_SYSTEM,
  GET_FILM_DETAIL,
} from "../constants/ManageCinemasConstants";

const initialState = {
  cinemasSystem: [],
  filmDetail: [],
};

const ManageCinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS_SYSTEM:
      return { ...state, cinemasSystem: action.data };
    case GET_FILM_DETAIL:
      return { ...state, filmDetail: action.data };
    default:
      return state;
  }
};

export default ManageCinemasReducer;
