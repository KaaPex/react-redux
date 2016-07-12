import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  authors,
  courses // in ES6 its mean courses: courses
});

export default rootReducer;
