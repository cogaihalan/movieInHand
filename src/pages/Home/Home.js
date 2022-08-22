import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import { getListFilms } from "../../redux/actions/ManageFilmActions";
import Film from "../../components/Film/Film";
import MultipleRows from "../../components/React_Slick/MultipleRows";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFilms());
  }, []);
  const listFilms = useSelector(
    (stateList) => stateList.ManageFilmsReducer.listFilms
  );

  return (
    <div>
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <MultipleRows listFilms={listFilms}></MultipleRows>
          </div>
        </section>
      </div>
      <HomeMenu></HomeMenu>
    </div>
  );
}
