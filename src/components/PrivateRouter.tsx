import React from 'react'
import { Navigate } from 'react-router-dom';
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const isAdmin = true;
    if(!isAdmin){
        return <Navigate to="/login" />
    }
  return props.children
}

export default PrivateRouter