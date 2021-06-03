import { 
    SET_FAQ_DATA
} from './types';

export function setFaqData(data) {
    return ({
        type: SET_FAQ_DATA,
        payload: data
    })
}