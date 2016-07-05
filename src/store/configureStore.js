import {createStore, applyMiddleware} from 'redux';
import rooteReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rooteReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
