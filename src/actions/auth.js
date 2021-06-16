import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    TOKEN_EXISTS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR
    // REGISTER_SUCCESS,
    // REGISTER_FAIL
} from './types';

export const getToken = () => {
    return function(dispatch) {
        axios.get('http://localhost:5000/api/auth/logged_in', 
        { withCredentials: true })    
        .then(res => {
            if (res.data.token) {
                dispatch({
                    type: TOKEN_EXISTS,
                    payload: `${res.data.token}` 
                })
            } else {
                dispatch({
                    type: TOKEN_EXISTS,
                    payload: null
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}

// Check token & load user
export const loadUser = () => {
    return function(dispatch, getState) {
        // User loading
        dispatch({ type: USER_LOADING });
    
        axios
        .get('http://localhost:5000/api/auth/users', 
        headerConfig(getState),
        { withCredentials: true })
        .then(res =>
            dispatch({
              type: USER_LOADED,
              payload: res.data
            })
        )
        .catch(err => {
            dispatch({
            type: AUTH_ERROR,
            payload: err.response.data
            });
        });
    }
  };

export const login = ( email, password ) => {
    return function(dispatch) {
        axios.post('http://localhost:5000/api/auth/login', 
        {
            email: email,
            password: password
        }, 
        { withCredentials: true },
        headerConfig())
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            // console.log("Error trying to sign in", err.response.status, err.response.data);
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data
            })
        })
    }
}

export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };    


const headerConfig = (getState) => {
    let token = null;

    if (getState) {
        token = getState().auth.token;
    }

    const options = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    if (token) {
        options.headers['x-auth-token'] = token;
    };

    return options;
}
