import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ManageFilmsReducer from "./reducers/ManageFilmsReducer";
const rootReducer = combineReducers({
  // State
  CarouselReducer,
  ManageFilmsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
