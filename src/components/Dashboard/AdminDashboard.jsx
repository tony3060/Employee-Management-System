import React, { useContext } from 'react';
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = () => {
  const [employees] = useContext(AuthContext);
  
  // Combine all tasks from all employees.
  const allTasks = employees 
    ? employees.flatMap(emp => 
        emp.tasks.map(task => ({
          employeeName: emp.firstName,
          ...task
        }))
      ) 
    : [];

  return (
    <div className="h-screen p-10">
      <Header />
      <CreateTask />
      <AllTask tasks={allTasks} />
    </div>
  );
};

export default AdminDashboard;
