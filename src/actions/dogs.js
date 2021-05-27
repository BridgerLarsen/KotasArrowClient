import { 
    SET_DOGS_INFO,
    SET_DOG_INFO
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

