import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import { getListFilms } from "../../redux/actions/ManageFilmActions";
import { getCinemasSystem } from "../../redux/actions/ManageCinemasActions";
// import Film from "../../components/Film/Film";
import MultipleRows from "../../components/React_Slick/MultipleRows";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFilms());
    dispatch(getCinemasSystem());
  }, []);
  const listFilms = useSelector(
    (stateList) => stateList.ManageFilmsReducer.listFilms
  );
  const { cinemasSystem } = useSelector(
    (stateList) => stateList.ManageCinemasReducer
  );
  return (
    <div className="home">
      <div className="w-full home__list-films">
        <div className="container mx-auto">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <MultipleRows listFilms={listFilms}></MultipleRows>
            </div>
          </section>
        </div>
      </div>
      <HomeMenu cinemasSystem={cinemasSystem}></HomeMenu>
    </div>
  );
}
