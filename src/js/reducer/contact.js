import { Map } from 'immutable';
import {
    GET_CONTACT_ACTION_START,
    GET_CONTACT_ACTION_SUCCESS
} from '../actions/ContactUs';

const initialState = Map({
    contact: null,
  });

  const actionsMap = {
    [GET_CONTACT_ACTION_START]: (state) => {
      return state.merge({
        contact: null,
      });
    },
    [GET_CONTACT_ACTION_SUCCESS]: (state, action) => {
      return state.merge(Map({
        contact: action.data,
      }));
    },
  };
  export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
  }