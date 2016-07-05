import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // in ES6 its mean courses: courses
});

export default rootReducer;
