/* eslint-disable no-unused-vars */
import React from "react";
import { setLocalStorage } from "../../utils/localStorage";

// eslint-disable-next-line react/prop-types
const Header = ({ data }) => {
  let logOutUser = () =>{
    localStorage.setItem("loggedInUser","");
    window.location.reload();
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">Priyanshu</span>
        👋
      </h1>
      <button onClick={logOutUser} className="bg-red-500 px-3 py-1 rounded-md cursor-pointer active:scale-90 font-bold text-lg">
        Log Out
      </button>
    </div>
  );
};

export default Header;
