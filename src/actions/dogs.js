import { SET_DOGS_INFO } from './types';

export function setDogsInfo(dogs) {
    return ({
        type: SET_DOGS_INFO,
        payload: dogs
    })
}

