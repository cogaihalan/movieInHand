import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
export const displayLoadingAction = () => ({
  type: DISPLAY_LOADING,
});
export const hideLoadingAction = () => ({
  type: HIDE_LOADING,
});
