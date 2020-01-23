import * as actionTypes from '../actions/types';
const initialState = {
  userData: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      console.log('USERDATA', action.payload);
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}
