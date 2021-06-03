import { 
    SET_DOGS_INFO,
    SET_DOG_INFO,
    SET_FAQ_DATA
} from './types';

export function setDogsInfo(dogs) {
    return ({
        type: SET_DOGS_INFO,
        payload: dogs
    })
}

export function setDogInfo(dog) {
    return({
        type: SET_DOG_INFO,
        payload: dog
    })
}

export function setFaqData(data) {
    return ({
        type: SET_FAQ_DATA,
        payload: data
    })
}

