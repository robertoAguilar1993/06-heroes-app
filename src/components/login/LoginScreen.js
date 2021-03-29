import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    let lastPath = localStorage.getItem('lastPath') || '/';
    const search = localStorage.getItem('search') || '';

    if(search !== ''){
        lastPath = lastPath + search;
    }


    const handleLogin = ()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'beto',
                email: 'beto@gmail.com'
            }
        }
        dispatch(action);
        history.push(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
