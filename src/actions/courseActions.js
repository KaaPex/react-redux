import * as types from './actionsTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCoursesSuccess(course) {
  return { type: types.UPDATE_COURSES_SUCCESS, course};
}

export function createCoursesSuccess(course) {
  return { type: types.CREATE_COURSES_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
     dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(currCourse) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(currCourse).then(course => {
      currCourse.id ? dispatch(updateCoursesSuccess(course)) :
        dispatch(createCoursesSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
