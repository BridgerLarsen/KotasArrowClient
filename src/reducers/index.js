import { combineReducers } from 'redux';

import dogs from './dogsReducer';
import faq from './faqReducer';

const rootReducer = combineReducers({
    dogs,
    faq
});

export default rootReducer;