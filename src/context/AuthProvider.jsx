import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, initializeLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Ensure local storage is populated on app start
    initializeLocalStorage()
    const { employees } = getLocalStorage()
    if (employees) {
      setUserData(employees)
    }
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider