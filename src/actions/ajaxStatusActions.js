/**
 * Created on 19.07.16.
 * ajaxStatusActions of react-redux project
 */
import * as types from './actionsTypes';

export function beginAjaxCall() {
  return {
    type: types.BEGIN_AJAX_CALL
  };
}

export function ajaxCallError() {
  return {
    type: types.AJAX_CALL_ERROR
  };
}
