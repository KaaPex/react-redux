import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors,
  courses, // in ES6 its mean courses: courses
  ajaxCallsInProgress
});

export default rootReducer;
