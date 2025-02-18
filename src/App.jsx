/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage, getLocalStorage } from "./utils/localStorage"; 


const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userdata,setUserdata] = useContext(AuthContext);

 useEffect(() => {
   let loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      let userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData);
      console.log(userData);
    }
 },[])
 
  

 let handleLogin = (email, password) => {
  const { employees, admin } = getLocalStorage();

  if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  } else if (employees) {
      let employee = employees.find((e) => e.email === email && e.password === password);
      if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
          alert("Invalid Credentials");
      }
  } else {
      alert("No users found. Please check your data.");
  }
};
  return (
    <>
     {!user ? <Login handleLogin = {handleLogin}/>  : ""}
     {user=== 'admin' ? <AdminDashboard /> : ""}
     {user === 'employee' ? <EmployeeDashboard data = {loggedInUserData}/> : ""}

      
    </>
  )
}

export default App
