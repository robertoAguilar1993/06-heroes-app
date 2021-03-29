import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';
import LoginScreen from '../components/login/LoginScreen';

const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            exact
                            path="/login"
                            component = { LoginScreen } 
                            isAuthenticated={user.logged}/>
                        <PrivateRoute 
                            path="/" 
                            component = { DashboardRoutes }
                            isAuthenticated={user.logged}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter
