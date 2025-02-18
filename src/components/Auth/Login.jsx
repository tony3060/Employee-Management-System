/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const login = ({handleLogin}) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-400 p-20">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input required value={email} onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-96 border-emerald-400 border-2 px-5 py-3 m-3 rounded-full placeholder:text-gray-400 text-xl"
            type="email" placeholder="Enter your E-mail..." />
          
          <input required value={password} onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent w-96 border-emerald-400 border-2 px-5 py-3 m-3 rounded-full placeholder:text-gray-400 text-xl"
            type="password" placeholder="Enter your password..." />
          
          <button type="submit" className="bg-emerald-400 border-none px-10 py-2 m-5 rounded-full active:scale-75 text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};


export default login;
