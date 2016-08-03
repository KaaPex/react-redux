/**
 * Created on 03.08.16.
 * courseActions.test of react-redux project
 */
import expect from 'expect';
import *  as courseActions from './courseActions';
import * as types from './actionsTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should creat a COURSE_ACTION_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      const action = courseActions.createCoursesSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe ('Async Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS then loading courses', (done) => {
    // here is example call nock
    // var scope = nock('http://www.example.com')
    //   .get('/courses')
    //   .reply(200, {body: { course: [{ id:1, firstNamy: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: { course: [{ id:1, firstNamy: 'Cory', lastName: 'House'}] }}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();

      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);

      done();
    });
  });
});
