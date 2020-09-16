import { Map } from 'immutable';
import {
    GET_MENU_ACTION_START,
    GET_MENU_ACTION_SUCCESS
} from '../actions/Menu';

const initialState = Map({
    menuInfo: null,
  });

  const actionsMap = {
    [GET_MENU_ACTION_START]: (state) => {
      return state.merge({
        menuInfo: null,
      });
    },
    [GET_MENU_ACTION_SUCCESS]: (state, action) => {
      return state.merge(Map({
        menuInfo: action.data,
      }));
    },
  };
  export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
  }