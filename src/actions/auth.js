import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    TOKEN_EXISTS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR
} from './types';

// Check token & load user
export const loadUser = () => {
    return async function(dispatch, getState) {
        await axios.get('/api/auth/logged_in', 
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

        // User loading
        dispatch({ type: USER_LOADING });
    
        await axios
        .get('/api/auth/users', 
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
        axios.post('/api/auth/login', 
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
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data
            })
        })
    }
}

export const logout = () => {
    return function(dispatch) {
        axios.delete('/api/auth/loggout', 
        { withCredentials: true })
        .then(res => {
            if (res.data.loggedOut === "Success") {
                dispatch({
                    type: LOGOUT_SUCCESS
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
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
