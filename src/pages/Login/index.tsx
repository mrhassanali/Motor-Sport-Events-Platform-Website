import React, { useState } from "react";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import {
  LockClosedIcon,
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { SignInSignout } from "../../Layout";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../constants/constants";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <SignInSignout>
      <div className="text-center text-black">
        <h1 className="text-lg font-bold"> Login to your Account</h1>
        <p className="text-slate-600"> Welcome back! Select method to login.</p>
      </div>
      <div className="inline-flex justify-center items-center gap-x-4 mt-3 w-full">
        <button className="shadow-lg border w-fit border-slate-300 px-5 rounded-full py-2 font-semibold inline-flex justify-between items-center gap-x-4">
          <GoogleIcon className="w-4 h-4" /> Google
        </button>
        <button className="shadow-lg border w-fit border-slate-300 px-5 rounded-full py-2 font-semibold inline-flex justify-between items-center gap-x-4">
          <FacebookIcon className="w-5 h-5" /> Facebook
        </button>
      </div>
      <div className="inline-flex items-center justify-center w-full relative mt-3 text-center">
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className=" w-8/12 mx-auto absolute font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          or continue with email
        </span>
      </div>
      <div className="mt-4">
        <form action="#" className="flex flex-col gap-y-2 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <AtSymbolIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <LockClosedIcon
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                onClick={togglePasswordVisibility}
              />
            </div>
            <input
              type={isShowPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pe-3.5  z-0">
              {isShowPassword ? (
                <EyeSlashIcon
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <EyeIcon
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <button className="bg-[#d31f22] text-white font-semibold rounded-lg py-2">
            Login
          </button>
        </form>
        <p className="text-slate-500 mt-3 mb-3 text-center">
          Don't have an account?{" "}
          <Link to={`/${SIGN_UP}`}>
            <span className="px-2 text-[#d31f22]">Create an account</span>
          </Link>{" "}
        </p>
      </div>
    </SignInSignout>
  );
}
