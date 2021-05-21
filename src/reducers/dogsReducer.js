import { 
    SET_DOGS_INFO
} from '../actions/types';

const INITIAL_STATE = {
    dogs: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_DOGS_INFO:
            return ({
                ...state,
                dogs: action.payload
            })
            default: return state;
    }
}