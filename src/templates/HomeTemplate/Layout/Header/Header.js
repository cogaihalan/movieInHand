import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 fixed w-full bg-black bg-opacity-70 z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="logo1.png" alt="logo" width={265} />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-white "
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="news"
              activeClassName="border-b-2 border-indigo-300"
              className="flex items-center px-4 -mb-1  text-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/login"
            className="self-center px-8 py-3 rounded text-white"
          >
            Log in
          </NavLink>
          <NavLink
            to="./register"
            className="self-center px-8 py-3 font-semibold rounded text-white "
          >
            Sign up
          </NavLink>
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
