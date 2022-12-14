import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangKy } from "../../redux/actions/ManageUserActions";
import { history } from "../../App";
export default function SignUp(props) {
  const dispatch = useDispatch();
  const registerFormik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required(),
      matKhau: Yup.string()
        .required()
        .min(6, "Your password must have at least 6 characters")
        .max(32, "Your password just has at most 32 characters"),
      hoTen: Yup.string().required(),
      soDt: Yup.string()
        .required()
        .matches(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
          "Phone number is not valid"
        ),
      email: Yup.string()
        .required()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email is not valid"),
    }),
    onSubmit: (values) => {
      dispatch(dangKy(values));
    },
  });
  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-4 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                  ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
            Movie In Hand
          </div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          ????ng K??
        </h2>
        <div className="mt-12">
          <form onSubmit={registerFormik.handleSubmit}>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                T??i Kho???n
              </div>
              <input
                name="taiKhoan"
                onChange={registerFormik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder=""
                type="text"
              />
              <span className="text text-red-500">
                {registerFormik.touched && registerFormik.values.taiKhoan
                  ? registerFormik.errors.taiKhoan
                  : ""}
              </span>
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                M???t Kh???u
              </div>
              <input
                name="matKhau"
                onChange={registerFormik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder=""
                type="password"
              />
              <span className="text text-red-500">
                {registerFormik.touched && registerFormik.values.matKhau
                  ? registerFormik.errors.matKhau
                  : ""}
              </span>
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                H??? T??n
              </div>
              <input
                name="hoTen"
                onChange={registerFormik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder=""
                type="text"
              />
              <span className="text text-red-500">
                {registerFormik.touched && registerFormik.values.hoTen
                  ? registerFormik.errors.hoTen
                  : ""}
              </span>
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                name="email"
                onChange={registerFormik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="mike@gmail.com"
                type="email"
              />
              <span className="text text-red-500">
                {registerFormik.touched && registerFormik.values.email
                  ? registerFormik.errors.email
                  : ""}
              </span>
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                S??? ??i???n Tho???i
              </div>
              <input
                name="soDt"
                onChange={registerFormik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder=""
                type="text"
              />
              <span className="text text-red-500">
                {registerFormik.touched && registerFormik.values.soDt
                  ? registerFormik.errors.soDt
                  : ""}
              </span>
            </div>
            <div className="mt-10">
              <button
                onClick={() => {
                  history.goBack();
                }}
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
            shadow-lg"
              >
                ????ng K??
              </button>
            </div>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            <span className="mr-4">B???n ???? c?? t??i kho???n ?</span>
            <NavLink
              to="/login"
              className="cursor-pointer text-indigo-400 hover:text-indigo-600"
            >
              ????ng Nh???p
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
