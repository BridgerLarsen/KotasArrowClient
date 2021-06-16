import { combineReducers } from 'redux';

import dogs from './dogsReducer';
import faq from './faqReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    dogs,
    faq,
    auth: auth
});

export default rootReducer;