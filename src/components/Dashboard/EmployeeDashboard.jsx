/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../other/TaskList";
import AllTask from "../other/AllTask";

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({data}) => {
  // console.log({data});
  return (
    <div className="h-screen bg-[#1C1C1C] p-10">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
