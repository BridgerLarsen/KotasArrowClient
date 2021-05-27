import { 
    SET_DOGS_INFO,
    SET_DOG_INFO
} from '../actions/types';

const INITIAL_STATE = {
    dogs: [],
    dog: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_DOGS_INFO:
            return ({
                ...state,
                dogs: action.payload
            })

        case SET_DOG_INFO:
            return({
                ...state,
                dog: action.payload
            })
        default: return state;
    }
}