import { GET_FILM_CAROUSEL } from "../constants/ManageFilmsConstants";
const initialState = {
  listFilms: [],
};

const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_CAROUSEL:
      return { ...state, listFilms: action.data };

    default:
      return { ...state };
  }
};
export default CarouselReducer;
