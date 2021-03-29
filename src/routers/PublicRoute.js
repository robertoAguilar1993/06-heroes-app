import React from 'react'

import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} 
            component = { (props)=>{
                return (!isAuthenticated) ? 
                <Component  {...props } /> : 
                <Redirect to="/" />;
            }
            }
        />
            
    )
}

export default PublicRoute
