import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data?.tasks?.map((elem, idx) => {
        // Render new tasks first
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        // Then check for active tasks
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        // Next, render completed tasks
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        // Lastly, render failed tasks
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;