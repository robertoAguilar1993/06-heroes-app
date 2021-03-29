import React from 'react'

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);
    localStorage.setItem('search', rest.location.search);

    return (
        <Route {...rest} 
            component = { (props)=>{
                return (isAuthenticated) ? 
                <Component  {...props } /> : 
                <Redirect to="/login" />;
            }
            }
        />
            
    )
}

export default PrivateRoute
