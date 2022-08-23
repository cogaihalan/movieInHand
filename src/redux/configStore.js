import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ManageCinemasReducer from "./reducers/ManageCinemasReducer";
import ManageFilmsReducer from "./reducers/ManageFilmsReducer";
const rootReducer = combineReducers({
  // State
  CarouselReducer,
  ManageFilmsReducer,
  ManageCinemasReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
