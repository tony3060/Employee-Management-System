import React from 'react';

const AllTask = ({ tasks }) => {
  return (
    <div className="removeScroll bg-[#1C1C1C] mt-5 p-5 h-50 rounded overflow-auto">
      {tasks && tasks.length ? (
        tasks.map((task, idx) => (
          <div key={idx} className={`px-4 py-2 flex justify-between items-start rounded mb-2 ${getColor(task.category)}`}>
            <h2>{task.employeeName}</h2>
            <h3>{task.taskTitle}</h3>
            <h5>{taskStatus(task)}</h5>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

// Helper function to get a background color based on the task category
const getColor = (category) => {
  switch(category) {
    case 'Design':
      return 'bg-red-400';
    case 'Development':
      return 'bg-blue-400';
    case 'Database':
      return 'bg-green-400';
    case 'Documentation':
      return 'bg-purple-400';
    case 'DevOps':
      return 'bg-yellow-400';
    default:
      return 'bg-gray-400';
  }
};

// Helper function to determine the task status
const taskStatus = (task) => {
  if (task.newTask) return "New Task";
  if (task.active) return "Active Task";
  if (task.completed) return "Completed Task";
  if (task.failed) return "Failed Task";
  return "Status Unknown";
};

export default AllTask;
