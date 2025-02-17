/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const TaskListNumbers = (data) => {
  console.log(data);
  return (
    <div className="flex mt-10 justify-between gap-5 screen ">
      <div className="bg-red-400 px-9 py-6 rounded-xl w-[45%] ">
        <h2 className="text-3xl font-bold">hello</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="bg-blue-400 px-9 py-6 rounded-xl w-[45%] ">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>
      <div className="bg-green-400 px-9 py-6 rounded-xl w-[45%] ">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="bg-yellow-400 px-9 py-6 rounded-xl w-[45%] ">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
