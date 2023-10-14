import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedScreens({children}) {
    const token=localStorage.getItem('token')
    if (token)
    return children

    return <Navigate to="/"/>

  
}

export default ProtectedScreens
