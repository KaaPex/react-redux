/**
 * Created on 12.07.16.
 * authorReducer of react-redux project
 */
import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
