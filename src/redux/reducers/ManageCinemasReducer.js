import { GET_CINEMAS_SYSTEM } from "../constants/ManageCinemasConstants";

const initialState = {
  cinemasSystem: [],
};

const ManageCinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS_SYSTEM:
      return { ...state, cinemasSystem: action.data };

    default:
      return state;
  }
};

export default ManageCinemasReducer;
