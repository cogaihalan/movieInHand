import React from "react";
import { useSelector } from "react-redux";
export default function Loading() {
  const { isLoading } = useSelector((stateList) => stateList.LoadingReducer);
  return isLoading ? (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className=" text-white text-xl">Loading ...</div>
    </div>
  ) : (
    ""
  );
}
