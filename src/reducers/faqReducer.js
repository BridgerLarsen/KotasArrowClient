import {
    SET_FAQ_DATA
} from '../actions/types';

const INITIAL_STATE = {
    faqData: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FAQ_DATA:
            return ({
                ...state,
                faqData: action.payload
            })

            default: return state
    }
}