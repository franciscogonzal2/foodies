import { Map } from 'immutable';
import {
    GET_CATEGORIES_ACTION_START,
    GET_CATEGORIES_ACTION_SUCCESS
} from '../actions/Categories';

const initialState = Map({
    categories: null,
  });

  const actionsMap = {
    [GET_CATEGORIES_ACTION_START]: (state) => {
      return state.merge({
        categories: null,
      });
    },
    [GET_CATEGORIES_ACTION_SUCCESS]: (state, action) => {
      return state.merge(Map({
        categories: action.data,
      }));
    },
  };
  export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
  }