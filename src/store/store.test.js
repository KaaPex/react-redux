/**
 * Created on 03.08.16.
 * store.test.js of react-redux project
 */
import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import *  as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating course', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Create Music'
    };

    // act
    const action = courseActions.createCoursesSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Create Music'
    };

    expect(course).toEqual(expected);
  });
});
