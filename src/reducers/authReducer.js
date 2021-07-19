import {
    USER_LOADED,
    USER_LOADING,
    TOKEN_EXISTS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR
  } from '../actions/types';

const INITIAL_STATE = {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    user: null,
    authError: '' 
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOADING: 
            return ({
                ...state,
                isLoading: true
            });
        case USER_LOADED:
            return ({
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            })
        case LOGIN_SUCCESS:
            return ({
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            })
        case TOKEN_EXISTS:
            return ({
                ...state,
                token: action.payload
            })
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            return({
                ...state,
                token: "",
                user: null,
                isAuthenticated: false,
                isLoading: false,
                authError: action.payload
            })
        default: return state;
    }
}