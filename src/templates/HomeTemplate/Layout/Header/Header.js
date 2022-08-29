import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { useSelector } from "react-redux";
import _ from "lodash";
import { history } from "../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../utils/settings/config";
const { Option } = Select;
export default function Header() {
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const { userLogin } = useSelector((stateList) => stateList.ManageUserReducer);
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/login"
            className="self-center px-8 py-3 rounded text-white"
          >
            {t("Log In")}
          </NavLink>
          <NavLink
            to="./register"
            className="self-center px-8 py-3 font-semibold rounded text-white "
          >
            {t("Sign Up")}
          </NavLink>
        </div>
      );
    }
    return (
      <div className="items-center flex-shrink-0 hidden lg:flex">
        <NavLink
          to="/contact"
          className="self-center px-8 py-3 rounded text-white"
        >
          {t("Hello")} !!!!
          <span className="text-lg font-bold">{userLogin.hoTen}</span>
        </NavLink>
        <button
          onClick={() => {
            localStorage.removeItem(TOKEN);
            localStorage.removeItem(USER_LOGIN);
            history.push("/");
            window.location.reload();
          }}
          className="self-center px-8 py-3 font-semibold rounded text-white hover:text-indigo-400"
        >
          {t("Log Out")}
        </button>
      </div>
    );
  };
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 fixed w-full bg-black bg-opacity-70 z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="logo1.png" alt="logo" width={265} />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-md text-white "
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-md text-white"
            >
              {t("Contact")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="news"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-md text-white"
            >
              {t("News")}
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
          <Select
            defaultValue="en"
            style={{
              width: 125,
            }}
            onChange={handleChange}
          >
            <Option value="en">English</Option>
            <Option value="vi">Vietnamese</Option>
          </Select>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
