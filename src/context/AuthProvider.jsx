/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export let AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    let {employees, admin} = getLocalStorage();
  setUserData({employees, admin});   
  }, [])
  

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
