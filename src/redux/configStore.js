import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ManageCinemasReducer from "./reducers/ManageCinemasReducer";
import ManageFilmsReducer from "./reducers/ManageFilmsReducer";
import ManageTicketReducer from "./reducers/ManageTicketReducer";
import ManageUserReducer from "./reducers/ManageUserReducer";
import LoadingReducer from "./reducers/LoadingReducer";
const rootReducer = combineReducers({
  // State
  CarouselReducer,
  ManageFilmsReducer,
  ManageCinemasReducer,
  ManageUserReducer,
  ManageTicketReducer,
  LoadingReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
